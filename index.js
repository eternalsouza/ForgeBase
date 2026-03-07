const { ForgeClient } = require("@tryforge/forgescript")
const { ForgeDB } = require("@tryforge/forge.db")

require('dotenv').config()

const client = new ForgeClient({
    token: process.env.CLIENT_TOKEN,
    prefixes: [ '$getGuildVar[prefix]' ],
    intents: [
        "Guilds",
        "GuildMessages",
        "GuildMembers",
        "MessageContent",
        "GuildPresences"
    ],
    events: [
        "clientReady",
        "interactionCreate",
        "messageCreate",
    ],

    extensions: [
        new ForgeDB({ type: "better-sqlite3" })
    ],

   disableConsoleErrors: false,
   prefixCaseInsensitive: false,
   respondOnEdit: true
});

// Commands
client.commands.load("./src/commands/prefix/");
client.applicationCommands.load("./src/commands/slash/");

// Handler
ForgeDB.variables(require("./src/hanler/Database/Variables.js"));
client.commands.load("./src/handler/Events/");

client.login();