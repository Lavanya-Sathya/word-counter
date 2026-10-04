# CLI Word Count

A simple Node.js CLI tool to count word occurrences in a text file.

## Features

- Count all word occurrences in a file
- Count a specific word
- Case-insensitive word counting
- Handles whitespace and common punctuation
- Works directly from the command line
- Built with Node.js

## Installation

Install the package globally:

```bash
npm install -g cli-word-count
```

## Usage

### Count all words

```bash
word-count <file-path>
```

Example:

```bash
word-count file-1.txt
```

Output:

```text
Word Count: {
  hello: 3,
  world: 2,
  node: 1
}
```

### Count a specific word

You can provide a word as the second argument:

```bash
word-count <file-path> <word>
```

Example:

```bash
word-count file-1.txt hello
```

Output:

```text
Word Count: {
  hello: 3
}
```

## Case-Insensitive Matching

Word counting is case-insensitive.

For example, if the file contains:

```text
Hello hello HELLO
```

the result will be:

```text
Word Count: {
  hello: 3
}
```

Searching for a specific word is also case-insensitive:

```bash
word-count file-1.txt HELLO
```

This will count `Hello`, `hello`, and `HELLO` together.

## How It Works

The CLI:

1. Reads the specified text file.
2. Splits the content into words.
3. Normalizes words to lowercase.
4. Counts the occurrences of each word.
5. Displays the result in the terminal.

If a specific word is provided, only that word's occurrence count is displayed.

## Requirements

- Node.js
- npm

## GitHub

Source code and development history:

[View the project on GitHub](https://github.com/Lavanya-Sathya/word-counter)

## License

MIT