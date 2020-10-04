# Caesar Cipher CLI

Caesar Cipher CLI can decode/encode text from the command line or .txt file and write in the command line or another .txt file. Encoding process inspired by [Caesar's encryption algorithm](https://en.wikipedia.org/wiki/Caesar_cipher)

## Prerequisites

- Git - [Download & Install Git](https://git-scm.com/downloads).
- Node.js - [Download & Install Node.js](https://nodejs.org/en/download/) and the npm package manager.

> N.B: required Node.js version 12.18.4 LTS or higher!


## How to start
**Downloading**

```
git clone {repository URL} caesar-cipher-cli

cd caesar-cipher-cli
```

**Installing NPM modules**

```
npm install
```

**Running application**

For encoding\decoding process used data from the command line. 
If the user added input/output options, reading and writing will come from chosen .txt files.

After each new encoding\decoding process with the correct output option, the output .txt file won't be overwritten(new output data will be added to after existing data).

Application caesar-cipher-cli accepts 4 options (two of them are required) as short alias and full name:

1.  **-s, --shift**: a shift (required option)
2.  **-a, --action**: an action encode/decode (required)
3.  **-i, --input**: an input file
4.  **-o, --output**: an output file

**Examples**

```
node caesar-cipher-cli -s 3 -a encode
```

After starting caesar-cipher-cli user can write text in the command line and receive encoded text on the new command line.

```
node caesar-cipher-cli -s 3 -a decode -i input.txt -o output.txt
```

After starting caesar-cipher-cli application read data from the input.txt file, decode it, and write data in the output.txt file
