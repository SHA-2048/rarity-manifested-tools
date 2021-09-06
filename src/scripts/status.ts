import {
    Rarity
} from "../contracts";
import {displayStatus, rarityInstance} from "./common";
import {ethers} from "hardhat";

async function main() {
    const [deployer] = await ethers.getSigners();
    const rarity: Rarity = await rarityInstance(deployer);
    await displayStatus(rarity);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
