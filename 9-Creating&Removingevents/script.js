const ul=document.querySelector('ul');
//To remove the ul element we use
// ul.remove();
//To put a cross through all li tags when clicked remove function takes it out of web page
const button=document.querySelector('button');
button.addEventListener('click',e=>{
// ul.innerHTML+='<li>Something New</li>';
//Alternative way is yo crate an element 
const li=document.createElement('li');
li.textContent='Something new to do';

//We need to either append or prepend
//If we append an element it will add a new item on bottom of existing elements
// ul.append(li);
//If we preprend it will add existing items on top of the elements
ul.prepend(li);

});
const items=document.querySelectorAll('li');
items.forEach(item => {
    //We are attaching an event listener inside collection of items
   item.addEventListener('click',e=>{
      //This is an event log created by the browser for the event that happened
      //e.target tells us which element we clicked
      //we can use item but using e is recommended sice we can use that even we are not cycling and we are using event delegation
      console.log(item);
    //   console.log(e.target);
    //To do that we will use style since we dont know how to delete item from the browser yet
    // e.target.style="text-decoration:line-through red";
   //  e.target.style.textDecoration="line-through red";
    // e.target.style="color:red";
    e.target.remove();
   });
});