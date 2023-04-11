/* The count will initialize from 0 and
listen for click; Be ready and interactive if someone clicks
 its value should increment by 1 each time the button is clicked 
 change the count el displayed whenver Increment button is pressed*/
  let count = 0;
  let countnumber = 0;
 
   function increment()
  {
  count+=1;
  let countEl = document.getElementById("count-el");
  countEl.innerText = count;
 
  }
let saveEl = document.getElementById("save-el");
  
function saveElFunction() {
countnumber += count + " "
saveEl.innerText = countnumber;
}
  
  function save(){
     console.log(count)
    saveElFunction()
      }
let welcomeEl = document.getElementById("welcome-el");

let name = "Akshit";
let greeting = "Hii, Welcome ";
welcomeEl.innerText = greeting + name;
welcomeEl.innerText += "✌"