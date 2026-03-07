module.exports = {
    code: `
🍂 **• Latência: $ping** (\`ms\`)
-# - ✨ **• Database: $dbPing** (\`ms\`)
-# > 🪐 **• Inicialização:** <t:$round[$divide[$sub[$getTimestamp;$uptime];1000]]:R>
$addActionRow
$addButton[https://discloud.com;Discloud;Link;✨;false]
$addButton[reload_$authorID;;Secondary;📡;false]`,
    data: {
  "type": 1,
  "description": "Veja todos os meus pings.",
  "name": "ping",
  "name_localizations": {
    "en-US": "ping",
    "es-ES": "silbido"
  },
  "description_localizations": {
    "en-US": "See all my pings.",
    "es-ES": "Ver todos mis pings."
  }
 },
}