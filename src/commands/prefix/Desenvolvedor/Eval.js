module.exports = [{
name: "eval",
aliases: [ 'evl', 'eva', 'ev', 'e' ],
type: "messageCreate",
code: `
$onlyForUsers[;$botOwnerID]
  
$let[result;$trim[$eval[$message;false]]]
$if[$charCount[$get[result]]>2000;$attachment[$get[result];result.json;true];$get[result]]
$try[$!addMessageReactions[$channelID;$messageID;✅]]
`
}]