// TODO: Customize console notifications

function shiftOptionRequired() {
  process.stderr.write(`Error: Shift option is required!\n`)
}

function shiftOptionIsNotNumber() {
  console.log(`Error: Shift option should be number!`);
}

function shiftOptionIsNotInteger() {
  console.log(`Error: Shift option should be an integer!`);
}

function actionOptionRequired() {
  process.stderr.write(`Error: Action option is required!\n`)
}

function actionOptionIsNotCorrect() {
  console.log(`Error: Action option can be only «encode» or «decode» values!`);
}

function fileDoesNotExist(file) {
  process.stderr.write(`Error: File ${file} does not exist!\n`);
}

function fileDoesNotReadable(file) {
  process.stderr.write(`Error: File '${file}' is not readable!\n`);
}

function fileDoesNotWritable(file) {
  process.stderr.write(`Error: File '${file}' is not writable!\n`);
}

function pipelineError(error) {
  console.log(`Error: transform finished with error: ${error} !`);
}

function pipelineSuccess() {
  console.log(`Success: transform finished successfully!`);
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
