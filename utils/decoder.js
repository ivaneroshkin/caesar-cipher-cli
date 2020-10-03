/**
 * Text transformation function by Caesar cipher
 * @param {string} text - The text for transformation
 * @param {string} action - The type of decoding: encode or decode
 * @param {number} shift - Number of positions to shift
 */
function decoder(text, action, shift) {
  shift = (action === 'decode') ? (26 - shift) % 26 : shift;
  return text.split('').reduce(function(prev, current) {
    const currentCode = current.charCodeAt();
    if (65 <= currentCode && currentCode <= 90) {
      return prev + String.fromCharCode(((currentCode - 65 + shift) % 26) + 65);
    } else if (97 <= currentCode && currentCode <= 122) {
      return prev + String.fromCharCode(((currentCode - 97 + shift) % 26) + 97);
    } else {
      return prev + current;
    }
  }, '')
}

module.exports = {
  decoder
}