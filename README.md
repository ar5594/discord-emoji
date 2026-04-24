# 🛠️ Smart Asset Extractor

A professional tool designed to extract and transfer Discord assets with ease. Developed by **k9k (r.vu)**.

---

## 🚀 Features

* **Full Asset Support**: Extract any **Animated** or **Static** emoji and sticker from any server you are in.
* **Easy Transfer**: Quickly grab assets and move them to your own server with high-quality Image/GIF links.
* **Sticker Extraction**: Extract stickers by providing an ID or simply replying to a sticker message.
* **Bulk Server Backups**: Scan entire guilds and package all available emojis and stickers into a structured `.zip` file for easy re-uploading.
* **Interactive UI**: Fully managed via Discord buttons and pagination for smooth navigation.

---

## 📜 Available Commands

| Command | Usage | Description |
| :--- | :--- | :--- |
| `!help` | `!help` | Displays the help menu. |
| `!gete` | `!gete [Emoji/ID]` | Extracts a specific emoji (Animated/Static). |
| `!gets` | `!gets [ID/Reply]` | Extracts a specific sticker. |
| `!getall` | `!getall` | Opens the server selection menu for bulk extraction. |

---

## ⚙️ How to Run

1.  **Get the Code**:
    * **Option A**: Click the green **Code** button and select **Download ZIP**, then extract it.
    * **Option B**: Create a new file named `index.js` on your computer and copy the bot code into it.
2.  **Install Requirements**:
    Open your terminal/CMD inside the project folder and run:
    ```bash
    npm install discord.js adm-zip axios
    ```
3.  **Add Your Token**:
    Open `index.js` and place your bot token in: `const TOKEN = "YOUR_BOT_TOKEN_HERE";`.
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
