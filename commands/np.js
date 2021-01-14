exports.run = (client, message, args) => {
  const serverQueue = message.client.queue.get(message.guild.id);
  if (!serverQueue) return message.channel.send("Nije nista pusteno.");
  return message.channel.send(
    `🎶 Pocinje Pjesma: **${serverQueue.songs[0].title}**`
  );
};
