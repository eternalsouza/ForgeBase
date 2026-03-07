module.exports = [{
name: "reload",
aliases: [ 'rl', 'r', 'update', 'up' ],
type: "messageCreate",
code: `
$onlyForUsers[;$botOwnerID]
  
$updateCommands
$try[$!addMessageReactions[$channelID;$messageID;✅]]
`
}]