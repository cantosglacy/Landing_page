
const time = document.getElementById('time'),
greeting = document.getElementById('greeting'),
name = document.getElementById('name'),
focus = document.getElementById('focus');

function showTime(){
    let today = new Date(),
    hour =today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();
//set am or pm
    const amPm = hour >=12 ? 'PM' : 'AM';
//12 hr format
    hour =hour % 12 ||12;
//output time
    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;
    setTimeout(showTime, 1000);


}
//Add zero
function addZero(n){
    return (parseInt(n,10) < 10 ? '0' : '') + n;
}
//set Background
function setBgGreet(){
    let today = new Date(),
    hour = today.getHours();

    if(hour < 12){
//morning
document.body.style.backgroundImage = "url('../images/morning.jpg')";
document.body.style.backgroundSize = "cover";
document.body.style.backgroundPosition = "bottom";
greeting.textContent ='Good Morning';

    }else if( hour < 18){
//afternoon
document.body.style.backgroundImage = "url('../images/afternoon.jpg')";
greeting.textContent ='Good afternon';
    }else{
//evening
document.body.style.backgroundImage = "url('../images/night.jpg')";
document.body.style.color = 'white';
greeting.textContent ='Good Evening';
    }
}

//Get Name
function getName(){
    if(localStorage.getItem('name')=== null){
        name.textContent = '[Enter Name]';
     }else{
         name.textContent = localStorage.getItem('name');
     }
}
//Set Name
function setName(e) {
if(e.type === 'keypress'){
if(e.which == 13 || e.keyCode == 13){
    localStorage.setItem('name', e.target.innerText);
    name.blur();

}

}else{
    localStorage.setItem('name', e.target.innerText);
}
}

function getFocus(){
    if(localStorage.getItem('focus')=== null){
        focus.textContent = '[Enter Focus]';
     }else{
         focus.textContent = localStorage.getItem('focus');
     }
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);

function setFocus(e) {
if(e.type === 'keypress'){
if(e.which == 13 || e.keyCode == 13){
    localStorage.setItem('focus', e.target.innerText);
    focus.blur();

}

}else{
    localStorage.setItem('focus', e.target.innerText);
}
}
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);


// Run
showTime(); 

setBgGreet(); 
getName();
getFocus();
