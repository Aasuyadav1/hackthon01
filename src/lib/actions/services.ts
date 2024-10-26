'use server';

import { InstagramScraper } from "../services/instagram";

export const getUser = async (username: string) => {
    try {
        if(!username || username.length === 0) {
            throw new Error("No username provided.")
        }
        const scraper = new InstagramScraper();
        await scraper.init();
        const data = await scraper.get_user(username);
        await scraper.close();
        return data;
    } catch (error) {
        console.log(error)
        throw new Error("GET_USER_INSTAGRAM_ERROR")
    }
}