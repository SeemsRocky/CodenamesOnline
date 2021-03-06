import '@babel/polyfill';
// import * as puppeteer from 'puppeteer';
const puppeteer = require('puppeteer');

const APP = 'http://localhost:3000/';

describe('testing our life stories', () => {
  let page;
  let browser;
  beforeAll(async () => {
    browser = await puppeteer.launch({
      args: ['--no-sandbox', '--disable-setuid-sandbox', '--headless', '--disable-gpu'],
    });
    page = await browser.newPage();
  });
  afterAll(() => {
    browser.close();
  });
  describe('Testing / route and all functionality', () => {
    it('can input username', async () => {
      await page.goto(APP);
      await page.waitForSelector('#username');
      await page.focus('#username');
      await page.keyboard.type('Boulder');
      const username = await page.$eval('#username', (el) => el.value);
      expect(username).toBe('Boulder');
    });

    it('can input roomID', async () => {
      await page.goto(APP);
      await page.waitForSelector('#roomID');
      await page.focus('#roomID');
      await page.keyboard.type('APPL');
      const username = await page.$eval('#roomID', (el) => el.value);
      expect(username).toBe('APPL');
    });

    it('can join game session', async () => {
      await page.goto(APP);
      await page.waitForSelector('#username');
      await page.focus('#username');
      await page.keyboard.type('Boulder');
      await page.waitForSelector('#roomID');
      await page.focus('#roomID');
      await page.keyboard.type('WARS');
      await page.click('#Buttjoin');
      const route = await page.url();
      expect(route).toBe('http://localhost:3000/session/WARS');
    });

    it('can join game session after creating session', async () => {
      await page.goto(APP);
      await page.waitForSelector('#username');
      await page.focus('#username');
      await page.keyboard.type('Boulder');
      await page.click('#Buttcreate');
      const route = await page.url();
      expect(route.indexOf('session')).toBeTruthy();
    });
  });
});
