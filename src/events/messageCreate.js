const config = require('../../resources/configs/config.json')
module.exports = {
    name: 'messageCreate',
    async execute(message, client) {
        if (message.content.startsWith(config.prefix)) {
            const args = message.content.slice(config.prefix.length).trim().split(/ +/);
            const commandName = args.shift().toLowerCase();
            const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
            if (!command) return;
            if (command) {
              command.execute(message, client, args);
            }  
          
          }
        
    }
}