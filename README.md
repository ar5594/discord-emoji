# 🎬 Vito Multi Downloader (K9K Edition)

A powerful and modern **Discord bot** built with `discord.js v14` that allows users to download TikTok videos in multiple formats — including **No Watermark, HD, Watermarked, and MP3 audio** — through an interactive and clean interface.

---

## ✨ Features

* 🎞️ Download TikTok videos **without watermark**
* 💎 High-quality (HD) video support
* 🏷️ Download with watermark (original format)
* 🎵 Extract audio (MP3)
* ⚡ Fast API integration using TikWM
* 🧠 Smart session handling (prevents expired interactions)
* 📩 Option to send files via DM or specific log channel
* 🎛️ Slash command setup system
* 🔒 Admin-only configuration commands
* 🎨 Clean UI with embeds, buttons, and modals

---

## 📦 Installation

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/vito-multi-downloader.git
cd vito-multi-downloader
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure the bot

Edit the `config.json` file:

```json
{
  "token": "YOUR_BOT_TOKEN",
  "fixedChannelId": "CHANNEL_ID",
  "logsChannelId": "CHANNEL_ID",
  "brandName": "K9K",
  "sendToDM": false,
  "features": {
    "tiktok": {
      "enabled": true
    }
  }
}
```

---

## 🚀 Running the Bot

```bash
npm start
```

---

## ⚙️ Commands

### `/setup`

Deploys the main interface (button + embed) in the current channel.

### `/setlogs`

Sets the channel where downloaded files will be sent.

**Usage:**

```
/setlogs channel:#your-channel
```

---

## 🧩 How It Works

1. User clicks the TikTok button
2. A modal appears to paste the video URL
3. Bot fetches video data via API
4. User selects desired format:

   * No Watermark
   * HD
   * Watermarked
   * Audio (MP3)
5. Bot processes and delivers the file

---

## 📁 Project Structure

```
📦 vito-multi-downloader
 ┣ 📂 commands
 ┃ ┗ 📜 tiktok.js
 ┣ 📜 index.js
 ┣ 📜 config.json
 ┣ 📜 package.json
 ┗ 📜 README.md
```

---

## 🔐 Permissions Required

* Send Messages
* Embed Links
* Attach Files
* Use Slash Commands
* Read Message History

---

## 🧠 Notes

* Make sure your bot has proper permissions in the server
* Large files may take longer to upload depending on Discord limits
* TikTok private videos cannot be downloaded

---

## 🛠️ Tech Stack

* Node.js
* discord.js v14
* Axios (API requests)

---

## 📌 To Do

* [ ] Add support for more platforms (YouTube, Instagram)
* [ ] Add caching system
* [ ] Improve UI animations
* [ ] Add language support

---

## 👨‍💻 Author

Developed by **Vito**
Customized branding: **K9K**

---

## 📜 License

This project is licensed under the MIT License.

---

## ⭐ Support

If you like this project, consider giving it a ⭐ on GitHub!

---
