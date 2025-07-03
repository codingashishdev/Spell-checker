import fs from "fs";
import Typo from "typo-js"

let dictionary = new Typo("en_US")

const fileName = process.argv[2]
const encoding = 'utf8'

let content : string[][];

fs.readFile(fileName, encoding, (err: NodeJS.ErrnoException | null, data: string) => {
    if (err) {
        console.log("Error while reading the content of the file", err);
        return;
    }
    content = data.split("\n").map(line => line.split(" "));
    content.map((line, index) => {
        line.map

        
        // dictionary.check(line[0])

        // console.log(`Line ${index + 1}: ${line.join(" ")}`);
    });
});
