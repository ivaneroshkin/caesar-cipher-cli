const fs = require('fs');
const notifications = require('./notifications');

function shiftOptionValidation(shift) {
  if (!shift) {
    notifications.shiftOptionRequired();
    process.exit(1);
  }

  if (isNaN(shift)) {
    notifications.shiftOptionIsNotNumber();
    process.exit(1);
  }

  if (!Number.isInteger(Number(shift))) {
    notifications.shiftOptionIsNotInteger();
    process.exit(1);
  }
}

function actionOptionValidation(action) {
  if (!action) {
    notifications.actionOptionRequired();
    process.exit(1);
  }

  if (action !== 'encode' && action !== 'decode') {
    notifications.actionOptionIsNotCorrect();
    process.exit(1);
  }
}

function inputOptionValidation(input) {
  if (input === undefined) {
    return process.stdin;
  }

  try {
    fs.accessSync(input, fs.constants.F_OK);
  } catch (error) {
    notifications.fileDoesNotExist(input);
    process.exit(1);
  }

  try {
    fs.accessSync(input, fs.constants.R_OK);
  } catch (error) {
    notifications.fileDoesNotReadable(input);
    process.exit(1);
  }

  return fs.createReadStream(input);
}

function outputOptionValidation(output) {
  if (output === undefined) {
    return process.stdin;
  }

  try {
    fs.accessSync(output, fs.constants.F_OK);
  } catch (error) {
    notifications.fileDoesNotExist(output);
    process.exit(1);
  }

  try {
    fs.accessSync(output, fs.constants.W_OK);
  } catch (error) {
    notifications.fileDoesNotWritable(output);
    process.exit(1);
  }

  return fs.createWriteStream(output, { flags: 'a' });
}

module.exports = {
  shiftOptionValidation,
  actionOptionValidation,
  inputOptionValidation,
  outputOptionValidation,
};
