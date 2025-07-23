import type { NextApiRequest, NextApiResponse } from "next";
import chromium from "chrome-aws-lambda";
import puppeteer, { Browser } from "puppeteer-core";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { url } = req.body;
  if (!url || !url.includes("instagram.com/reel/")) {
    return res.status(400).json({ error: "Invalid Instagram reel URL" });
  }

  let browser: Browser | null = null;
  try {
    browser = await puppeteer.launch({
      args: chromium.args,
      executablePath: await chromium.executablePath,
      headless: chromium.headless,
    });

    const page = await browser.newPage();
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
    console.error("Error scraping:", error);
    return res.status(500).json({ error: "Failed to scrape Instagram reel" });
  } finally {
    if (browser !== null) {
      await browser.close();
    }
  }
}
