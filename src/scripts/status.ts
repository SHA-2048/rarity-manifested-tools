import {
    Rarity
} from "../contracts";
import {displayStatus, rarityInstance} from "./common";

async function main() {
    const rarity: Rarity = await rarityInstance();
    await displayStatus(rarity);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
