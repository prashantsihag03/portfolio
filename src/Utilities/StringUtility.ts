/**
 * This function truncates a given text by keeping provided maximum number of words,
 * truncating remaining words and adds 5 dots at the end of the text.
 * @param {string} text  The text that needs to be truncated.
 * @param {number} maxWords Maximum number of words to keep.
 * @returns {string} Truncated text
 */
export default function truncateText(text = '', maxWords: number): string {
  const newText: string = text.split(' ').splice(0, maxWords).join(' ')
  if (text.split(' ').length > maxWords) return newText + '....'
  return newText
}
