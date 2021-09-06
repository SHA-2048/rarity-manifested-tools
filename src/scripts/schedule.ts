import {Rarity, RarityGold} from "../contracts";
import {adventure, displayStatus, levelUp, rarityGoldInstance, rarityInstance} from "./common";
import {ethers} from "hardhat";

const cron = require('node-cron');

cron.schedule(process.env.CRON, async ()=> {
    const [deployer] = await ethers.getSigners();
    const rarity: Rarity = await rarityInstance(deployer);
    const rarityGold: RarityGold = await rarityGoldInstance(deployer);

    console.log("Run time: ", new Date().toLocaleString());

    await adventure(rarity);
    await levelUp(rarity, rarityGold);
    await displayStatus(rarity);
});