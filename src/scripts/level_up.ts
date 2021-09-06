import {
    Rarity, RarityGold
} from "../contracts";
import {levelUp, rarityGoldInstance, rarityInstance} from "./common";
import {ethers} from "hardhat";

async function main() {
    const [deployer] = await ethers.getSigners();
    const rarity: Rarity = await rarityInstance(deployer);
    const rarityGold: RarityGold = await rarityGoldInstance(deployer);
    await levelUp(rarity, rarityGold);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });