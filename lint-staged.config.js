export default {
  'src/**/*.js': ['prettier --write', 'eslint --fix', 'git add'],
  'src/**/*.css': ['stylelint --fix', 'git add'],
};
