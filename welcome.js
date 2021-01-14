module.exports = (client) => {
  const channelID= '794935310488305668' //welcome chanell
    const targetChannelID = '794935310488305669' // rules and info

    client.on('guildMemberADD', (member) => {
        console.log(member)

        const message = `Please Welcome <@${member.id}> to the server !

        const channel = member.guild.channels.cache.get(channelID)
        channel.send(message)
    })
}  