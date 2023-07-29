let timer;
let isrun=false;
let seconds=0;
let minutes=10;
let hours=0;

function startTimer(){
 if(!isrun)
 {
  timer=setInterval(updateTimer,1000);
  isrun=true;
 }
}

function stopTimer()
{
  if(isrun)
  {
    clearInterval(timer);
    isrun=false;
  }
}
function resetTimer()
{
  clearInterval(timer);
  isrun=false;
  seconds=0;
  minutes=10;
  hours=0;
  displayTimer();
}
function updateTimer()
{
  if(seconds==0&&minutes==0&&hours==0)
  {
    stopTimer();
    return;
  }
  if(seconds==0)
  {
    if(minutes>0)
    {
      minutes--;
      seconds=59;

    }
    else{
      hours--;
      minutes=59;
      seconds=59;
    }
  }
    else{
      seconds--;
    }
    displayTimer();
  
}

function displayTimer() {
  const formattedTime = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
  document.getElementById("display").textContent = formattedTime;
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}
