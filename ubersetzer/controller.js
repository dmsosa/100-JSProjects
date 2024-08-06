const deepApi = "https://api-free.deepl.com/v2/translate";
const apiKey = "7c200091-625e-4ec1-98b0-662b4a87e81f:fx";

const translateController = async (req, res, next) => {
    try {
        const { text, targetLang } = req.body;

        if (!text) {
            throw new Error("Keine Nachricht ")
        }
        const body = JSON.stringify({
            "text" : [text],
            "target_lang": targetLang
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
        fetch(deepApi, config).then((resp) => resp.json())
        .then((data) => { 
            console.log(data); 
            translatedText = data.translations[0].text;
            res.json({ translatedText });
        })
        .catch((error) => { throw(error) });
        
    } catch (error) {
        next(error);
    }
};

module.exports =  translateController ;