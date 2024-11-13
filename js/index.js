

var quotes = [
  {
    name : "--Nelson Mandela",
    quote : "Resentment is like drinking poison and waiting for your enemies to die.",
  },
  {
    name : "--Wayne Gretzy",
    quote : "You miss 100% of the shots you don't take.",
  },
  {
    name : "--Elbert Hubbard",
    quote : "Do not take life too seriously. You will not get out alive.",
  },
  {
    name : "--Epictetus",
    quote : "It's not what happens to you, but how you react to it that matters.",
  },
  {
    name : "--Frank Sinatra",
    quote : "It's not what happens to you, but how you react to it that matters.",
  },
  {
    name : "--Epictetus",
    quote : "The best revenge is massive success.",
  },
  {
    name : "― Oscar Wilde",
    quote :"Be yourself; everyone else is already taken.",
  },
  {
    name : "― Frank Zappa",
    quote : "“So many books, so little time.”",
  },
];

var lastIndex = -1;
function displayQuote(){
  var randomIndex;
  do{
    randomIndex = Math.floor(Math.random() * quotes.length);
  }
  while(randomIndex === lastIndex);
  lastIndex = randomIndex;
  
  var quote = quotes[randomIndex];
  // var quote = quotes[lastIndex];
  document.getElementById('quote').innerHTML = `"${quote.quote}`;
  document.getElementById('name').innerHTML = `"${quote.name}`;
}