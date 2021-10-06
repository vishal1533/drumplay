for(var i=0;i<document.querySelectorAll(".drum").length;i++)
{
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){makeSomeNoise(event,1)});
}

document.addEventListener("keydown",function(){makeSomeNoise(event,2)});


function makeSomeNoise(e,num){
  var take;
  if(num==1)
  {
    take=e.target.innerHTML;
  }
  else if(num==2)
  {
    take=e.key;
  }

  animation(take);

  if(take=='w')
  {
    var audio = new Audio("sounds/tom-1.mp3");
    audio.play();
  }
  else if(take=='a')
  {
    var audio = new Audio("sounds/tom-2.mp3");
    audio.play();
  }
  else if(take=='s')
  {
    var audio = new Audio("sounds/tom-3.mp3");
    audio.play();
  }
  else if(take=='d')
  {
    var audio = new Audio("sounds/tom-4.mp3");
    audio.play();
  }
  else if(take=='j')
  {
    var audio = new Audio("sounds/snare.mp3");
    audio.play();
  }
  else if(take=='k')
  {
    var audio = new Audio("sounds/crash.mp3");
    audio.play();
  }
  else if(take=='l')
  {
    var audio = new Audio("sounds/kick-bass.mp3");
    audio.play();
  }
}


function animation(take)
{
  var an=document.querySelector("."+take);
  an.classList.add("pressed");
  setTimeout(function(){an.classList.remove("pressed");},100);
}
