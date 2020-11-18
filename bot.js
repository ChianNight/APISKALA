var token = require("./ZAPIERDALA.json").token;
var Discord = require("discord.js");
var client = new Discord.Client();
client.login(token)
    client.on("messageDelete", function(message){
       
        if(!message.channel.permissionsFor(client.user).has("SEND_MESSAGES")){
            return;
        }
        else{
            let Gyulev = new Discord.MessageEmbed()
                .setTitle("Why would you do that buddy")
                .setImage("https://www.espa-bg.com/n/upl/images/DSC_1651tazi(2).JPG")
            message.channel.send(Gyulev)
            return;
    }}
    )
client.on("message", function(message)
{
    if(!message.channel.permissionsFor(client.user).has("SEND_MESSAGES")){
        return;
    }
    else{
        let Ivan = message.mentions.members.first()

            if (message.author.id === "771370711192829952"){
            return;
            }
            if(message.author.bot ){
                return;
            }
            if(message.content.toLowerCase() == 'omg he did'){
                    
                message.channel.send("https://media.discordapp.net/attachments/722862443352686643/767502714850508810/degenDiscord.gif")
            }     
            if(message.content.toLowerCase() == "mystery link"){
                message.channel.send("https://discord.com/channels/664825422135164988/702207168203718738/705555216493314048")
                return;
            }
            const Vasil = message.content.split(" ")
            switch(Vasil[0].toLowerCase()){
                case "klip" :
                case "клип" :
                    message.channel.send("TOVA E KLIP ZA CQLATA SHIBANA GRUPA MISHKI IDVATE VUV VIDIN EBAVAM VI PLUHOVE UBIVAM VI SHTE VI ZAKOLQM AAAAAAA")
                    break
                case "stfu":
                case "стфу":
                    if(!Ivan ) {
                        message.reply("Who?");
                        return;
                    }       
                        message.channel.send(`Shut The Fuck Up<@${Ivan.id}>, sega govorq s G Chep`);
                        break;
                case "sure":
                    message.channel.send("Skip this ad. Just like you skipped out on buying Amazon stock, and Google, and Apple.")
                    break;
                case "kaisa":
                    if(!Ivan ) {
                        message.reply("Who?");
                        return;
                    }     
                    message.channel.send(` <@${Ivan.id}> got different dna`)
                    break;
                case "evelynn":
                    message.channel.send("e KAMBATA")
                    break;
                case "fk":
                case "fuck":
                    if(!Ivan ) {
                        message.reply("Who?");
                        return;
                    }     
                    message.channel.send(`fk <@${Ivan.id}>, vsichkite mi homita mrazqt <@${Ivan.id}>.`)
                    break;
                case "goodbye":
                    if(!Ivan ) {
                        message.reply("Who?");
                        return;
                    }     
                    message.channel.send(`goodbye <@${Ivan.id}>, hope to see you again`)
                    break;
                case "apskala":
                 message.channel.send("https://www.youtube.com/watch?v=RWCNSIhN2EU")
                 break;

            }
        }
    })        
