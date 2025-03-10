import normalizeString from './normalize'

// convert search input string into an array of regex
export default function convertToStartWordRegex(searchInput: string): RegExp[] {
    let textArray = normalizeString(searchInput).split(' ')
    return textArray.map((text) => new RegExp(String.raw`^${text}`))
  }