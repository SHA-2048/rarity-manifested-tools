import {
    Rarity
} from "../contracts";
import {levelUp, rarityInstance} from "./common";

async function main() {
    const rarity: Rarity = await rarityInstance();
    await levelUp(rarity);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });