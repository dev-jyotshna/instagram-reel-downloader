import chromium from "chrome-aws-lambda";
import puppeteer, { Browser } from "puppeteer-core";

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { url } = req.body;

  if (!url || !url.includes("instagram.com/reel/")) {
    return res.status(400).json({ error: "Invalid Instagram reel URL" });
  }

  let browser: Browser | null = null;

  try {
    const executablePath = await chromium.executablePath;

    if (!executablePath) {
      throw new Error("Chromium executablePath is undefined");
    }

    browser = await puppeteer.launch({
      args: chromium.args,
      executablePath,
      headless: chromium.headless,
    });

    const page = await browser.newPage();

    await page.setUserAgent(
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 " +
        "(KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
    );

    await page.goto(url, { waitUntil: "networkidle2", timeout: 0 });

    await page.waitForSelector('meta[property="og:video"]', { timeout: 10000 });

    const videoUrl = await page.$eval('meta[property="og:video"]', (el) =>
      el.getAttribute("content")
    );

    const caption = await page.$eval('meta[property="og:description"]', (el) =>
      el.getAttribute("content")
    );

    return res.status(200).json({ videoUrl, caption });
  } catch (error) {
    console.error("Scraping error:", error);
    return res.status(500).json({ error: "Failed to scrape Instagram reel" });
  } finally {
    if (browser !== null) {
      await browser.close();
    }
  }
}
