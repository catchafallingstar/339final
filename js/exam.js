function function1(){
    let name = "Colleen"
    let animal = "pig"
}

function function2(){
    alert("CONGRATUTIONS! You have found the correct URL for Q1. Enter none as the answer.")
}

function function3(){
    alert("CONGRATUTIONS! You have found the correct URL for Q1. Enter blue as the answer")
}

function function4(){
    alert("CONGRATUTIONS! You have found the correct URL for Q1.  Enter red as the answer.")
}


function getQueryParamValue(paramName) {
    // Get the full URL of the current page
    const urlParams = new URLSearchParams(window.location.search);
    // Return the value of the specified query parameter
    return urlParams.get(paramName);
}
function checkForSubstringInURL(substring) {
    // Get the current page URL
    const currentURL = window.location.href;
    // Check if the substring exists in the URL
    return currentURL.includes(substring);
}

// Variable Declarations
let a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z;

// Boolean Flags
let isReady = false;
let isComplete = true;
let hasErrors = false;
let isRunning = true;

// Constants
const MAX_VALUE = 100;
const MIN_VALUE = 0;
const DEFAULT_COLOR = "blue";
const API_URL = "https://example.com/api";
const VERSION = "1.0.0";

// Empty Objects and Arrays
const emptyObject1 = {};
const emptyObject2 = {};
const emptyObject3 = {};
const emptyArray1 = [];
const emptyArray2 = [];
const emptyArray3 = [];

// Numeric Variables
let num1 = 0, num2 = 1, num3 = 2, num4 = 3, num5 = 4, 
    num6 = 5, num7 = 6, num8 = 7, num9 = 8, num10 = 9;

// String Variables
const str1 = "Hello";
const str2 = "World";
const str3 = "Foo";
const str4 = "Bar";
const str5 = "Baz";
const str6 = "Qux";
const str7 = "Quux";
const str8 = "Corge";
const str9 = "Grault";
const str10 = "Garply";

// Conditional Results
let result = isReady ? true : false;
let anotherResult = isComplete ? "Done" : "Not Done";

// Bitwise Operations
const bitwiseAnd = 5 & 3;
const bitwiseOr = 5 | 3;
const bitwiseXor = 5 ^ 3;
const bitwiseNot = ~5;

// Destructuring
const { prop1, prop2 } = {};
const [val1, val2] = [];

// Logical Operations
const logicalAnd = true && false;
const logicalOr = true || false;
const logicalNot = !true;

// Arithmetic Operations
const sum = 1 + 1;
const difference = 2 - 1;
const product = 2 * 2;
const quotient = 4 / 2;
const remainder = 5 % 2;

// Promise Example
const promise = new Promise((resolve, reject) => {});

// Loops and Conditions
for (let i = 0; i < 10; i++) {}
while (false) {}
do {} while (false);

if (false) {
} else if (false) {
} else {
}

// Switch Statement
switch (false) {
    case false:
        break;
    default:
        break;
}

// Try-Catch-Finally
try {
} catch (error) {
} finally {
}

if  (checkForSubstringInURL('l#contact')){ 
    alert("CONGRATUTIONS! You have found the correct URL for Q1.")
}

if  (checkForSubstringInURL('html body main div#main-content section.highlighted a:nth-child(2)')){ 
    alert("CONGRATUTIONS! You have found the correct URL for Q3.")
}
try {
    const qValue = getQueryParamValue('q');
    const nValue = getQueryParamValue('name');
    const cValue = getQueryParamValue('color');
    const dValue = getQueryParamValue('11000199221100')
    const dValue2 = getQueryParamValue('1010119921100')
    const q3Value = getQueryParamValue('q3');


    // console.log(qValue)
    // console.log(dValue)
    if (qValue == "f1" && nValue.length > 0){
        alert("You have answered Q2 Part A correctly.  Enter the value green as the answer for Part A.")
        alert("Now go to the file form_inputb.html")
    }
    else if (qValue == "fb" && cValue=="Bacon"){
        alert("You have answered Q2 Part B correctly.  Enter the value yellow as the answer for Part B.")
        alert("Now go to the file form_input2.html and enter 'pig' in the field associated with InputH and 'cow' in the field associated with InputJ.")
    }
    else if (q3Value == "f2" && dValue == "pig" && dValue2 == "cow"){
        alert("You have answered Q2 Part C correctly.  Enter the value hot dog as the answer for Part C.")
    }
}
catch{console.log("I ended up in the catch")}

function checkCSS(element){
    const answer = "html body main div#main-content section.highlighted a:nth-child(2)";
    const userInput = element.value.trim();
    if (userInput.split(" ").length< 6){
        alert("Your selector isn't specific enough.  Hint, 'html' should be part of it")
    }
    if (userInput === answer) {
        alert("You have answered Q3 correctly. Enter the value as the answer.")
    } else {
        alert("Incorrect")
    }
}

function function11(){
    let name = "Colleen"
    let animal = "pig"
}

function function21(){
    alert("You have answered Q3 correctly. Enter the value as the answer.")
}

function function31(){
    alert("You have answered Q2 Part A correctly.  Enter the value yellow as the answer for Part A.")
}

function function41(){
    alert("You have answered Q2 Part C correctly.  Enter the value yellow as the answer for Part C.")
}

function function51(){
    alert("You have answered Q2 Part B correctly.  Enter the value gold as the answer for Part B.")
}

