
console.log('Loading blabla.js');
socket = io.connect('http://127.0.0.1:' + 4040);
socket.on('msg', function(data)
	  {
	      console.log('Received message : ' + data);
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
    // To do code to add the message to the queue!
}