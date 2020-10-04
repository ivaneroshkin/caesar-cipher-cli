const chalk = require('chalk');

function shiftOptionRequired() {
  console.error(chalk`{bgRed.black Error:} Shift option is required!`);
}

function shiftOptionIsNotNumber() {
  console.log(chalk`{bgRed.black Error:} Shift option should be number!`);
}

function shiftOptionIsNotInteger() {
  console.log(chalk`{bgRed.black Error:} Shift option should be an integer!`);
}

function actionOptionRequired() {
  console.error(chalk`{bgRed.black Error:} Action option is required!`);
}

function actionOptionIsNotCorrect() {
  console.log(chalk`{bgRed.black Error:} Action option can be only «encode» or «decode» values!`);
}

function fileDoesNotExist(file) {
  console.error(chalk`{bgRed.black Error:} File ${file} does not exist!`);
}

function fileDoesNotReadable(file) {
  console.error(chalk`{bgRed.black Error:} File '${file}' is not readable!`);
}

function fileDoesNotWritable(file) {
  console.error(chalk`{bgRed.black Error:} File '${file}' is not writable!`);
}

function pipelineError(error) {
  console.log(chalk`{bgRed.black Error:} transform finished with error: ${error} !`);
}

function pipelineSuccess() {
  console.log(chalk`{bgGreen.black Success:} transform finished successfully!`);
}

module.exports = {
  shiftOptionRequired,
  shiftOptionIsNotNumber,
  shiftOptionIsNotInteger,
  actionOptionRequired,
  actionOptionIsNotCorrect,
  fileDoesNotExist,
  fileDoesNotReadable,
  fileDoesNotWritable,
  pipelineError,
  pipelineSuccess,
};
