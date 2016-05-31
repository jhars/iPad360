// window.addEventListener('load', initControl, false);

var pcanvas = document.getElementById("pantsCanvas");
var pctx = pcanvas.getContext("2d");

var pimage = new Image()
pimage.src = 'Pants.png';

var pframes = 33;
var pbottomFrame = 1;
var pcurrentFrame;
var pcurrentFrame = pbottomFrame;
var pclick = false;
var pwidth = 200;
var pheight = 200;
var pB;
var pALPHA;
var pDIFF = 0;

pctx.clearRect(0, 0, pwidth, pheight);
pctx.drawImage(pimage, 0, pheight * pcurrentFrame, pwidth, pheight, 0, 0, pwidth, pheight);

/////////////////////////////////////////////////////////////
var canvas = document.getElementById("beltCanvas");
var ctx = canvas.getContext("2d");

var image = new Image()
image.src = 'belt-200px-wide-7200px-tall.png';

var frames = 35;
var bottomFrame = 1;
var currentFrame;
var currentFrame = bottomFrame;
var click = false;
var width = 200;
var height = 200;
var B;
var ALPHA;
var DIFF = 0;

ctx.clearRect(0, 0, width, height);
ctx.drawImage(image, 0, height * currentFrame, width, height, 0, 0, width, height);

/////////////////////////////////////////////////////////////

function initControl() {
	initControlBelt()
	initControlPants()
}
	function initControlBelt() {
		var X = [];
		var DELTA; 

		// var ALPHA2 =
		canvas.addEventListener("mousedown", doMouseDown, false);
		canvas.addEventListener("touchstart", doMouseDown, false);

		function doMouseDown (event) {
			X[0] = event.pageX;
			canvas.addEventListener("mousemove",mouseX, false);
			canvas.addEventListener("touchmove",mouseX, false);
			//set initial X == currentMouse Location
			

			document.body.addEventListener("mouseup", mouseUp, false);
			
		};	
		function mouseUp(event) {
			// document.body.removeEventListener("mouseup", mouseUp, false);
		  canvas.removeEventListener("mousemove",mouseX, false);
		  canvas.removeEventListener("touchmove",mouseX, false);
		  console.log("alpha2 -> " + ALPHA2);
		};



		function mouseX (event) {
		    // event.preventDefault();
		    var canvasX = event.pageX;
		    X[1] = canvasX;


		  	A = ALPHA;
		  	DIFF = X[0] - X[1];

		  	// ALPHA = Math.abs(DIFF);
		  	ALPHA = DIFF;

		  	B = ALPHA;
		  	console.log("A - B = " + (A - B));
		  // if (A != B){
		  			if (B < A){
		  	  		// ALPHA++;
		  	  		if (currentFrame === frames ) {
		  	  			currentFrame = 1;
		  	  		} currentFrame++;
		  	  	} console.log("currentFrame1 = " + currentFrame)
		  	  	if (B > A) {
		  	  		if (currentFrame < bottomFrame ) {//or TRY 1 here...> see helmetLoop
		  	  			currentFrame = frames;
		  	  		} currentFrame--;
		  	  		console.log("ALPHA06 =>" + ALPHA);
		  	  	} console.log("currentFrame2 = " + currentFrame)
		  	  	var ALPHA2 = ALPHA;	
		  	  	console.log("currentFrame3 = " + currentFrame)
		  	  	console.log("ALPHA##2 => " + ALPHA);
		  	  	ctx.clearRect(0, 0, width, height);
		  	  	ctx.drawImage(image, 0, height * currentFrame, width, height, 0, 0, width, height);
		  	  	console.log("alpha2 -> " + ALPHA2);
		  	  	//WHATS THIS???
		  	  	X[1] = X[0];////
		  // }

		}

	}

/////////////////////////////////////////////////////////////

function initControlPants() {
	var X = [];
	var pDELTA;
	pcanvas.addEventListener("mousedown", doMouseDown, false);
	pcanvas.addEventListener("touchstart", doMouseDown, false);

	function doMouseDown (event) {
		X[0] = event.pageX;
		pcanvas.addEventListener("mousemove",mouseX, false);
		pcanvas.addEventListener("touchmove",mouseX, false);
		document.body.addEventListener("mouseup", mouseUp, false);
	};
	function mouseUp(event) {
	  pcanvas.removeEventListener("mousemove",mouseX, false);
	  pcanvas.removeEventListener("touchmove",mouseX, false);
	};



	function mouseX (event) {
	    var canvasX = event.pageX;
	    X[1] = canvasX;


	  	A = pALPHA;
	  	pDIFF = X[0] - X[1];
	  	pALPHA = pDIFF;

	  	B = pALPHA;
	  			if (B < A){
	  	  		if (pcurrentFrame === pframes ) {
	  	  			pcurrentFrame = 1;
	  	  		}
	  	  		pcurrentFrame++;
	  	  	}
	  	  	if (B > A) {
	  	  		if (pcurrentFrame < pbottomFrame ) {
	  	  			pcurrentFrame = pframes;
	  	  		}
	  	  		pcurrentFrame--;
	  	  	}
	  	  	var pALPHA2 = pALPHA;
	  	  	pctx.clearRect(0, 0, pwidth, pheight);
	  	  	pctx.drawImage(pimage, 0, pheight * pcurrentFrame, pwidth, pheight, 0, 0, pwidth, pheight);

	  	  	X[1] = X[0];

	}

}

