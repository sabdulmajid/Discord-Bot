import dotenv from "dotenv";
dotenv.config();

import Discord from "discord.js";
const client = new Discord.Client({
  partials: ["MESSAGE"],
});

const BOT_PREFIX = "!";
const MOD_ME_COMMAND = "mod-me";

client.on("ready", () => {
  console.log("Bot = Ready to react to chess messages");
});

client.on("messageDelete", (msg) => {
  msg.channel.send("Stop deleting messages");
});

client.on("message", (msg) => {
  if (msg.content == "I love chess") {
    msg.react("♟");
  }

  if (msg.content === `${BOT_PREFIX}${MOD_ME_COMMAND}`) {
    modUser(msg.member);
  }
});

function modUser(member: Discord.GuildMember | null) {
  if (member?.roles) {
    member.roles.add("923267337568809030");
  }
}

client.login(process.env.BOT_TOKEN);
