const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');





// Get quotes From API
let apiQuotes= [];

function loading(){
    loader.hidden = false;
    quoteContainer.hidden = true;
}

function complete(){
    quoteContainer.hidden=false;
    loader.hidden= true;
}


function newQuote(){
    loading();
    // Pick a random qutote
    const quote = apiQuotes[Math.floor(Math.random()*apiQuotes.length)];
    // Check is Author place is blank and put Unknown
    if(!quote.author){
        author.textContent='Unknown';
    }
    else{
        authorText.textContent=quote.author
    }

    // Style long quote
    if(quote.text.length>100){
        quoteText.classList.add('long-quote');
    }
    else{
        quoteText.classList.remove('long-quote');
    }

// Set Quote, hide loader
complete();
    quoteText.textContent=quote.text;

  
}

async function getQuotes() {
    loading();
    const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();
    }
        catch(eror){
            alert('Eror 404')
        }
    }

    // twitt quote 

function tweetQuote(){
    const twitterUrl= `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`
    window.open(twitterUrl, '_blank');
}

// Event Listener
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);


    getQuotes();
    loading();
