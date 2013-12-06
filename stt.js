/*
** Under GPL - 2013 - Jules Dourlens <jdourlens@gmail.com>
*/

/*
** Extern class members
*/

function puts(error, stdout, stderr) { console.log(stdout + stderr + error);     console.log('STT :: END recording')}

var stt = module.exports = function()
{
}

var execute = function(cmd, callback)
{
    var exec = require('child_process').exec;
    exec(cmd, callback);
}

stt.prototype.startProcess = function()
{
    console.log('STT :: Start recording');
    execute("rm -v " + tmpFolder + "wewe.wav "  + tmpFolder + "wewe2.wav " + tmpFolder + "message.flac " + tmpFolder+ "recognized.json ; arecord -d5 -f dat -t wav -r 48000 -c 2 > " + tmpFolder + "wewe.wav;", convert);
}

/*
** Inner class use functions
*/

var convert = function()
{
    console.log('STT :: End recording');
    console.log('STT :: Start converting');
    execute("sox " + tmpFolder + "wewe.wav -b16 -r16k -c1 -t wav " + tmpFolder + "wewe2.wav; flac " + tmpFolder + "wewe2.wav -o " + tmpFolder + "message.flac;", doResult);
}

var doResult = function()
{
    console.log('STT :: End converting');
    console.log('STT :: Start translation');
    execute("./google.sh " + tmpFolder + " ;", gotResult)
}

var gotResult = function()
{
    console.log('STT :: End translation');
    try { 
	var obj = require(tmpFolder + "recognized.json");
    }
    catch (error)
    {
	console.log('STT :: ERROR :: Google returned nothing, maybe bad internet connection or no identified sound');
	console.log('STT :: ERROR :: See details : ' + error);
	return;
    }
//  console.log(obj);
    if (obj.status == 0)
    {
	var text = obj.hypotheses[0].utterance;
	console.log('STT :: RESULT == ' + text);
    }
}
