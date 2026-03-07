module.exports = [{
type: "messageCreate",
code: `
$onlyIf[$message==Ping;]
$ping $inlineCode[ms]
`
}]