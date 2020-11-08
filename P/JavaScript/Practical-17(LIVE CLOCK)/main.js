//selector
const time= document.getElementById("time");
const greeting= document.getElementById("greeting");
const name= document.getElementById("name");
const day= document.getElementById("day");
//eventListener
//key press event => when we want after putting value in enter text and clicking enter data should go to local storage
        //blur event => also if mouse clicked anywhere outside textbox then also data should go to local storage
name.addEventListener("keypress",setName);
name.addEventListener("blur",setName);

//Function

function showTime()
{
    // to pick current time
    let today= new Date();
    let hour =today.getHours();
    let min =today.getMinutes();
    let sec =today.getSeconds();
    let date= today.toDateString();
    //am pm format
    const ampm= hour>=12 ? 'PM' : 'AM';
    //12 hrs format
    hour =hour%12 || 12;  
    time.innerHTML = `${addZero(hour)}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${ampm}`  //to print output as it is use``
     day.innerHTML = `${date}`;
    setTimeout(showTime,1000); //calls showTime after every 1000millisec i.e. 1sec
}
function addZero(n){
    return((parseInt(n,10))<10 ? '0':'')+n; //10 denotes decimal system
}

function setGreeting(){
    let today= new Date();  //year,month,date,hour,min,sec
    let hour =today.getHours();

    if(hour<12)
    {
        document.body.style.backgroundImage='url("morning.jpg")';
        document.body.style.backgroundRepeat= 'no-repeat';
        document.body.style.color= "navy";
        greeting.innerHTML= 'Good Morning';
    }
    else if(hour<18)
    {
        document.body.style.backgroundImage='url("afternoon.jpg")';
        document.body.style.backgroundRepeat= 'no-repeat';
        greeting.innerHTML= 'Good Afternoon';
    }
    else
    {
        document.body.style.backgroundImage='url("evening.jpg")';
        document.body.style.backgroundRepeat= 'no-repeat'; 
        greeting.innerHTML= 'Good Evening';
        document.body.style.color= "white";
    }
}
//to store user name in local storage
function getName()
{
    if(localStorage.getItem('myName')==null)
    {
        name.innerHTML= "[Enter Name]";  //when local storage not made
    }
    else{
        name.innerHTML =localStorage.getItem('myName');
        
    }
}

function setName(e)
{
    if(e.type === "keypress") //when enter pressed
    {
        if(e.keyCode==13)  //13 is code for enter key
        {
            localStorage.setItem('myName',e.target.innerHTML); //e.target content goes to myName
            name.blur();  //enter key press krte hi cursor next line me na jye balki bahar aa jye text box se
        }
    }
    else  //when mouse clicked outside input box
    {
        localStorage.setItem('myName',e.target.innerHTML); //e.target content goes to myName
    }
}
//function call
showTime();
setGreeting();
getName();
