import englishTranslations from "./englishTranslations.json"
export default (language) => {
    switch (language) {
        case "en-US":
            return englishTranslations
        case "fr":
            //return frenchTranslations
            break;

        default:
            break;
    }
}