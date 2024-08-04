#!/usr/bin/env node

const quoteList = require("./quotes.json");

const randInt = Math.floor(Math.random() * quoteList.pages.length);

const page = quoteList.pages[randInt];

console.log(`Seite nummer ${page.number} ubergesetzt werden...\n`);


var count = 0;
for (let i = 0; i < page.results.length ; i++ ) {
    let result = page.results[i];
    console.log(result);

    let translatedText = translate(result.text);

    result.translatedText = translatedText;

    console.log("text", translatedText);

}

async function translate(text) {
    const url = "https://api-free.deepl.com/v2/translate";
    const apiKey = "7c200091-625e-4ec1-98b0-662b4a87e81f:fx";

    const body = JSON.stringify({
        text : [text],
        targetLang: "ES"
    });

    const config = { 
        method: "POST", 
        headers: { 
            "Content-Type": "application/json", 
            "Authorization" : `DeepL-Auth-Key ${apiKey}`
        },
        body: body,
    }

    let translatedText;
    fetch(url, config).then((res) => res.json())
    .then((data) => {
        
        translatedText = data.translations[0].text
    });
    return translatedText;
    
}