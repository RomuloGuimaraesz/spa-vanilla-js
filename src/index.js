const testText = 'Testing the configuration...';

/**
 * Returns a Header HTML element
 * @param {String} test - The header text.
 * @returns {String} The H1 HTML element.
 */
function loadConfig(testText) {
  return `<h1>${testText}</h1>`;
}

loadConfig(testText);
