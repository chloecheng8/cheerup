let imgs = ["http://lefunny.net/wp-content/uploads/2014/06/Funny-Valentines-day-meme.jpg", "http://lefunny.net/wp-content/uploads/2014/06/Funny-TV-show-meme.jpg", "http://lefunny.net/wp-content/uploads/2014/06/Funny-meme-about-silence.jpg", "https://i.pinimg.com/736x/36/78/49/367849eab65772c0a81af05bde83ba52.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlXBpwAJvrekb9ZGy00xEPuAz_rBRA3PsMvv2uL3sVDEm78FVS", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXiURjTx5mT3bMeVne8YwufOeRTk2EIGEz_AHbaWQs3mVWhu0G6Q", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUzY38zLoqq0dIwFuyxR3xVrHA9-RcCzEvwNyIhJZMUuMli-gong", "https://veryfunnypics.eu/wp-content/uploads/2018/06/funny-pictures-award-for-laziness.jpg", "http://www.dailyhaha.com/_pics/taking-a-test-at-school_th.jpg", "http://www.dailyhaha.com/_pics/not-really-a-morning-person_th.jpg", "https://i.pinimg.com/564x/b4/8d/2f/b48d2f91fb683c084c20a93697e6f2c9.jpg", "https://i.pinimg.com/564x/7f/78/e7/7f78e76404ecbaf8411ecce745952569.jpg", "https://i.pinimg.com/564x/85/38/f6/8538f6792cfd7c4226da0e8eff251e3f.jpg"]

function submitAnswer(){
  let imgChoice = Math.random() * imgs.length;
  imgChoice = Math.floor(imgChoice);
  document.getElementById("changeMe").src = imgs[imgChoice];
  document.getElementById("changeMe").style = "display: block";

}