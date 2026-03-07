module.exports = [{
type: "messageCreate",
code: `
$onlyIf[$channelHasPerms[$channelID;$clientID;ViewChannel;SendMessages]==true;]
$if[$startsWith[$message;<@$clientID>]==true;
Olá, sou o **$userDisplayName[$clientID]**! Meu prefixo é $inlineCode[$getServerVar[prefix]].
]
`
}]