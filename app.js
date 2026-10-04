#!/usr/bin/env node
import fs from "node:fs/promises"

const filePath = process.argv[2]

const word = process.argv[3]

if (!filePath) {
    console.warn("File path is required as a Argument")
    process.exit(1)
}

const content = await fs.readFile(filePath, "utf-8")

const wordArray = content?.split(/[\W+]/).filter((w) => w)

let wordCount = {}

if (word) {
    const filterArray = wordArray.filter((w) => word === w)
    wordCount[word] = filterArray?.length
} else {
    wordCount = wordArray.reduce((acc, cur) => {
        if (!acc[cur]) {
            acc[cur] = 1
        } else {
            acc[cur]++
        }
        return acc
    }, {})
}

console.log("Word Count:", wordCount);
