const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
var request = require('request');
let prefix = '$';

client.on('ready', () => {
    client.user.setActivity("Make by HitoriKun#0493", {
    type: "STREAMING",
    url: "https://hitorikungz.tk"
  });
  });

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", message => {
    let args = message.content.split(' ');
    let command = args.shift().toLowerCase();

    if(command == '$test'){
        if(args[0]) {        
            request(`${config.api_server}?key=${config.license_key}&gift=${args[0]}`, function (error, response, body) {
            
                var jsonArr = JSON.parse(body);
            
                if (!error && jsonArr.code == 200) {
                    message.channel.send("สำเร็จยอดเงินที่ได้รับ: " + jsonArr.amount);
                }else{
                    message.channel.send("Error: " + jsonArr.code + " " + jsonArr.msg);
                }
            })            
        }else{
            message.channel.send('โปรดกรอกซองอังเปา')
        }
    }

});



    

client.login(config.token);