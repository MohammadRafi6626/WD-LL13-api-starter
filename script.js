/*
🧠 Copilot Helper Notes – Please Follow These Guidelines:

This is a beginner-friendly project. Suggestions should:
- Use plain JavaScript (no frameworks, Canvas, or game libraries).
- Use `fetch()` with `.then()` syntax (not async/await unless requested).
- Prefer `const` and `let`, and keep variable/function names clear and descriptive.
- Use `||` and `&&` in conditionals only when needed – clarity first.
- Break logic into small, readable functions when appropriate.
- Avoid advanced ES6+ features (e.g., destructuring, optional chaining) unless scaffolded.
- Avoid arrow functions unless needed for clarity or brevity.
- Add helpful inline comments, especially around tricky logic or new patterns.

This helps students learn to read, debug, and extend code confidently.
*/

/*
Students — No need to worry about this block! 
It’s just here to help Copilot support you better. 
Start your code below 👇
*/

/*
fetch ('https://catfact.ninja/fact')
  .then(response => {
    return response.json();
  })
  .then(data => {
    console.log(data);
    const outputElement = document.getElementById('output');
    outputElement.textContent = data.fact;
  });

*/
// This script fetches a random Yes/No answer from the YesNo.WTF API and displays it on the page.
// It also includes a button to fetch a new answer without reloading the page.




// Function to fetch Yes/No answer from the API
function fetchYesNoAnswer() {
  // Get the output div where we'll display the result
  const outputElement = document.getElementById('output');
  
  // Show loading message while fetching
  outputElement.innerHTML = '<p>🤔 Thinking...</p>';
  
  // Fetch data from the YesNo.WTF API
  fetch('https://yesno.wtf/api')
    .then(function(response) {
      // Check if the response is successful
      if (response.ok) {
        return response.json(); // Convert response to JSON
      } else {
        throw new Error('Failed to fetch yes/no answer');
      }
    })
    .then(function(data) {
      // Display the yes/no answer with the GIF
      displayYesNoResult(data);
    })
    .catch(function(error) {
      // Handle any errors that occur during the fetch
      console.error('Error fetching yes/no answer:', error);
      outputElement.innerHTML = '<p>Sorry, could not get an answer right now. Please try again later.</p>';
    });
}

// Function to display the yes/no result in a nice format
function displayYesNoResult(data) {
  const outputElement = document.getElementById('output');
  
  // Determine the color based on the answer
  let answerColor = '#333'; // default color
  if (data.answer.toLowerCase() === 'yes') {
    answerColor = '#4CAF50'; // green
  } else if (data.answer.toLowerCase() === 'no') {
    answerColor = '#f44336'; // red
  } else if (data.answer.toLowerCase() === 'maybe') {
    answerColor = '#ff9800'; // orange
  }
  
  // Create HTML structure for displaying the result
  outputElement.innerHTML = `
    <div class="yesno-container">
      <h2 class="answer-text" style="color: ${answerColor}">${data.answer.toUpperCase()}</h2>
      <img src="${data.image}" alt="${data.answer} GIF" class="answer-gif" />
      <button onclick="fetchYesNoAnswer()" class="fetch-button">Ask Again</button>
    </div>
  `;
}




// Automatically fetch a yes/no answer when the page loads
console.log("Team activity starter code loaded.");
fetchYesNoAnswer();