import puppeteer, { Browser, Page } from 'puppeteer';

export class InstagramScraper {
    private session: string;
    public browser: Browser | null;
    public page: Page | null;
    public BASE_URI = "https://www.instagram.com";

    constructor() {
        this.session = process.env.INSTAGRAM_SESSION as string;
        this.browser = null;
        this.page = null;
    };
    
    async init() {
        this.browser = await puppeteer.launch();
        this.page = await this.browser.newPage();
    }

    async setInstagramCookie(): Promise<void> {
        if (!this.page) {
          throw new Error('Page not initialized. Call init() first.');
        } 

        await this.page.setCookie({
            name: 'sessionid',
            value: this.session,
            domain: '.instagram.com',
            path: '/',
            httpOnly: true,
            secure: true,
            sameSite: 'Lax',
          });
      }

    async get_user(username: string) {
        if (!this.page) {
            throw new Error('Page not initialized. Call init() first.');
          }

        if(!username || username.length === 0) {
            return null
        }

        await this.setInstagramCookie();

        const url = `${this.BASE_URI}/${username}`;

        await this.page.goto(url, {waitUntil: 'networkidle2'});
        
        const response = await this.page.evaluate(() => {
            const title = document.querySelector('.x1lliihq.x193iq5w.x6ikm8r.x10wlt62.xlyipyv.xuxw1ft');
            const holderName = document.querySelector(".x1lliihq.x1plvlek.xryxfnj.x1n2onr6.x1ji0vk5.x18bv5gf.x193iq5w.xeuugli.x1fj9vlw.x13faqbe.x1vvkbs.x1s928wv.xhkezso.x1gmr53x.x1cpjm7i.x1fgarty.x1943h6x.x1i0vuye.xvs91rp.x1s688f.x5n08af.x10wh9bi.x1wdrske.x8viiok.x18hxmgj");
            const bio = document.querySelector("._ap3a._aaco._aacu._aacx._aad7._aade");
            const countData: (string|null)[] = [];
            document.querySelectorAll(".html-span.xdj266r.x11i5rnm.xat24cr.x1mh8g0r.xexx8yu.x4uap5.x18d9i69.xkhd6sd.x1hl2dhg.x16tdsg8.x1vvkbs").forEach((item) => {
                countData.push(item.textContent);
            });
            const posts: {imageSrc: string, title: string}[] = [];
            document.querySelectorAll(".x5yr21d.xu96u03.x10l6tqk.x13vifvy.x87ps6o.xh8yej3").forEach((item) => {
                const imageSrc = item.getAttribute("src") || "";
                const title = item.getAttribute("alt") || "";
                posts.push({imageSrc, title})
            })  
            const isVerified = document.querySelector(".x1lliihq.x1n2onr6");

            return {
                username: title?.textContent,
                details: {
                    meta: {
                        isVerified: isVerified ? true : false,
                        username: title?.textContent,
                        accountName: holderName?.textContent,
                        bio: bio?.textContent
                    },
                    stats: {
                        posts: countData?.[0],
                        followers: countData?.[1],
                        following: countData?.[2],
                    },
                    posts
                }
            }
        });
        return response;
    }

    async close() {
        if (this.browser) {
            await this.browser.close();
        }
    }
}