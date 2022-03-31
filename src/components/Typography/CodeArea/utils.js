const reservedWords = [
  "const",
  "let",
  "var",
  "import",
  "from",
  "infinity",
  "using",
  "namespace",
  "#include",
  "#define",
];

const htmlWords = [
  "class",
  "ms",
  "keyword",
  "span",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "div",
  "body",
  "html",
];

const types = ["boolean", "byte", "int", "float", "double", "long", "string"];
const chars = [";", ",", "(", ")", "{", "}", "[", "]"];

const spanReservedWord = '<span class="ms-keyword">[word]</span>';
const spanTypes = '<span class="ms-type">[word]</span>';
const spanChars = '<span class="ms-string">[word]</span>';

const spans = [
  '<span class="ms-number">[word]</span>', // numbers
  '<span class="ms-string">[word]</span>', // strings
  '<span class="ms-var>[word]</span>', // vars
];
const RegularExpressions = [
  /\s?(\d)+\s?/g, // numbers
  /\s?('|"|`).+('|"|`)\s?/g, // strings
  /\w+\d?/g, // vars
];

const IsAVar = (text) => {
  if (reservedWords.indexOf(text) >= 0) return false;
  if (types.indexOf(text) >= 0) return false;
  return true;
};

const RegExpParser = (text, regExp, aux = undefined) => {
  let newText = text;
  let newAux = aux;
  const regex = RegularExpressions[regExp];
  let match;

  while ((match = regex.exec(text)) !== null) {
    // This is necessary to avoid infinite loops with zero-width matches
    if (match.index === regex.lastIndex) {
      regex.lastIndex++;
    }
    console.log(aux);
    if (aux === undefined)
      newText = newText.replace(
        match[0],
        spans[regExp].replace("[word]", match[0])
      );
    else
      aux = !IsAVar(match[0])
        ? aux.replace(match[0], spans[regExp].replace("[word]", match[0]))
        : aux;
  }
  if (!aux) return newText;
  else return aux;
};

const ParseLanguage = (data) => {
  let parsedData = data;
  // reserveWords
  reservedWords.forEach((item, index) => {
    parsedData = parsedData.replaceAll(
      item,
      spanReservedWord.replace("[word]", item)
    );
  });
  // types
  types.forEach((item, index) => {
    parsedData = parsedData.replaceAll(item, spanTypes.replace("[word]", item));
  });
  // chars
  chars.forEach((item, index) => {
    parsedData = parsedData.replaceAll(item, spanChars.replace("[word]", item));
  });
  parsedData = RegExpParser(parsedData, 0); // numbers
  let aux = RegExpParser(data, 1, parsedData);
  console.log(aux);
  parsedData = aux === data ? parsedData : aux; // strings
  console.log(parsedData);
  parsedData = RegExpParser(data, 2, parsedData); // vars
  // numbers
  return parsedData;
};

export default ParseLanguage;
