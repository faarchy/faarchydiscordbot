exports.run = (client, message, args) => {
  const serverQueue = message.client.queue.get(message.guild.id);
  if (serverQueue && !serverQueue.playing) {
    serverQueue.playing = true;
    serverQueue.connection.dispatcher.resume();
    return message.channel.send("▶ Prebacili ste na drugu Pjesmu");
  }
  return message.channel.send("Nije nista pusteno");
};
