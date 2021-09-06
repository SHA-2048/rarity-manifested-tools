import '@nomiclabs/hardhat-ethers';
import '@typechain/hardhat';
import 'dotenv/config';
import {HardhatUserConfig} from "hardhat/config";

const config: HardhatUserConfig = {
  solidity: "0.8.0",
  networks: {
    ftm_mainnet: {
      url: "https://rpc.ftm.tools",
      chainId: 250,
      gasPrice: 50000000000,
      accounts: [`0x${process.env.WALLET_PRIVATE_KEY}`],
    },
  },
};

export default config;