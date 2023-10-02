export function stringToNumberArray(string) {
    const parts = string.split(',');
    return parts.map((part) => parseFloat(part.trim()));
}