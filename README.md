# 📝 TypeScript Spell Checker

A command-line spell checker built with TypeScript that analyzes text files and provides spelling suggestions using the Typo.js library.

## ✨ Features

- 🔍 **Accurate spell checking** using US English dictionary
- 📍 **Line number tracking** for misspelled words
- 💡 **Smart suggestions** with up to 3 alternatives per word
- 🧹 **Word cleaning** removes punctuation and special characters
- 📊 **Duplicate detection** consolidates repeated misspellings across lines
- ⚡ **Fast processing** with efficient file parsing

## 🚀 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd spell-checker
```

2. Install dependencies:
```bash
npm install
```

3. Install required packages:
```bash
npm install typo-js @types/node typescript ts-node
```

## 💻 Usage

Run the spell checker on any text file:

```bash
npx ts-node index.ts <file-to-check.txt>
```

### Examples

```bash
# Check a document
npx ts-node index.ts document.txt

# Check a markdown file
npx ts-node index.ts README.md

# Check source code comments
npx ts-node index.ts script.js
```

## 📊 Sample Output

```
'recieve' is misspelled on line(s): 5, 12. Suggestions: receive, relieve, deceive
'seperate' is misspelled on line(s): 8. Suggestions: separate, desperate, temperate
```

Or when no errors are found:
```
No errors, everything is good
```

## 🛠️ How It Works

1. **File Reading**: Reads the specified file using Node.js fs module
2. **Text Parsing**: Splits content into lines and extracts individual words
3. **Word Cleaning**: Removes punctuation and special characters
4. **Dictionary Check**: Validates each word against US English dictionary
5. **Suggestion Generation**: Provides alternatives for misspelled words
6. **Result Aggregation**: Groups same misspellings across multiple lines

## 📋 Requirements

- Node.js 14+ 
- TypeScript
- Dependencies: `typo-js`, `@types/node`

## 🔧 Technical Details

- **Language**: TypeScript
- **Dictionary**: US English (typo-js)
- **File Encoding**: UTF-8
- **Word Pattern**: Alphanumeric characters and underscores only

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Add support for other languages
- Implement configuration files
- Add unit tests
- Improve word detection algorithms

## 📄 License

MIT License - feel free to use this project for learning and development.

---

**Built with ❤️ using TypeScript and Typo.js**
