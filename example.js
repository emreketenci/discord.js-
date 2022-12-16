const Discord = require('discord.js');

const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Bot ${client.user.tag} sunucuya bağlandı!`);
});

client.on('guildMemberRemove', member => {
  // Üyenin silinen rol sayısını tutun
  if (!member.user.bot) {
    if (!member.user.settings.deleteRoleCount) {
      member.user.settings.deleteRoleCount = 1;
    } else {
      member.user.settings.deleteRoleCount++;
    }

    // Rol silme hakkı sınırını aştıysa yasakla
    if (member.user.settings.deleteRoleCount > 3) {
      member.guild.members.ban(member, { reason: 'Rol silme hakkı sınırı aşıldı' });
    }
  }
});

// Botunuzun tokenini değiştirin
client.login('BOT_TOKEN');
