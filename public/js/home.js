$('document').ready(function(){
//const plugin = new OSC.WebsocketClientPlugin({ port: 9912 })
//const osc = new OSC({ plugin: plugin })

		$('#appendhere').append('<a class="ui huge green button"> Yes </a>');
		$('#appendhere').append('<a class="ui huge green button"> No </a>');

		var arr = ["Are", "Watching", "You","We"];

	var i = 0;

	var topic;
	var HOST = location.origin.replace(/^http/, 'ws')
	var ws = new WebSocket(HOST);
	var faceDict;
	  //var el = document.getElementById('server-time');
	ws.onmessage = function (event) {
		//console.log(event.data);
		faceDict = JSON.parse(event.data);
		drawPeople();
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

	function drawPeople(){
		var keys = Object.keys(faceDict);

		for(var i = 0; i < keys.length;i++){
		   //keys[i] for key
		   //dictionary[keys[i]] for the value
			 console.log("name:"+keys[i]);
		   console.log("pos:"+faceDict[keys[i]);
			 var position = faceDict[keys[i];
		}
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
