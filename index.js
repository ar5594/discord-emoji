const { Client, GatewayIntentBits, EmbedBuilder, Partials, AttachmentBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, ActivityType, ComponentType } = require("discord.js");
const AdmZip = require("adm-zip");
const axios = require("axios");
require("dotenv").config();

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
    partials: [Partials.Message, Partials.Channel]
});

const TOKEN = process.env.TOKEN;

client.on("ready", () => {
    console.clear();
    const P = '\x1b[38;5;213m', C = '\x1b[36m', G = '\x1b[32m', Y = '\x1b[33m', B = '\x1b[34m';
    const bold = '\x1b[1m', dim = '\x1b[2m', reset = '\x1b[0m';
    console.log(`
${bold}${G}EMOJI EXTRACTOR IS ONLINE${reset}

${C}◉${reset} ${bold}User${reset}     ${C}${client.user.tag}${reset}
${C}◉${reset} ${bold}ID${reset}       ${Y}${client.user.id}${reset}
${C}◉${reset} ${bold}Servers${reset}  ${client.guilds.cache.size}

${P}◈${reset} Commands: ${bold}!help${reset}, ${bold}!gete${reset}, ${bold}!gets${reset}, ${bold}!getall${reset}

${dim}────────────────────────────────────${reset}
${P}◈${reset} ${bold}GitHub${reset}    ${P}https://github.com/ar5594${reset}
${dim}────────────────────────────────────${reset}
`);
    client.user.setPresence({
        activities: [{ 
            name: `!help・by (r.vu)`, 
            type: ActivityType.Streaming,
            url: "https://www.twitch.tv/discord" 
        }],
        status: 'online',
    });
});

client.on("messageCreate", async (msg) => {
    if (msg.author.bot) return;

    const args = msg.content.trim().split(/ +/);
    const command = args[0].toLowerCase();
    const input = args[1];

    if (command === "!help") {
        const helpEmbed = new EmbedBuilder()
            .setTitle("🛠️ Help Menu")
            .setDescription("Welcome! Use the commands below to extract emojis and stickers.")
            .addFields(
                { name: "🖼️ `!gete [Emoji/ID]`", value: "Extract an emoji. Provide the emoji or its ID.", inline: false },
                { name: "✨ `!gets [ID/Reply]`", value: "Extract a sticker. Reply to one or provide an ID.", inline: false },
                { name: "📦 `!getall`", value: "Extract all assets from a server you choose from a list.", inline: false }
            )
            .setColor(0x5865F2)
            .setFooter({ text: "by k9k (r.vu)", iconURL: client.user.displayAvatarURL() })
            .setTimestamp();

        const supportRow = new ActionRowBuilder().addComponents(
            new ButtonBuilder().setLabel('Support Server').setURL('https://discord.gg/wxkxHmR9GT').setStyle(ButtonStyle.Link)
        );

        return msg.reply({ embeds: [helpEmbed], components: [supportRow] });
    }

    if (command === "!gete") {
        if (!input) return msg.reply("⚠️ **Please provide an Emoji or Emoji ID.**");
        
        let emojiId = null, isAnimated = false;
        const match = input.match(/<(a?):(\w+):(\d+)>/);
        if (match) {
            isAnimated = match[1] === "a";
            emojiId = match[3];
        } else if (/^\d+$/.test(input)) {
            emojiId = input;
            const cached = client.emojis.cache.get(emojiId);
            if (cached) {
                isAnimated = cached.animated;
            } else {
                try {
                    await axios.get(`https://cdn.discordapp.com/emojis/${emojiId}.gif`, { timeout: 3000 });
                    isAnimated = true;
                } catch {
                    isAnimated = false;
                }
            }
        }

        if (emojiId) {
            const url = `https://cdn.discordapp.com/emojis/${emojiId}.${isAnimated ? "gif" : "png"}?size=1024`;
            const embed = new EmbedBuilder().setTitle(`🖼️ Emoji Preview`).setImage(url).setColor(0x2ECC71).setFooter({ text: "by k9k (r.vu)" });
            const row = new ActionRowBuilder().addComponents(new ButtonBuilder().setLabel('Download').setURL(url).setStyle(ButtonStyle.Link));
            return msg.reply({ embeds: [embed], components: [row] });
        }
        return msg.reply("❌ **Invalid Emoji ID.**");
    }

    if (command === "!gets") {
        let stickerUrl = null;
        const target = msg.stickers.size > 0 ? msg.stickers : (msg.reference ? (await msg.fetchReference()).stickers : null);
        
        if (target && target.size > 0) {
            stickerUrl = target.first().url;
        } else if (input && /^\d+$/.test(input)) {
            for (const f of ['png', 'gif']) {
                const base = f === 'gif' ? 'https://media.discordapp.net' : 'https://cdn.discordapp.com';
                try { const test = `${base}/stickers/${input}.${f}`; await axios.get(test, { timeout: 3000 }); stickerUrl = test; break; } catch {}
            }
        }

        if (!stickerUrl) return msg.reply("❌ **Sticker not found!** Reply to a sticker or provide an ID.");
        
        const embed = new EmbedBuilder().setTitle("✨ Sticker Preview").setImage(stickerUrl).setColor(0x5865F2).setFooter({ text: "by k9k (r.vu)" });
        const row = new ActionRowBuilder().addComponents(new ButtonBuilder().setLabel('Download').setURL(stickerUrl).setStyle(ButtonStyle.Link));
        return msg.reply({ embeds: [embed], components: [row] });
    }

    if (command === "!getall") {
        const guilds = client.guilds.cache.map(g => ({ name: g.name, id: g.id }));
        let currentPage = 0;

        const generateEmbed = (page) => {
            const start = page * 10;
            const currentGuilds = guilds.slice(start, start + 10);
            const description = currentGuilds.map((g, i) => `**${start + i + 1}.** ${g.name} \`(${g.id})\``).join('\n');
            
            return new EmbedBuilder()
                .setTitle(`📦 Select a Server (${guilds.length} Total)`)
                .setDescription(description || "No servers found.")
                .setColor(0x5865F2)
                .setFooter({ text: `Page ${page + 1} of ${Math.ceil(guilds.length / 10)} | by k9k (r.vu)` });
        };

        const generateButtons = (page) => {
            const rows = [];
            const start = page * 10;
            const currentGuilds = guilds.slice(start, start + 10);
            
            const numberRow = new ActionRowBuilder();
            currentGuilds.forEach((_, i) => {
                numberRow.addComponents(
                    new ButtonBuilder().setCustomId(`guild_${start + i}`).setLabel(`${start + i + 1}`).setStyle(ButtonStyle.Secondary)
                );
            });
            rows.push(numberRow);

            if (guilds.length > 10) {
                const navRow = new ActionRowBuilder().addComponents(
                    new ButtonBuilder().setCustomId('prev').setEmoji('⬅️').setStyle(ButtonStyle.Primary).setDisabled(page === 0),
                    new ButtonBuilder().setCustomId('next').setEmoji('➡️').setStyle(ButtonStyle.Primary).setDisabled(start + 10 >= guilds.length)
                );
                rows.push(navRow);
            }
            return rows;
        };

        const listMsg = await msg.reply({ embeds: [generateEmbed(0)], components: generateButtons(0) });
        const collector = listMsg.createMessageComponentCollector({ componentType: ComponentType.Button, time: 60000 });

        collector.on('collect', async (i) => {
            if (i.user.id !== msg.author.id) return i.reply({ content: "This is not for you!", ephemeral: true });

            if (i.customId === 'prev') {
                currentPage--;
                await i.update({ embeds: [generateEmbed(currentPage)], components: generateButtons(currentPage) });
            } else if (i.customId === 'next') {
                currentPage++;
                await i.update({ embeds: [generateEmbed(currentPage)], components: generateButtons(currentPage) });
            } else if (i.customId.startsWith('guild_')) {
                const index = parseInt(i.customId.split('_')[1]);
                const selected = guilds[index];
                
                await i.update({ content: `⏳ Processing **${selected.name}**...`, embeds: [], components: [] });
                
                try {
                    const guild = client.guilds.cache.get(selected.id);
                    const emojis = await guild.emojis.fetch();
                    const stickers = await guild.stickers.fetch();
                    const zip = new AdmZip();

                    for (const [id, emoji] of emojis) {
                        try {
                            const res = await axios.get(emoji.url, { responseType: 'arraybuffer' });
                            zip.addFile(`Emojis/${emoji.name}_${id}.${emoji.animated ? "gif" : "png"}`, Buffer.from(res.data));
                        } catch {}
                    }
                    for (const [id, sticker] of stickers) {
                        try {
                            const res = await axios.get(sticker.url, { responseType: 'arraybuffer' });
                            let ext = sticker.url.includes(".gif") ? "gif" : sticker.url.includes(".webp") ? "webp" : "png";
                            zip.addFile(`Stickers/${sticker.name}_${id}.${ext}`, Buffer.from(res.data));
                        } catch {}
                    }

                    const attachment = new AttachmentBuilder(zip.toBuffer(), { name: `Assets_${selected.name}.zip` });
                    await i.editReply({ content: `✅ Assets for **${selected.name}** extracted!`, files: [attachment] });
                } catch (e) {
                    await i.editReply({ content: "❌ Failed to extract assets." });
                }
                collector.stop();
            }
        });

        collector.on('end', () => { if (!listMsg.deleted) listMsg.edit({ components: [] }).catch(() => {}); });
    }
});

client.login(TOKEN).catch(() => {
    console.clear();
    const R = '\x1b[31m', G = '\x1b[32m', Y = '\x1b[33m', C = '\x1b[36m', B = '\x1b[34m', P = '\x1b[38;5;213m', bold = '\x1b[1m', reset = '\x1b[0m';
    console.log(`
${R}${bold}TOKEN ERROR${reset}

${R}✖${reset} Token is missing or invalid

${Y}${bold}How to fix:${reset}
${C}  1.${reset} Go to ${B}https://discord.com/developers/applications${reset}
${C}  2.${reset} Select your bot → Bot → Reset Token
${C}  3.${reset} Copy the new token
${C}  4.${reset} Open ${P}.env${reset} and set ${R}TOKEN=your_token_here${reset}
${C}  5.${reset} Run ${G}node index${reset} again

${bold}${P}https://github.com/ar5594${reset}
`);
    process.exit(1);
});

process.on("SIGINT", () => { console.log("\n👋 Shutting down..."); client.destroy(); process.exit(0); });
process.on("SIGTERM", () => { console.log("👋 Shutting down..."); client.destroy(); process.exit(0); });