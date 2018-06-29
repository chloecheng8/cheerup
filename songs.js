let songs = ["https://www.youtube.com/embed/ZbZSe6N_BXs", "https://www.youtube.com/embed/QJO3ROT-A4E", "https://www.youtube.com/embed/BQ0mxQXmLsk", "https://www.youtube.com/embed/MBdVXkSdhwU", "https://www.youtube.com/embed/aJOTlE1K90k", "https://www.youtube.com/embed/k2qgadSvNyU", "https://www.youtube.com/embed/e-ORhEE9VVg", "https://www.youtube.com/embed/VuNIsY6JdUw", "https://www.youtube.com/embed/7PrxONon7jg", "https://www.youtube.com/embed/JGwWNGJdvx8", "https://www.youtube.com/embed/kJQP7kiw5Fk", "https://www.youtube.com/embed/LjhCEhWiKXk", "https://www.youtube.com/embed/09R8_2nJtjg", "https://www.youtube.com/embed/c7rCyll5AeY", "https://www.youtube.com/embed/gJLIiF15wjQ", "https://www.youtube.com/embed/LsoLEjrDogU", "https://www.youtube.com/embed/PT2_F-1esPk"]

function submitAnswer(){
  let songChoice = Math.random() * songs.length;
  songChoice = Math.floor(songChoice);
  document.querySelector("iframe").style.display = "block";
  document.querySelector("iframe").src = songs[songChoice];
}

