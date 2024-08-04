const deepApi = "https://api-free.deepl.com/v2/translate";
const apiKey = "7c200091-625e-4ec1-98b0-662b4a87e81f:fx";

const translateController = async (req, res, next) => {
    try {
        const { text, targetLang } = req;

        if (!text) {
            throw new Error("Keine Nachricht ")
        }
        const body = JSON.stringify({
            text : [text],
            targetLang: targetLang
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
        fetch(deepApi, config).then((res) => res.json())
        .then((data) => {
            translatedText = data.translations[0].text
        });
        res.status(200).json( { translatedText });
    } catch (error) {
        next(error);
    }
};

module.exports =  translateController ;