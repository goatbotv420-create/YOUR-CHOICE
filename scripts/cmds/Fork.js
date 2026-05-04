module.exports = {
  config: {
    name: "fork",
    version: "1.4",
    author: "Tamim Bbz",
    countDown: 2,
    role: 0,
    shortDescription: "Show official fork link with owner info",
    category: "utils",
    guide: {
      en: "Type 'fork' to see the link and owner."
    }
  },

  langs: {
    en: {
      current: "╭───────『 🌐 』───────╮\n\n    𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥 𝐠𝐢𝐭𝐡𝐮𝐛 𝐚𝐜𝐜𝐪𝐮𝐧𝐭 \n\n  🔗 𝐋𝐢𝐧𝐤: %1\n  👤 𝐎𝐰𝐧𝐞𝐫: 𝐓𝐚𝐦𝐢𝐦 𝐁𝐛𝐳\n\n╰───────『 ✨ 』───────╯"
    }
  },

  onStart: async function ({ message, getLang }) {
    const link = "https://github.com/goatbotv420-create/YOUR-CHOICE.git";
    return message.reply(getLang("current", link));
  },

  onChat: async function ({ message, getLang, event }) {
    if (event.body && event.body.toLowerCase() === "fork") {
      const link = "";
      return message.reply(getLang("current", link));
    }
  }
};
