const astronomicalBodies = ['Mercury', 'Venus', 'Mars', 'Earth', 'Saturn', 'Jupiter', 'Uranus', 'Neptune', 'the Sun'];
const moonPhases = ['new Moon', 'waxing crescent', 'first quarter', 'waxing gibbous', 'full Moon', 'waning gibbous', 'third quarter', 'waning crescent'];
const specialMoon = ['Blood Moon', 'Lunar Eclipse'];
const windDirection = ['north', 'northeast', 'east', 'southeast', 'south', 'southwest', 'west', 'northwest'];
const astrologicalTerm = ['in flux', 'in ascendency', 'in retrograde', 'is in prograde', 'is afflicted', 'descendent', 'undergoing a long ascension', 'undergoing an orbital periapsis'];
const element = ['fire', 'water', 'earth', 'wind'];
const starSign = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'];
const astrologicalTerm2 = ['are aligned', 'are in transit', 'have strong synastry', 'have weak synastry', 'are cardinal', 'are fixed', 'are mutable', 'are in opposition', 'are on the cusp'];
const weatherAhead = ['stormy', 'calm', 'snowy', 'sunny', 'rainy', 'warm', 'hot', 'cold', 'wet', 'humid', 'damp', 'dry'];
const people = ['pirate', 'thief', 'liar', 'cheat', 'honest man', 'honest woman', 'bartender', 'teacher', 'writer', 'journalist', 'smith', 'shopkeeper', 'statistician', 'scientist', 'politician', 'warrior', 'nomad', 'scholar', 'diplomat', 'lover', 'partner']
const verbs = ['be wary of', 'look out for', 'expect', 'be vigilant of'],
const peopleAction = ['help you', 'change your life', 'take something from you', 'help you repay a debt', 'take you on a journey', 'teach you something', 'help you learn', 'show you your mistakes', 'lie to you', 'buy something from you', 'sell something to you', 'help you forget your past', 'show you your future'];

let aBody = astronomicalBodies[Math.floor(Math.random()*astronomicalBodies.length)]
console.log(aBody);

return `Hello fortune-seeker. I am the venerable Oracle of Delphi and I will tell you your future.`;