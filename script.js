let getButton =  document.querySelector("#submitButton");
let quoteText = document.querySelector("#quoteBox__quotes");
let author = document.querySelector("#author")
let buttonClicks = 0;

let quoteUrl = 'https://api.quotable.io/random';

getButton.addEventListener("click", handleGetQuotes);
window.addEventListener("load", handleGetQuotes);

async function handleGetQuotes() {

    try {
        let result = await fetch(quoteUrl);
        let actualResult = await result.json();
    // console.log(actualResult.content);
    // console.log(actualResult.author)
    // console.log(author.innerText);
    // console.log(author.innerHTML)

        quoteText.innerText = actualResult.content;
        author.innerText = actualResult.author;
        
    } catch (error) {
        quoteText.innerText = `Something bad happened ${error.message}`;
        author.innerText = `WE WILL BE BACK SHORTLY`;
        console.log(error);
    }  

}
