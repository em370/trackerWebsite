
$('document').ready(function(){
//const plugin = new OSC.WebsocketClientPlugin({ port: 9912 })
//const osc = new OSC({ plugin: plugin })

		$('#appendhere').append('<a id = "send"  class="ui huge green button"> Yes </a>');
		$('#appendhere').append('<a href ="signup" class="ui huge green button"> No </a>');
	
		var arr = ["Religion", "Science", "Politics", "Philosophy", "Education", "Food", "Sports", "Ethics", "Culture", "Music", "Hobbies", "Movies and Film", "Literature", "Comedy", "Something", "Anything"];

	var i = 0;

	var topic;
      var HOST = location.origin.replace(/^http/, 'ws')
      var ws = new WebSocket(HOST);
      var el = document.getElementById('server-time');
      ws.onmessage = function (event) {
        el.innerHTML = 'Server time: ' + event.data;
      };
	function getTopic() {
		if (i < arr.length) {
			topic = arr[i];
			i += 1;
		} else {
			i = 0;
		}
		return topic;
	}

	setInterval(function(){ document.getElementById('topic').innerHTML = getTopic(); }, 1250);
	
	//var osc = new OSC();
	//osc.open({
  //host: 'localhost',    // @param {string} Hostname of WebSocket server
 // port: 9912            // @param {number} Port of WebSocket server
//}); // connect by default to ws://localhost:8080

	document.getElementById('send').addEventListener('click', () => {
		//var message = new OSC.Message('/test/random', Math.random());
		//osc.send(message);
		console.log("Hello world!");
	});

});

