/*
** Under GPL - 2013 - Jules Dourlens <jdourlens@gmail.com>
*/

messages = [];

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
    content = document.getElementById('messages');
    var html = '';
    for (var i = 0; i < messages.length; i++)
    {
	html += '<br>' + messages[i] + '</br>';

	console.log('updated items');
    } 
    content.innerHtml = (html);
    // To do code to add the message to the queue!
}