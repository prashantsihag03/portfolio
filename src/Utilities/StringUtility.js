
/**
 * This function truncates a given text by keeping provided maximum number of words,
 * truncating remaining words and adds 5 dots at the end of the text.
 * @param {String} text  The text that needs to be truncated.
 * @param {Number} maxWords Maximum number of words to keep.
 * @returns {String} Truncated text
 */
export default function truncateText(text="", maxWords) {
    const newText = text.split(" ").splice(0,maxWords).join(" ");
    if (text.split(" ").length > maxWords) return newText + '....';
    return newText;
}