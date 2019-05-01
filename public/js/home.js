
// faceDict format: {name} =  [lateral position, depth, camera, lastDetection, numDetections, direction]
// exaple data : 0.06347981326021644, 2.889216054773962, 1, "2019-04-20T20:58:09.317Z", 549, -0.07024950239272891
	var x, y, name, faceDict, cameraOffsets;
	faceDict = {};
	cameraOffsets = [100, 1100, 2100, 3100, 4100];

	var myFont;
	function preload() {
	  myFont = loadFont('../assets/map1.otf');
		img1 = loadImage('../assets/cam1.png');
		img2 = loadImage('../assets/cam2.png');
	}
function setup() {
	var cnv = createCanvas(windowWidth, windowHeight-150);
  cnv.style('display', 'block');
  cnv.parent('sketchContainer');
    scale = 20;
	startX = windowWidth/6;
	startY = 20;
	// Starts in the middle
	// x = width / 2;
	// y = height;
	// redraw();
	noLoop();
}

// var sketch = function(p) {
//     p.setup = function(){
//       p.createCanvas(windowWidth, windowHeight-400);
// 			//p.style('display', 'block');
// 			noLoop();
//     }
//   };
//   var node = document.createElement('div');
//   new p5(sketch, node);
//   $('#sketchContainer').append(node);

function draw() {
	// -->yellow
	background(227, 210, 157);
	// background(200);



strokeWeight(0.127*100);
	stroke(0);
	//left wall
	line(startX, startY,startX,startY+ 6.96*scale);

	// image(img1,startX+0.308*scale,startY+ 2.286*scale, 30, 30);
  // left-top half
	line(startX, startY,startX+ 10.16*scale,startY);
 // left-bottom half
	line(startX, startY+ 6.96*scale,startX+ 10.16*scale,startY+ 6.96*scale);
	line(startX+10.16*scale, startY,startX+ 10.16*scale,startY+ 6.96*scale);
	// right wall
 	//line(startX+ (17.708333+15.625)*scale,startY,startX+ (17.708333+15.625)*scale,startY+ 22.8333*scale);
   // right-top half
 	//line(startX+ 17.708333*scale,startY,startX+ (17.708333+15.625)*scale,startY);
	// left-bottom half
 	//line(startX+ 14.8333*scale, startY+ 22.8333*scale,startX+ (17.708333+15.625)*scale,startY+ 22.8333*scale);

strokeWeight(0.127*30);


	// room divider
	// line(startX+ 4.24*scale, startY,startX+ 4.24*scale,startY+ (3)*scale);
  // room 2- top corridor
	// line(startX+ 4.24*scale,startY+ 2.769*scale,startX+ (4.24+1.651)*scale,startY+ 2.769*scale);

	// image(img2,startX+2.515*scale,startY+0.2318*scale, 30, 30);
 // room 2 wall - corridor
	// line(startX+ (4.24+1.651)*scale,startY+ 2.769*scale,startX+ (4.24+1.651)*scale,startY+ (2.769+0.406)*scale);
 // room2 wall - corridor - door
	// line(startX+ (4.24+1.651)*scale,startY+ (2.769+0.406)*scale,startX+ (4.24+1.651+1.805)*scale,startY+ (2.769+0.406)*scale);

  // outside corridor
	// line(startX+ (4.24+1.651+1.805+0.914)*scale,startY+ (2.769+0.406)*scale,startX+ (4.24+1.651+1.805+0.914+1)*scale,startY+ (2.769+0.406)*scale);

	// image(img1,startX+(4.3703)*scale,startY+ 1.46*scale, 30, 30);
  // room 1 corridor
	// line(startX+ 4.24*scale,startY+ (4.013-0.1)*scale,startX+ 4.24*scale,startY+ (4.013+0.660)*scale);
	// outermost wall bottom
	// line(startX+ 4.24*scale,startY+ (4.013+0.660)*scale,startX+ (4.24+5.37)*scale,startY+ (4.013+0.660)*scale);

	strokeWeight(1);
	// stroke(0);
	// textSize(25);
	// fill(50);
	// text("camera 0", 50, cameraOffsets[0]-50);
	// line(0, cameraOffsets[0], width, cameraOffsets[0]);
	// keys = Object.keys(faceDict);
	//
	// textSize(25);
	// fill(50);
	// text("camera 1", 50, cameraOffsets[1]-50);
	// line(0, cameraOffsets[1], width, cameraOffsets[1]);
	// keys = Object.keys(faceDict);
	//
	// textSize(25);
	// fill(50);
	// text("camera 2", 50, cameraOffsets[2]-50);
	// line(0, cameraOffsets[2], width, cameraOffsets[2]);
	// keys = Object.keys(faceDict);
	//
	// 	textSize(25);
	// fill(50);
	// text("camera 3", 50, cameraOffsets[3]-50);
	// line(0, cameraOffsets[3], width, cameraOffsets[3]);
	// keys = Object.keys(faceDict);
	//
	// 	textSize(25);
	// fill(50);
	// text("camera 4", 50, cameraOffsets[4]-50);
	// line(0, cameraOffsets[4], width, cameraOffsets[4]);
	keys = Object.keys(faceDict);

	for(var i = 0; i < keys.length;i++){
	   //keys[i] for key
	   //dictionary[keys[i]] for the value
		 name = keys[i];
		 console.log("name:"+keys[i]);
		 var faceData = faceDict[keys[i]];
		 x = scale*faceData[0]+startX;
		 y = scale*(faceData[1]) +startY;
		 //console.log(x);
		 //console.log(y);
		 angleMode(RADIANS);
		 console.log(faceData[5]);

		 translate(x,y);

		textFont(myFont);
		textSize(30);
		// stroke(50);
		// fill(220,220,220);
		stroke(139,69,19);
		fill(160,82,45);
		textAlign(CENTER, CENTER);
		text(name, 0, 40);
		 rotate(faceData[5] +PI/2);


		 // line(x,y,x+100,y);

		 // HEEL OF THE  LEFT FOOT
	   stroke(139,69,19);
	   fill(160,82,45);
		 arc(-15, 13, 10, 18, 0, PI);
 	 	 line(-20, 13, -10, 13);
	  //  arc(0, -40, 12, 22, 0, PI);
	 	// line(-7, -40, 5, -40);

	 	// LEFT FOOT
	   stroke(139,69,19);
	   fill(160,82,45);
		 bezier(-20, 9, -35, -22, 10, -22, -10, 9);
     line(-20, 9, -10, 9);
	 	// bezier(-7, -45, -20, -80, +25, -80, 5, -45);
	 	// // arc(x, y-45, 22, 65, PI, 0);
	 	// line(-7, -45, 5, -45);

	 	// HEEL OF THE RIGHT FOOT
	   stroke(139,69,19);
	   fill(160,82,45);
		 arc(15, 3, 10, 18, 0, PI);
 	   line(10, 3, 20, 3);
	  //  arc(35, -50, 12, 22, 0, PI);
	 	// line(28, -50, 40, -50);

	 	// RIGHT FOOT
	   stroke(139,69,19);
	   fill(160,82,45);
		 bezier(10, -2, -10, -32, 35, -32, 20, -2);
     line(10, -2, 20, -2);
	 	// bezier(28, -55, 5, -90, 50, -90, 40, -55);
	 	// // arc(x, y-45, 22, 65, PI, 0);
	 	// line(28, -55, 40, -55);

		rotate(-(faceData[5] +PI/2));
		translate(-x,-y);
		//

/*

		// HEEL OF THE  LEFT FOOT
		stroke(139,69,19);
		fill(160,82,45);
		arc(x, y-120, 12, 22, 0, PI);
		line(x-7, y-120, x+5, y-120);

		// LEFT FOOT
		stroke(139,69,19);
		fill(160,82,45);
		bezier(x-7, y-125, x-20, y-160, x+25, y-160, x+5, y-125);
		// arc(x, y-45, 22, 65, PI, 0);
		line(x-7, y-125, x+5, y-125);

		// HEEL OF THE RIGHT FOOT
		stroke(139,69,19);
		fill(160,82,45);
		arc(x+35, y-130, 12, 22, 0, PI);
		line(x+28, y-130, x+40, y-130);

		// RIGHT FOOT
		stroke(139,69,19);
		fill(160,82,45);
		bezier(x+28, y-135, x+5, y-170, x+50, y-170, x+40, y-135);
		// arc(x, y-45, 22, 65, PI, 0);
		line(x+28, y-135, x+40, y-135);

*/

//   // Jiggling randomly on the horizontal axis
//   x = x + random(-1, 1);
//   // Moving up at a constant speed
//   y = y - 1;

//   // Reset to the bottom
//   if (y < 0) {
//     y = height;
//   }
	}
}

$('document').ready(function(){
//const plugin = new OSC.WebsocketClientPlugin({ port: 9912 })
//const osc = new OSC({ plugin: plugin })

		$('#appendhere').append('<a class="ui huge green button"> Yes </a>');
		$('#appendhere').append('<a class="ui huge green button"> No </a>');

		// var arr = ["Are", "Watching", "You","We"];
		var arr = ["Solemnly", "Swear", "I", "Am", "Upto", "No", "Good", "I"];

	var i = 0;

	var topic;
	var HOST = location.origin.replace(/^http/, 'ws')
	var ws = new WebSocket(HOST);
	//var faceDict;
	var keys;
	//var i;

	  //var el = document.getElementById('server-time');
	ws.onmessage = function (event) {
		//console.log(event.data);
		faceDict = JSON.parse(event.data);
		//console.log(faceDict);
		redraw();
	};
	function getTopic() {
		if (i < arr.length) {
			topic = arr[i];
			i += 1;
		} else {
			topic = arr[0];
			i = 1;

		}
		return topic;
	}

	function drawPeople(){
		keys = Object.keys(faceDict);

		for(var i = 0; i < keys.length;i++){
		   //keys[i] for key
		   //dictionary[keys[i]] for the value
			 name = keys[i];
			 console.log("name:"+keys[i]);
		   // console.log("pos:"+faceDict[keys[i]]);
			 var position = faceDict[keys[i]];
			 for(var j=0;i<position.length;i++){
				 console.log(position[i]);
			 }
//console.log("Supriya");
			 x = position[0]+200;
			 y = position[1]+350;
			//redraw();
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




	/*
	function draw() {
		background(200);

		keys = Object.keys(faceDict);

		for(var i = 0; i < keys.length;i++){
		   //keys[i] for key
		   //dictionary[keys[i]] for the value
			 name = keys[i];
			 console.log("name:"+keys[i]);
			 var position = faceDict[keys[i]];
			 x = position[0]+180;
			 y = position[1]+350;



		// HEEL OF THE  LEFT FOOT
			stroke(139,69,19);
			fill(160,82,45);
			arc(x, y-40, 14, 24, 0, PI);
			line(x-7, y-40, x+7, y-40);

			// LEFT FOOT
			stroke(139,69,19);
			fill(160,82,45);
			bezier(x-7, y-45, x-20, y-90, x+35, y-90, x+7, y-45);
			// arc(x, y-45, 22, 65, PI, 0);
			line(x-7, y-45, x+7, y-45);

			// HEEL OF THE RIGHT FOOT
			stroke(139,69,19);
			fill(160,82,45);
			arc(x+35, y-50, 14, 24, 0, PI);
			line(x+28, y-50, x+42, y-50);

			// RIGHT FOOT
			stroke(139,69,19);
			fill(160,82,45);
			bezier(x+28, y-55, x, y-100, x+55, y-100, x+42, y-55);
			// arc(x, y-45, 22, 65, PI, 0);
			line(x+28, y-55, x+42, y-55);



			// HEEL OF THE  LEFT FOOT
			stroke(139,69,19);
			fill(160,82,45);
			arc(x, y-120, 14, 24, 0, PI);
			line(x-7, y-120, x+7, y-120);

			// LEFT FOOT
			stroke(139,69,19);
			fill(160,82,45);
			bezier(x-7, y-125, x-20, y-170, x+35, y-170, x+7, y-125);
			// arc(x, y-45, 22, 65, PI, 0);
			line(x-7, y-125, x+7, y-125);

			// HEEL OF THE RIGHT FOOT
			stroke(139,69,19);
			fill(160,82,45);
			arc(x+35, y-130, 14, 24, 0, PI);
			line(x+28, y-130, x+42, y-130);

			// RIGHT FOOT
			stroke(139,69,19);
			fill(160,82,45);
			bezier(x+28, y-135, x, y-180, x+55, y-180, x+42, y-135);
			// arc(x, y-45, 22, 65, PI, 0);
			line(x+28, y-135, x+42, y-135);


			textSize(25);
			fill(50);
			text(name, x+55, y-100);

	//   // Jiggling randomly on the horizontal axis
	//   x = x + random(-1, 1);
	//   // Moving up at a constant speed
	//   y = y - 1;

	//   // Reset to the bottom
	//   if (y < 0) {
	//     y = height;
	//   }
		}
	}
	*/

});
