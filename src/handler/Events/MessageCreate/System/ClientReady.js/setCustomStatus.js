module.exports = [{
type: "clientReady",
code: `
$jsonLoad[clientStatus;$readFile[./src/handler/MessageCreate/ClientReady/data/ClientStatus.json]]
$setStatus[idle;Custom;$eval[$env[clientStatus;0];false]]

$let[n;1]
$setInterval[$setStatus[idle;Custom;$eval[$env[clientStatus;$get[n]];false]] 
$letSum[n;1]
$if[$get[n]>=$arrayLength[clientStatus];$let[n;0]];1m]
`
}]