# 🛠️ AR Smart Extractor - Forensic Engine v2.0.26

Welcome to the **AR Smart Extractor**, a professional-grade Discord asset extraction tool. This bot is designed to help developers and community owners back up and retrieve server assets (Emojis & Stickers) efficiently using a clean, interactive interface.

Developed by **r.vu** under the **AR System**.

---

## 🚀 Features

* **Smart Emoji Extraction**: Retrieve any emoji as a high-quality Image/GIF using its ID or the emoji itself.
* **Sticker Forensics**: Extract Discord stickers by providing an ID or simply replying to a sticker message.
* **Bulk Server Backups**: Scan entire guilds and package all available emojis and stickers into a structured `.zip` file.
* **Interactive UI**: Fully managed via Discord buttons, pagination for server lists, and real-time status updates.

---

## 📜 Available Commands

| Command | Usage | Description |
| :--- | :--- | :--- |
| `!help` | `!help` | Displays the interactive help menu. |
| `!gete` | `!gete [Emoji/ID]` | Extracts a specific emoji. |
| `!gets` | `!gets [ID/Reply]` | Extracts a specific sticker. |
| `!getall` | `!getall` | Opens the server selection menu for bulk extraction. |

---

## ⚙️ Installation & Setup

To deploy your own instance of the Forensic Engine:

1.  **Clone the Repository**:
    ```bash
    git clone [https://github.com/ar5594/discord-emoji.git](https://github.com/ar5594/discord-emoji.git)
    ```
2.  **Install Dependencies**:
    ```bash
    npm install discord.js adm-zip axios
    ```
3.  **Configure Token**:
    Open `index.js` and replace `YOUR_BOT_TOKEN_HERE` with your actual Discord Bot Token.
4.  **Launch the Engine**:
    ```bash
    node index.js
    ```

---

## 📞 Technical Support & Community

If you encounter crashes, bugs, require custom forensic add-ons, or want to suggest new features:

* **Discord Community**: [Join Support Server](https://discord.gg/wxkxHmR9GT)
* **Discord Operator**: `r.vu`
* **Version**: Forensic Engine 2.0.26 (Secured Build)

**Engine Architect**: `k9k (r.vu)`

---
© 2026 AR System. All rights reserved.
