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






////////////////////////////
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
  if (message.content.startsWith('/mute')) {
    // Kullanıcıyı muteleyecek kod buraya yazılacak
    const user = message.mentions.users.first();
    const muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');
    
    if (!muteRole) {
      // Muted rolü yoksa oluştur
      message.guild.roles.create({
        data: {
          name: 'Muted',
          permissions: [],
        },
      })
      .then(role => console.log(`Created new role with name ${role.name}`))
      .catch(console.error);
    }
    
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member.roles.add(muteRole)
          .then(() => {
            message.channel.send(`${user.tag} seste mute edildi.`);
            // Kullanıcıyı 30 dakika sonra unmute et
            setTimeout(() => {
              member.roles.remove(muteRole);
              message.channel.send(`${user.tag} seste unmute edildi.`);
            }, 1800000);
          })
          .catch(console.error);
      } else {
        message.channel.send('Bu kullanıcı sunucuda değil.');
      }
    } else {
      message.channel.send('Lütfen mute edilecek bir kullanıcı belirtin.');
    }
  }
});

client.login('Your_Token_Here');

