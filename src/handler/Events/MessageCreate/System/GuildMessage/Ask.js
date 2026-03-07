module.exports = [{
type: "messageCreate",
code: `
$onlyIf[$message==Ping;❌ Este comando só funciona com a mensagem exata "mensagem específica".]
$ping $inlineCode[ms]
`
}]