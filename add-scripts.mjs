import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const packageJsonPath = path.join(__dirname, 'package.json');

// Read the existing package.json
let packageJson;
try {
  const data = fs.readFileSync(packageJsonPath, 'utf8');
  packageJson = JSON.parse(data);
} catch (error) {
  console.error('Error reading package.json:', error);
  process.exit(1);
}

// Ensure the scripts object exists
packageJson.scripts = packageJson.scripts || {};

// Define the scripts to add or update
const newScripts = {
  test: 'jest',
  'test:unit': 'jest --config=config/jest/jest.config.js --selectProjects=unit',
  lint: 'eslint . --ext .js,.jsx,.ts,.tsx',
  'lint:fix': 'eslint . --ext .js,.jsx,.ts,.tsx --fix',
  format: 'prettier --write src/**/*.{js,jsx,ts,tsx}',
  'format:check': 'prettier --check src/**/*.{js,jsx,ts,tsx}',
};

// Add or update the scripts
Object.assign(packageJson.scripts, newScripts);

// Write the updated package.json back to the file system
try {
  fs.writeFileSync(
    packageJsonPath,
    JSON.stringify(packageJson, null, 2) + '\n',
    'utf8'
  );
} catch (error) {
  console.error('Error writing to package.json:', error);
  process.exit(1);
}
