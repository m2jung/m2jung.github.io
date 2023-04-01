//[{key:value,},{key:value,},...]
const quotes = [
    {quote: "It is often the small steps, not the giant leaps, that bring about the most lasting change.",
    author: "Queen Elizabeth II",
    },
    {quote: "Education is the most powerful weapon which you can use to change the world.",
    author: "Nelson Mandela",
    },
    {quote: "There is always light. If only we're brave enough to see it. If only we're brave enough to be it.",
    author: "Amanda Gorman",
    },
    {quote: "If you want to lift yourself up, lift up someone else.",
     author: "Booker T. Washington",
    },
    {quote: "You’re braver than you believe, stronger than you seem, and smarter than you think.",
     author: "A.A. Milne",
    },
    {quote: "It took me quite a long time to develop a voice, and now that I have it, I am not going to be silent.",
     author:"Madeleine Albright",
    },
    {quote: "You can't rely on how you look to sustain you, what sustains us, what is fundamentally beautiful is compassion; for yourself and your those around you.",
    author: "Lupita Nyong'o",
    },
    {quote: "Attitude is the 'little' thing that makes a big difference.",
    author: "Winston Churchill",
    },
    {quote: "All our dreams can come true — if we have the courage to pursue them.",
    author: "Walt Disney",
    },
    {quote: "Once you face your fear, nothing is ever as hard as you think.",
    author: "Olivia Newton-John"
    }
];   

const author = document.querySelector("#main-quote span:last-child");
const quote = document.querySelector("#main-quote span:first-child");
const mainQuote = document.querySelector("#main-quote");
//Math. 메서드 사용 random():0~1까지 사이의 난수, round:반올림 ceil:올림 floor:버림
const randomQuote = (quotes[Math.floor(Math.random() * quotes.length)]);

/* 로그인 후 화면 나타나게 수정하기*/
if(saveUsername === null ){ //storage에 사용자 이름의 값이 없으면
    mainQuote.classList.add(HIDDEN_CLASSNAME);
}else {
    mainQuote.classList.remove(HIDDEN_CLASSNAME);
    quote.innerText = randomQuote.quote;
    author.innerText = `-  ${randomQuote.author} -`;
};
