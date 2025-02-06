import { franc } from 'franc';
import langs from 'langs';
import colors from 'colors';

if (!process.argv[2]) {
    console.log(colors.red("Please provide a text sample as an argument!"));
    process.exit(1);
}

const input = process.argv[2];
const langCode = franc(input);

if (langCode === 'und') {
    console.log(colors.red("Sorry, couldn't figure it out! Try with a larger sample text."));
} else {
    const language = langs.where("3", langCode);
    if (language) {
        console.log(colors.rainbow(`Detected Language: ${language.name}`));
    } else {
        console.log(colors.red(`Sorry, no language found for code: ${langCode}`));
    }
}