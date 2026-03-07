module.exports = [{
type: "interactionCreate",
allowedInteractionTypes: [ "button" ],
code: `
$onlyIf[$advancedTextSplit[$customID;_;0]==reload;]
$onlyIf[$advancedTextSplit[$customID;_;1]==$authorID;$interactionReply[Lamento, mas esse botão não te pertence.
$ephemeral
]]

$interactionUpdate[
🍂 **• Latência: $ping** (\`ms\`)
-# - ✨ **• Database: $dbPing** (\`ms\`)
-# > 🪐 **• Inicialização:** <t:$round[$divide[$sub[$getTimestamp;$uptime];1000]]:R>
$addActionRow
$addButton[https://discloud.com;Discloud;Link;✨;false]
$addButton[reload_$authorID;;Secondary;📡;false]]
`
}]