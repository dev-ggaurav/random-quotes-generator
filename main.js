const genBtn = document.getElementById('gen-btn');
const api = "https://api.quotable.io/random";


function generateQuote(){
   fetch(api)
  .then(function(data) {
         return data.json();
    })
    .then(function(data){    
    document.getElementById("quote").innerText = data.content; document.querySelector(".author").innerText = "- " + data.author;
   });
 }

 genBtn.addEventListener('click',generateQuote);