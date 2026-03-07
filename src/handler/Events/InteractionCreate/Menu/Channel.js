module.exports = [{
type: "interactionCreate",
allowedInteractionTypes: ["selectMenu"],
code: `
$onlyIf[$customID==channelMenu;]

<#$selectMenuValues>
`
}]