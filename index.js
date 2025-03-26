const tutorials = [
  "what does the this keyword mean?",
  "What is the Constructor OO pattern?",
  "Implementing Blophase-1-array-map-method-labckchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?"
];

function titleCased() {
  return tutorials.map(tutorial => {
    return tutorial
      .split(" ") // Split the string into words
      .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize first letter
      .join(" "); // Join words back into a sentence
  });
}

module.exports = { titleCased };