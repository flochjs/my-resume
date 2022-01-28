const { watch, task, src } = require('gulp');
const { ESLint } = require('eslint');

const eslint = require('gulp-eslint');
const stylelint = require('gulp-stylelint');

const lintJs = async (srcs) => {
  // src(srcs).pipe(eslint()).pipe(eslint.format());
  const eslint = new ESLint();

  // 2. Lint files.
  const results = await eslint.lintFiles(['src/**/*.js']);

  // 3. Format the results.
  const formatter = await eslint.loadFormatter('stylish');
  const resultText = formatter.format(results);

  // 4. Output it.
  console.log(resultText);
};

const lintCss = (srcs) => {
  src(srcs).pipe(
    stylelint({
      failAfterError: false,
      reporters: [{ formatter: 'string', console: true }],
    }),
  );
};

const lint = (jsSrcs, cssSrcs) => {
  console.clear();

  lintJs(jsSrcs);
  lintCss(cssSrcs);
};

task('lint', () => {
  const jsSrcs = ['./src/**/*.js', './src/**/*.jsx'];
  const cssSrcs = ['./src/**/*.css'];

  const makeLint = () => lint(jsSrcs, cssSrcs);

  makeLint();

  const jsWatcher = watch(jsSrcs);
  const cssWatcher = watch(cssSrcs);

  jsWatcher.on('add', makeLint);
  jsWatcher.on('unlink', makeLint);
  jsWatcher.on('change', makeLint);

  cssWatcher.on('add', makeLint);
  cssWatcher.on('unlink', makeLint);
  cssWatcher.on('change', makeLint);
});
