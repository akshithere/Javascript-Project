/* The count will initialize from 0 and
listen for click; Be ready and interactive if someone clicks
 its value should increment by 1 each time the button is clicked 
 change the count el displayed whenver Increment button is pressed*/
  let count = 0;
 
   function increment()
  {
  count=count+1
  let countEl = document.getElementById("count-el");
  countEl.innerText = count;

  }
  function save(){
     console.log(count)
    
      }
let welcomeEl = document.getElementById("welcome-el");

let name = "Akshit";
let greeting = "Hii, Welcome ";
welcomeEl.innerText = greeting + name;
