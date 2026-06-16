# Discord Emoji & Sticker Extractor

A Discord bot that extracts emojis and stickers from any server and downloads them as files or ZIP.

## Features

- 🖼️ **!gete** — Extract a single emoji by pasting it or using its ID
- ✨ **!gets** — Extract a sticker by replying to it or using its ID
- 📦 **!getall** — Extract all emojis and stickers from a server as a ZIP file
- 🔗 **Direct Download** — Buttons to download each asset

## Commands

| Command | What it does |
|---------|--------------|
| `!help` | Shows the help menu |
| `!gete <emoji/ID>` | Extract an emoji (paste it or use its ID) |
| `!gets <ID/reply>` | Extract a sticker (reply or use its ID) |
| `!getall` | Pick a server and download all its emojis + stickers as ZIP |

## How to Run

1. **Install** [Node.js](https://nodejs.org/) v16.9.0+
2. **Get a bot token** from [Discord Developer Portal](https://discord.com/developers/applications)
3. **Download** the project
4. **Install packages**:
   ```bash
   npm install
   ```
5. **Set your token** in `.env`:
   ```
   TOKEN=your_token_here
   ```
6. **Run**:
   ```bash
   node index
   ```

## Project Files

```
├── index.js         # Main bot code
├── package.json     # Dependencies
├── .env             # Your bot token
└── README.md        # This file
```

## Built With

- [discord.js](https://discord.js.org/) v14
- [adm-zip](https://www.npmjs.com/package/adm-zip)
- [axios](https://www.npmjs.com/package/axios)
- [Node.js](https://nodejs.org/)

## Author

**r.vu**

## Support

💬 **Discord Server:** https://discord.gg/wxkxHmR9GT
