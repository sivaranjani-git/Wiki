//Refer the Elements

const  refreshBtn = document.querySelector(".refresh-btn");

const quote = document.querySelector(".refresher-btn");
const author = document.querySelector(".author");

const mic_enabled = document.querySelector(".mic-btn");
const copy_enabled = document.querySelector("copy-btn");

const copy_img = document.getElementById("copy-btn");

async function getQuotes() {
    console.log("---Clicked Here---");

    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();

    try {
    if (response.ok) {
    quote.textcontent = data.content;
    author.textContent = data.author;
   }
}catch (error) {
    console.warn(error);
    }
}

refreshBtn.addEventListener("click", () => {
    document.addEventListener("DOMContentLoaded",()=>{
        const copy_enabled=
        document.getElementById("copy_enabled");
           const  quote = document.getElementByld("quote");
           const copy_msg =
           document.getElementByld("copy_msg");

           copy_enabled.addEventListener("click",() => {
            navigator.clipboard.writeText(quote.textContent);
            copy_msg.title ="Copied to Clipboard!";
           });
    })
    getQuotes();
});

mic_enabled.addEventListener("click", () => {
    const speechsynctt = new SpeechSynthesisUtterance("The Famous Saying ${quote.textContent} by ${author.textcontent},Thanks!");
    speechSynthesis.speak(speechsynctt);
});

copy_enabled.addEventListener ("click", () => {
  navigator.clipboard.writeText(quote.textContent);
  copy_message.title ="Copied to Clipboard!";
});









