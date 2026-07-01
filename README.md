# Unicity Tip Bot

A simple tip bot built with the Sphere SDK on the Unicity testnet.

## What it does

- Creates (or loads) a Sphere wallet identity on Unicity testnet
- Claims a Unicity ID (nametag)
- Checks wallet balance/assets
- Prepared to send small "tip" payments to other Unicity IDs

## How to run

1. Install dependencies:
   ```
   npm install
   ```

2. Run the bot:
   ```
   node bot.js
   ```

3. On first run, the bot generates a new wallet and prints a recovery mnemonic phrase. **Save this phrase securely and never share it.**

## Network

This runs against Unicity **testnet** only (not mainnet). Test tokens can be obtained from the Unicity testnet faucet after claiming a Unicity ID.

## Submission notes

- Track: Payments and markets (simple tip bot)
- Agent-based: No (single script, not an autonomous multi-agent system)
- Runs on AstridOS: No
