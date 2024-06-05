function transformString(str) {
  const length = str.length;

  if (length % 15 === 0) {
    return ` str is divisible by 15 
        " ${reverseString(replaceWithAscii(str))} "`;
  } else if (length % 3 === 0) {
    return `string is divisible by 3
         "${reverseString(str)}"`;
  } else if (length % 5 === 0) {
    return `string is divisible by 5 
        " ${replaceWithAscii(str)}"`;
  } else {
    return str;
  }
}
function reverseString(str) {
  return str.split("").reverse().join("");
}
function replaceWithAscii(str) {
  return str
    .split("")
    .map((char) => char.charCodeAt(0))
    .join(" ");
}
