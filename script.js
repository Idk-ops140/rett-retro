const codeSnippet = [
    "function helloWorld() {",
    "    console.log('Hello, World!');",
    "}",
    "",
    "for (let i = 0; i < 5; i++) {",
    "    helloWorld();",
    "}",
    "",
    "let x = [1, 2, 3, 4, 5];",
    "x.forEach(num => console.log(num));",
    "",
    "// This is a comment line",
    "console.log('This is looping...');"
];

let index = 0;

function loopCode() {
    const codeElement = document.getElementById("code-output");
    codeElement.textContent = codeSnippet[index];
    index = (index + 1) % codeSnippet.length; // Loop through code snippets
}

setInterval(loopCode, 2000); // Change code every 2 seconds
