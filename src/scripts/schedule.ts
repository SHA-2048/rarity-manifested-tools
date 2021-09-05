import {Rarity} from "../contracts";
import {adventure, displayStatus, levelUp, rarityInstance} from "./common";

const cron = require('node-cron');

cron.schedule(process.env.CRON, async ()=> {
    const rarity: Rarity = await rarityInstance();

    console.log("Run time: ", new Date().toLocaleString());

    await adventure(rarity);
    await levelUp(rarity);
    await displayStatus(rarity);
});