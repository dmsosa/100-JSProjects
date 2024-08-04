#!/usr/bin/env node

const { existsSync, writeFile, appendFile, readFile } = require("fs");

const randPage = Math.floor(Math.random() * 15)
const url = `https://api.quotable.io/quotes?limit=150&page=${randPage}`;

let pageObject = {
    number: "",
    results: [],
}

let quoteObject = {
    text: "",
    author: "",
    translatedText: ""
}

let quoteList;

 
if (!existsSync("./quotes.json")) {
    writeFile("./quotes.json", "", (error) => {
        if (error) {
            console.log(error.message);
        } else {
            console.log("quotes.json erfolgreich gerstellt!")
        }
    })
}


readFile("./quotes.json", function(error, quoteListData) {
    if (error) {
        throw error;
    }
    if (quoteListData.byteLength > 0) {
        quoteList = JSON.parse(quoteListData);
    } else {
        quoteList = {
            pages: [],
        }
    }
})

fetch(url).then((res) => res.json()).then((data) => {


    for (let i = 0 ; i < quoteList.pages.length ; i++) {
        if (quoteList.pages[i].number === data.page) {
            console.log("Dieses Seite war schon gespeichert!");
            return;
        } 
    }

    console.log(`${data.count} Neuen Zitaten gefunden!\nSeite nummer: ${data.page}`);

    pageObject.number = data.page;
    for (let i = 0 ; i < data.results.length ; i++) {
        
        let quote = data.results[i];

        quoteObject.text =  quote.content;
        quoteObject.author =  quote.author;
        
        
        pageObject.results.push(JSON.stringify(quoteObject));
    }
    quoteList.pages.push(pageObject);

    writeFile("./quotes.json", JSON.stringify(quoteList), (error) => {
        if (error) {
            console.log(error.message);
        } else {
            console.log("quotes.json aktualisiert werden!")
        }
    })
})

