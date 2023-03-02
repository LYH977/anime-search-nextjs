export const extractMatchedValues = (text: string, regex: RegExp) => {
  const matches = []
  let match
  while ((match = regex.exec(text)) !== null) {
    matches.push(match[1])
  }
  return matches
}
