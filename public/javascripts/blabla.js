/*
** Under GPL - 2013 - Jules Dourlens <jdourlens@gmail.com>
*/

messages = [];

var first = true;
var i = 0;

console.log('Loading blabla.js');
socket = io.connect('http://127.0.0.1:' + 4040);
socket.on('msg', function(data)
	  {
	      console.log('Received message : ' + data);
	      messages.push(data);
	      addMsg(data);
	  });

start = function()
{
    console.log('emitting start event');
    socket.emit('start');
}

addMsg = function(msg)
{
    i++;
    content = document.createElement('h1');
    console.log(content);
    node = document.createTextNode(msg + ' ' + i);
    content.appendChild(node);
    anchor = document.getElementById('messages');
    if (first)
    {
	fakecontent = document.createElement('div');
	anchor.appendChild(fakecontent);
	first = false;
    }
    console.log(anchor.firstChild);
    document.body.insertBefore(content, anchor.nextSibling);
    // To do code to add the message to the queue!
}