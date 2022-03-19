const quotes = [
    {
        quote: "Frankly, my dear, I don't give a damn.",
        movie: "Gone with the wind, 1939",
    },
    {
        quote: "Here's looking at you, kid.",
        movie: "Casablanca, 1942",
    },
    {
        quote: "You're gonna need a bigger boat.",
        movie: "Jaws, 1975",
    },
    {
        quote: "May the Force be with you.",
        movie: "Star wars, 1977",
    },
    {
        quote: "Toto, I've a feeling we're not in Kansas anymore.",
        movie: "The wizard of OZ, 1939",
    },
    {
        quote: "I'm going to make him an offer he can't refuse.",
        movie: "The godfather, 1972",
    },
    {
        quote: "I'll be back.",
        movie: "The terminator, 1984",
    },
    {
        quote: "Why so serious?",
        movie: "The dark knight, 2008",
    },
    {
        quote: "I'll have what she's having.",
        movie: "When Harry met Sally, 1989",
    },
    {
        quote: "This is the beginning of a beautiful friendship.",
        movie: "Casablanca, 1942",
    }

]

const quote = document.querySelector("#quote span:first-child");
const movie = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
movie.innerText = `-${todaysQuote.movie}-`;