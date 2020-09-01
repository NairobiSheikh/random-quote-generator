//setting up the quoteds
let quotes = [
    {"quote": "No single thing is perfect by itself. That’s why we’re born to attract other things to make up for what we lack. I think we start walking in the right direction only after we start getting our counterparts besides us.",
    "author": "Itachi Uchiha"},
    {"quote": "A castle that vanishes at the first gust of wind is worthless.",
    "author": "Kill la Kill"},
    {"quote": "Every journey begins with a single step. We just have to have patience.",
    "author": "Milly Thompson"},
    {"quote": "Those who stand at the top determine what’s wrong and what’s right! This very place is neutral ground! Justice will prevail, you say? But of course, it will! Whoever wins this war becomes justice!",
    "author": "Don Quixote Doflamingo"},
    {"quote": "I don’t want to conquer anything. I just think that the guy with the most freedom in this ocean is the Pirate King!",
    "author": "Monkey D. Luffy"},
    {"quote": "Hard work betrays none, but dreams betray many.",
    "author": "Hachiman Hikigaya"},
    {"quote": "To know sorrow is not terrifying. What is terrifying is to know you can’t go back to happiness you could have.",
    "author": "Matsumoto Rangiku"},
    {"quote": "The true measure of a shinobi is not how he lives but how he dies. It’s not what they do in life but what they did before dying that proves their worth.",
    "author": "Jiraiya"},
    {"quote": "Fake people have an image to maintain. Real people just don’t care.",
    "author": "Hachiman Hikigaya"},
    {"quote": "We are all like fireworks: we climb, we shine and always go our separate ways and become further apart. But even when that time comes, let’s not disappear like a firework and continue to shine.. forever.",
    "author": "Hitsugaya Toshiro"},
    {"quote": "I want you to be happy. I want you to laugh a lot. I don’t know what exactly I’ll be able to do for you, but I’ll always be by your side.",
    "author": "Kagome"},
    {"quote": "The ticket to the future is always open.",
    "author": "Vash The Stampede"},
    {"quote": "Whatever you lose, you’ll find it again. But what you throw away you’ll never get back.",
    "author": "Kenshin Himura"},
    {"quote": "If you only face forward, there is something you will miss seeing.",
    "author": "Vash the Stampede"},
    {"quote": "If you don’t like your destiny, don’t accept it. Instead, have the courage to change it the way you want it to be!",
    "author": "Uzumaki Naruto"},
    {"quote": "Life is not a game of luck. If you wanna win, work hard.",
    "author": "Sora"},
    {"quote": "Fear is freedom! Subjugation is liberation! The contradiction is the truth! Those are the facts of this world! And you will all surrender to them, you pigs in human clothing!",
    "author": "Satsuki Kiryuuin"},
    {"quote": "Don’t live your life making up excuses. The one making your choices is yourself!",
    "author": "Mugen"},
    {"quote": "I hate perfection. To be perfect is to be unable to improve any further.",
    "author": "Kurotsuchi Mayuri"},
    {"quote": "If your life can change once, your life can change again.",
    "author": "Sanae"},
    {"quote": "Hurt me with the truth. But never comfort me with a lie.",
    "author": "Erza Scarlet"},
    {"quote": "You’ve got two legs and a heartbeat. What’s stopping you?",
    "author": "Inuyasha"},
    {"quote": "How can you move forward if you keep regretting the past?",
    "author": "Edward Elric"},
    {"quote": "It’s more important to master the cards you’re holding than to complain about the ones your opponent was dealt.",
    "author": "Grimsley"}
];

//setting up the Variables
const btn = document.querySelector('#btn');
const quote = document.querySelector('#quote');
const author = document.querySelector('#author');

//setting up eventListener
btn.addEventListener('click', function() {
    let num = Math.floor(Math.random() * quotes.length);
    quote.innerHTML = '<span>"</span>' + quotes[num].quote + '<span>"</span>';
    author.innerHTML = '<span>--</span>' + quotes[num].author;

})