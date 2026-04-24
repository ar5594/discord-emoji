# 🛠️ Smart Asset Extractor

A professional tool designed to extract Discord assets with ease. Developed by **k9k (r.vu)**.

---

## 🚀 Features

* **Emoji Extraction**: Retrieve any emoji as a high-quality Image/GIF using its ID or the emoji itself.
* **Sticker Extraction**: Extract Discord stickers by providing an ID or simply replying to a sticker message.
* **Bulk Server Backups**: Scan entire guilds and package all available emojis and stickers into a structured `.zip` file.
* **Interactive UI**: Managed via Discord buttons and pagination for easy navigation.

---

## 📜 Available Commands

| Command | Usage | Description |
| :--- | :--- | :--- |
| `!help` | `!help` | Displays the help menu. |
| `!gete` | `!gete [Emoji/ID]` | Extracts a specific emoji. |
| `!gets` | `!gets [ID/Reply]` | Extracts a specific sticker. |
| `!getall` | `!getall` | Opens the server selection menu for bulk extraction. |

---

## ⚙️ How to Run

To get the bot up and running, follow these simple steps:

1.  **Download the Code**:
    Click on the green **Code** button and select **Download ZIP**, or use:
    ```bash
    git clone [https://github.com/ar5594/discord-emoji.git](https://github.com/ar5594/discord-emoji.git)
    ```
2.  **Install Requirements**:
    Open your terminal/CMD inside the folder and run:
    ```bash
    npm install discord.js adm-zip axios
    ```
3.  **Add Your Token**:
    Open `index.js` and put your bot token in `const TOKEN = "YOUR_BOT_TOKEN_HERE";`.
4.  **Start the Bot**:
    Run the following command:
    ```bash
    node index.js
    ```

---

## 📞 Technical Support & Community

If you encounter bugs or want to suggest new features:

* **Discord Community**: [Join Support Server](https://discord.gg/wxkxHmR9GT)
* **Developer**: `k9k (r.vu)`

---
© 2026 k9k. All rights reserved.
