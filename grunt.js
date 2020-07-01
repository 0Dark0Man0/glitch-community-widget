console.log("Grunt starting");
var grunt = require('grunt');
grunt.cli();
console.log("Grunt done!");
/////////////////////////////////////////////////////////
// Config for the JMusicBot                            //
/////////////////////////////////////////////////////////
// Any line starting with // is ignored                //
// You MUST set the token and owner                    //
// All other items have defaults if you don't set them //
// Open in Notepad++ for best results                  //
/////////////////////////////////////////////////////////


// This sets the token for the bot to log in with
// This MUST be a bot token (user tokens will not work)
// If you don't know how to get a bot token, please see the guide here:
// https://github.com/jagrosh/MusicBot/wiki/Getting-a-Bot-Token

token = NjY5NDk0MTU2MjM3ODY0OTgy.XsAlbw.QwNygBqK_AmI8p7MqEqjksbccvQ


// This sets the owner of the bot
// This needs to be the owner's ID (a 17-18 digit number)
// https://github.com/jagrosh/MusicBot/wiki/Finding-Your-User-ID

owner = 667309579675369482


// This sets the prefix for the bot
// The prefix is used to control the commands
// If you use !!, the play command will be !!play
// If you do not set this, the prefix will be a mention of the bot (@Botname play)
// If you make this blank, the bot will not use a prefix

prefix = "!"


// If you set this, it modifies the default game of the bot
// Set this to NONE to have no game
// Set this to DEFAULT to use the default game
// You can make the game "Playing X", "Listening to X", or "Watching X"
// where X is the title. If you don't include an action, it will use the
// default of "Playing"

game = "DEFAULT"


// If you set this, it will modify the default status of bot
// Valid values: ONLINE IDLE DND INVISIBLE

status = ONLINE

