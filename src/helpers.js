export function cleanText(text) {
    return text
        .replaceAll("&quot;", '"')
        .replaceAll("&#039;", "'")
        .replaceAll("&rsquo;", "'")
        .replaceAll("&eacute;", "é")
        .replaceAll("&amp;", "&");
}