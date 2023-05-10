const counter = document.querySelector(".counter");
let minutes = 0;
let seconds = 0;
let miliseconds = 0;
let state = 'Start';
let interval = '';
let durationAfterStop = 0;
let displayMiliseconds = 0;
let displaaySeconds = 0;
let displayMinutes = 0;

function countStart(){
	miliseconds++;
	if(miliseconds/100 === 1){
		miliseconds = 0;
		seconds++;
		if(seconds/60 === 1){
      seconds = 0;
		minutes++;
		}
		if(minutes/60 === 1){
			minutes = 0;
		}
	}
	if(miliseconds < 10){
   displayMiliseconds = "0" + miliseconds.toString();
	}else{
   displayMiliseconds = miliseconds;
	}
	if(seconds < 10){
		displaaySeconds = "0" + seconds.toString();
	}else{
		displaaySeconds = seconds;
	}
	if(minutes < 10){
		displayMinutes = "0" + minutes.toString();
	}else{
		displayMinutes = minutes;
	}
		counter.innerHTML =  displayMinutes + ":"  + displaaySeconds + ":" + displayMiliseconds;
	}
	
	document.addEventListener("click", function(){
		if(state == 'Start'){
      interval = window.setInterval(countStart, 10);
		state = 'Stop';
		}
		else if (state == 'Stop'){
         clearInterval(interval)
			state = 'Start';
		}
	})
	
	document.addEventListener("dblclick", function reset(){
		miliseconds = 0;
		seconds = 0;
		minutes = 0;
		clearInterval(interval);
		counter.innerHTML = '00:00:00';
		state = 'Start';
	})
	


