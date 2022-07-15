const container=document.querySelector('.container');
const seats=document.querySelector('.row .seat:not(.occupied)');
const movie=document.getElementById('movie');
const count=document.getElementById('count');
const total=document.getElementById('total');
let ticketPrice=movie.value;

movie.addEventListener('change',(e)=>{
ticketPrice=e.target.value;
updateseats();
});


function updateseats(){
    const selectedseats=document.querySelectorAll('.row .seat.selected');
    const scount=selectedseats.length;
    count.innerText=scount;
    total.innerText=ticketPrice*scount;
    const seatsIndex=[...selectedseats].map(function(seats){
      return[...seats].indexOf(seats);
    });
    localStorage.setItem('selectedseats',JSON.stringify(seatsIndex));
    
}
container.addEventListener('click',(e)=>{
if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){
    e.target.classList.toggle('selected');
  updateseats();
}
});