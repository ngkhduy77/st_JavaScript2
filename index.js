const html = document.body.innerHTML;
// g = global
// i = case-insensitive
const replacedHtml = html.replace(/lorem/gi, "JS");
document.body.innerHTML = replacedHtml;