// Kütüphaneleri dahil edin
const Discord = require('discord.js');

// Botunuzun kimliğini ve sunucunuzun ID'sini değiştirin
const client = new Discord.Client();
const guildID = 'SUNUCU_ID';

client.on('ready', () => {
  console.log(`Bot ${client.user.tag} sunucuya bağlandı!`);
});

client.on('guildMemberAdd', member => {
  // Sunucunuzu alın
  const guild = client.guilds.cache.get(guildID);
  if (!guild) return;

  // Üyenin sunucuda ne kadar süredir olduğunu kontrol edin
  const joinDate = member.joinedAt;
  const currentDate = new Date();
  const diffTime = Math.abs(currentDate - joinDate);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  // Üyeye rol verin
  // Rol ID'sini ve adını değiştirin
  if (diffDays < 30) {
    const roleID = '1AYLIK_ROL_ID';
    const role = guild.roles.cache.get(roleID);
    member.roles.add(role);
  } else if (diffDays >= 30 && diffDays < 60) {
    const roleID = '2AYLIK_ROL_ID';
    const role = guild.roles.cache.get(roleID);
    member.roles.add(role);
  }
});

// Botunuzun tokenini değiştirin
client.login('BOT_TOKEN');
Bu kod, bir üye sunucuya katıldıktan sonra onun sunucuda ne kadar süredir olduğun
