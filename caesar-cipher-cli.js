const { program } = require('commander');
const { pipeline, Transform } = require('stream');
const { decoder } = require('./utils/decoder');
const validations = require('./utils/validations');
const notifications = require('./utils/notifications');

program
  .storeOptionsAsProperties(false)
  .option('-a, --action <string>', 'an action encode/decode')
  .option('-s, --shift <number>', 'a shift')
  .option('-i, --input <file>', 'an input file')
  .option('-o, --output <file>', 'an output file')
  .parse(process.argv);

const options = program.opts();

validations.shiftOptionValidation(options.shift);
validations.actionOptionValidation(options.action);
const inputData = validations.inputOptionValidation(options.input);
const outputData = validations.outputOptionValidation(options.output);

const decoderTransform = new Transform({
  transform(chunk, encoding, callback) {
    chunk = decoder(chunk.toString('utf8') + `\n`, options.action, options.shift);
    callback(null, chunk);
  },
});

pipeline(inputData, decoderTransform, outputData, (error) => {
  error ? notifications.pipelineError(error) : notifications.pipelineSuccess();
});
