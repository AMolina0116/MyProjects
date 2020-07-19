// 1. Declare variables and capture input.
const crazyPlace = prompt("Name a cRaZy place...");
const crazyFood = prompt("Name a cRaZy food...");
const crazyStunt = prompt("Name a cRaZy Stunt...");
console.log(crazyPlace + crazyFood + crazyStunt);
// 2. Combine the input with other words to create a story.

// 3. Display the story as a <p> inside the <main> element.
document.querySelector(
  "main"
).innerHTML = `<p>One day we went to 🌎${crazyPlace}🌎 and ate some 🔥${crazyFood.toLowerCase()}🔥 after that we made a terrible choice and decided to try and ${crazyStunt.toLowerCase()}😬.</p>`;
