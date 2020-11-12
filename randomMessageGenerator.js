// First up is the arrays containing the random text to pull advice from:

const astronomicalBodies = ['Mercury', 'Venus', 'Mars', 'Earth', 'Saturn', 'Jupiter', 'Uranus', 'Neptune', 'the Sun'];
const moonPhases = ['new', 'waxing crescent', 'first quarter', 'waxing gibbous', 'full', 'waning gibbous', 'third quarter', 'waning crescent'];
const specialMoon = ['Blood Moon', 'Lunar Eclipse'];
const windDirection = ['north', 'northeast', 'east', 'southeast', 'south', 'southwest', 'west', 'northwest'];
const astrologicalTerm1 = ['in flux', 'in ascendency', 'in retrograde', 'in prograde', 'afflicted', 'descendent', 'undergoing a long ascension', 'undergoing an orbital periapsis'];
const element = ['fire', 'water', 'earth', 'wind'];
const starSign = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'];
const astrologicalTerm2 = ['are aligned', 'are in transit', 'have strong synastry', 'have weak synastry', 'are cardinal', 'are fixed', 'are mutable', 'are in opposition', 'are on the cusp'];
const weatherAhead = ['stormy', 'calm', 'snowy', 'sunny', 'rainy', 'warm', 'hot', 'cold', 'wet', 'humid', 'damp', 'dry'];
const people = ['pirate', 'thief', 'liar', 'cheat', 'honest man', 'honest woman', 'bartender', 'teacher', 'writer', 'journalist', 'smith', 'shopkeeper', 'statistician', 'scientist', 'politician', 'warrior', 'nomad', 'scholar', 'diplomat', 'lover', 'partner']
const verbs = ['be wary of', 'look out for', 'be vigilant of', 'keep and eye out for'];
const peopleAction = ['help you', 'change your life', 'take something from you', 'help you repay a debt', 'take you on a journey', 'teach you something', 'help you learn', 'show you your mistakes', 'lie to you', 'buy something from you', 'sell something to you', 'help you forget your past', 'show you your future'];

// The section below determines which values from the above arrays are randomly selected 

let getAstronomicalBody = astronomicalBodies[Math.floor(Math.random()*astronomicalBodies.length)];
let getMoonPhase = moonPhases[Math.floor(Math.random()*moonPhases.length)];
let getSpecialMoon = specialMoon[Math.floor(Math.random()*specialMoon.length)];
let getWindDirection = windDirection[Math.floor(Math.random()*windDirection.length)];
let getAstrologicalTerm1 = astrologicalTerm1[Math.floor(Math.random()*astrologicalTerm1.length)];
let getElement = element[Math.floor(Math.random()*element.length)];
let getStarSign1 = starSign[Math.floor(Math.random()*starSign.length)];
let getStarSign2 = starSign[Math.floor(Math.random()*starSign.length)];
let getAstrologicalTerm2 = astrologicalTerm2[Math.floor(Math.random()*astrologicalTerm2.length)];
let getWeatherAhead = weatherAhead[Math.floor(Math.random()*weatherAhead.length)];
let getPerson = people[Math.floor(Math.random()*people.length)];
let getVerb = verbs[Math.floor(Math.random()*verbs.length)];
let getPeopleAction = peopleAction[Math.floor(Math.random()*peopleAction.length)];
let getRandomAge = 60 + (Math.floor(Math.random()*80));

// To make sure that two different star signs are selected
if (getStarSign1 === getStarSign2) {
    while (getStarSign1 === getStarSign2) {
        getStarSign2 = starSign[Math.floor(Math.random()*starSign.length)];
    }
}

// Here a section to occasionally random select a special Moon 

let specialMoonValue = Math.floor(Math.random()*100);
let isSpecialMoon = false;
if (specialMoonValue > 90) {
    isSpecialMoon = true;
}

// Below the console output with the selected values:

console.log(`Hello fortune-seeker. I am the venerable Oracle of Delphi and I will tell you your future.`);
if (isSpecialMoon === true) {
    console.log(`We are under the influence of a ${getSpecialMoon} - so evil is in the air!`);
}
console.log(`I have consulted the heavens and they have revealed their secrets to me.`);
console.log(`The position of ${getAstronomicalBody} in the sky is ominous. The ${getWindDirection} wind and the ${getMoonPhase} moon have divined much. The weather next month will be ${getWeatherAhead}.`);
console.log(`${getAstronomicalBody} is also ${getAstrologicalTerm1}. Due to the element of ${getElement}, this suggests that you will live to be ${getRandomAge}.`);
if (getRandomAge > 75) {
    console.log(`This is a ripe old age indeed!`)
} else {
    console.log(`I'm sorry to be the bearer of bad news!`)
}
console.log(`In addition, because ${getStarSign1} and ${getStarSign2} ${getAstrologicalTerm2}, you will meet a ${getPerson} in the next few weeks.`)
console.log(`This person will ${getPeopleAction}, so ${getVerb} them!`);