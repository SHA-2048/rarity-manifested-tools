import {Rarity, Rarity__factory} from "../contracts";
import {BigNumber} from "ethers";
import {ethers} from "hardhat";

const RARITY_CONTRACT = "0xce761d788df608bd21bdd59d6f4b54b2e27f25bb";
const XP_PER_DAY = BigNumber.from(250).mul(BigNumber.from(10).pow(18));

export async function displayStatus(rarity: Rarity) {
    const [deployer] = await ethers.getSigners();
    console.log("Account FTM balance:", formatValue(await deployer.getBalance()));
    console.log("my Rarity item: ");

    for (let i = 0; i < TOKEN_IDS.length; i++) {
        const id: string = TOKEN_IDS[i];

        const summoner = await rarity.summoner(id);
        const xpRequired = await rarity.xp_required(summoner._level);
        const className = await rarity.classes(summoner._class);

        const nextLeveling = new Date(summoner._log.toNumber() * 1000).toLocaleString()

        const nbAdventureToLevelUp = xpRequired.sub(summoner._xp).div(XP_PER_DAY);
        console.log(`${className} (${id}): level: ${summoner._level.toString()}, xp: ${formatValue(summoner._xp)} (nb days to level up: ${nbAdventureToLevelUp.toString()}). Next leveling ${nextLeveling}`);
    }
}

export async function levelUp(rarity: Rarity) {
    for (let i = 0; i < TOKEN_IDS.length; i++) {
        const id: string = TOKEN_IDS[i];

        const summoner = await rarity.summoner(id);
        const xpRequired = await rarity.xp_required(summoner._level);

        if (summoner._xp.gte(xpRequired)) {
            console.log(`${id} is ready to level up`);
            await rarity.level_up(id);
        } else {
            console.log(`${id} is not ready to level up`);
        }
    }
}

export async function adventure(rarity: Rarity) {
    for (let i = 0; i < TOKEN_IDS.length; i++) {
        const id: string = TOKEN_IDS[i];

        const summoner = await rarity.summoner(id);
        const log = summoner._log.toNumber() * 1000;

        if (log > (new Date().getTime()) ) {
            console.log(`${id} needs to wait until ${new Date(log).toLocaleString()} to adventure again...`);
        } else {
            console.log(`${id} is ready to adventure !`);
            await rarity.adventure(id);
        }
    }
}

export function formatValue(value: BigNumber) {
    return ethers.utils.formatUnits(value.toString(), 18);
}

export async function rarityInstance(): Promise<Rarity> {
    const [deployer] = await ethers.getSigners();

    Rarity__factory.connect(RARITY_CONTRACT, deployer)

    return Rarity__factory.connect(RARITY_CONTRACT, deployer);
}

export const TOKEN_IDS = process.env.TOKEN_IDS.split(",");