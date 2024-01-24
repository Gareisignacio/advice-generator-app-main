const dice = document.querySelector(".icon-dice");

let card = document.querySelector(".card");
let adviceNum = document.querySelector(".advice-num");
let advicePara = document.querySelector(".advice-para");
let patternDivider = document.querySelector(".pattern-divider");

dice.addEventListener("click", adviceChanger)

function adviceChanger(){
   fetch('https://api.adviceslip.com/advice')
      .then(res => res.json())
      .then(response=>{
         adviceNum.textContent = `Advice #${response.slip.id}`
         advicePara.textContent = `"${response.slip.advice}"`
      })
   
   card.appendChild(adviceNum);
   card.appendChild(advicePara);
   card.appendChild(patternDivider)
}

adviceChanger();