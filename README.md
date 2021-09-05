# Rarity Manifested Tools

The current repo contains tooling for automating the following activities, on a given list of sommoners:

- call `adventure` when possible
- call `level_up` when have enough `xp`

## Setup 

- `npm install`
- `npm run typechain`
- `cp .env.sample .env` and fill the following 
  * fill `WALLET_PRIVATE_KEY` with your wallet private key
  * fill `TOKEN_IDS` with the list of summoners' ids you have ex: `123,3452,1889`


> :warning: `.env` is excluded from git commits, so your keys will never get shared.
But make sure it is the case if ever you commit the on the repo or share it
with another person

## Commands

- Display summoners details: `npm run status` 
- Call `adventure` to gain xp: `npm run adventure` (this will do the call only when available)
- Call `level_up`: `npm run level-up` (this will do the call only when available)
- Call all actions `npm run run-all`

# Automation

All `adventure`/`level_up` actions can be scheduled to run at predefined schedule. 

The schedule can be configured in `.env` file by changing the `CRON` variable value

to run the scheduled process do the following:

`nohup npm run schdeule &`

process logs can then be viewed in the `nohup.out` file