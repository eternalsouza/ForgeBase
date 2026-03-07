module.exports = [{
name: "cv2",
type: "messageCreate",
code: `
$reply[$channelID;$messageID;true]

$addContainer[
  $addTextDisplay[This is a **Text Display** component inside a **Container** component!]
  $addActionRow
  $addChannelSelectMenu[channelMenu;Select channels]
  $setChannelType[GuildText]
  $addSeparator
  $addSection[
    $addTextDisplay[This is a **Text Display** component inside a **Section** component, located in a **Container** component!]
    $addTextDisplay[It has an interactive **Button** accessory attached!]
    $addButton[https://discloud.com;Discloud;Link;;false]
  ]
;#552dd0]
`
}]