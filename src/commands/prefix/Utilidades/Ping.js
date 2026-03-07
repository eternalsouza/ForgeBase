module.exports = [{
name: "ping",
type: "messageCreate",
code: `
🍂 **• Latência: $ping** (\`ms\`)
-# - ✨ **• Database: $dbPing** (\`ms\`)
-# > 🪐 **• Inicialização:** <t:$round[$divide[$sub[$getTimestamp;$uptime];1000]]:R>
$addActionRow
$addButton[https://discloud.com;Discloud;Link;✨;false]
$addButton[reload_$authorID;;Secondary;📡;false]
`
}]