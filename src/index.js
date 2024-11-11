const testText = 'Testing the configuration...';
const indexH1 = document.querySelector('#app');
/**
 * Returns a Header HTML element
 * @param {String} test - The header text.
 * @returns {String} The H1 HTML element.
 */
function loadConfig(text) {
  return `<h1>${text}</h1>`;
}

console.log((indexH1.innerHTML = loadConfig(testText)));
console.log();
