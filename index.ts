import fs from "fs";

import Typo from "typo-js"
var dictionary = new Typo("en_US", undefined, undefined, { dictionaryPath: "node_modules/typo-js/dictionaries" })

const fileName = process.argv[2]

if(!fileName){
    console.error("Usage: spell-checker <file-to-check.extension>");
    process.exit(1);
}

const encoding = 'utf8'

var content : string;
var corrections = new Map<string, { lines: number[]; suggestions: string[] }>();
fs.readFile(fileName, encoding, (err: NodeJS.ErrnoException | null, data: string) => {
    if (err) {
        console.log("Error while reading the content of the file", err);
        return;
    }
    
    const lines = data.split('\n')
    
    lines.forEach((line, lineIndex)=>{
        //split the entire string line by spaces and filter them by indivisual words and trim them(remove spaces from left and right of the words if there any)
        const words = line.split(/\s+/).filter((word)=>word.trim() !== '')
        words.forEach((word)=>{
            //remove chars not in the range [a-zA-Z0-9_])
            const cleanWord = word.replace(/[^\w]/g, '');
            if(cleanWord && !dictionary.check(cleanWord)){
                const lineNumber = lineIndex+1;
                const suggestions = dictionary.suggest(cleanWord);
                if(corrections.has(cleanWord)){
                    corrections.get(cleanWord)!.lines.push(lineNumber)
                }
                else{
                    corrections.set(cleanWord, {
                        lines: [lineNumber],
                        suggestions: suggestions.slice(0, 3)
                    })
                }
            }
        })
    })
    if(!corrections.size){
        console.log("No errors, everything is good")
    }
    else{
        corrections.forEach((correctionInfo, word)=>{
            console.log(`'${word}' is misspelled on line(s): ${correctionInfo.lines.join(', ')}. Suggestions: ${correctionInfo.suggestions.join(', ')}`)
        })
    }
});