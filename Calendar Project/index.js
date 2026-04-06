const monthNameE1=document.getElementById("month");
const dayNameE1=document.getElementById("day");
const dayNumE1=document.getElementById("day-number");
const yearE1=document.getElementById("year")

const date= new Date();
const month=date.getMonth();
monthNameE1.innerText=date.toLocaleString("en", {
    month:"long"
});

dayNameE1.innerText=date.toLocaleString("en",{
    weekday:"long"
});

dayNumE1.innerText=date.getDate();

yearE1.innerText=date.getFullYear();

const video = document.querySelector('.sunrise');

video.addEventListener('mouseenter', () => {
  video.play();
});
/src/data/data.json
import data from './data/data.json';

video.addEventListener('mouseleave', () => {
  video.pause();
  video.currentTime = 0; // Optional: resets video to beginning
});
