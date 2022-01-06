document.addEventListener("DOMContentLoaded", () => {
document.querySelector("#input").addEventListener("keydown", function(e) {
    if (e.keyCode == "Enter") {
        console.log("Enter pressed");
    }
});
});

const inputField = document.getElementById("input")
inputField.addEventListener("keydown", function(e) {
    if (e.code == "Enter") {
        let input = inputField.value;
        inputField.value = "";
        output(input);
    }
});

function output()
{
      let text = input.toLowerCase().replace(/[^\w\s\d]/gi, "");    

     text = text
    .replace(/ a /g, " ")
    .replace(/whats/g, "what is")
    .replace(/please /g, "")
    .replace(/ please/g, "");
}



//User input into chatbot
const userInput = [
    ["Hi", "Hello"], //0
    ["How are you", "How are you doing"], //1
    ["What is up","What are you doing"], //2
    ["Are you human","who are you"], //3
    [], //4     
    [], //5     
    [], //6
    [], //7
    [], //8
    [] //9
];

//Bot answers to user input
const botResponses = [
    ["Hi there!","Hello"], //0
    ["I'm good, how are you?", "Great thanks, and you?"], //1
    ["Eagerly waiting to help you.","Standing by for support."], //2
    ["No, I am a support bot here to help you.","I am ArcBot, at your service."], //3
    [], //4
    [], //5
    [], //6
    [], //7
    [], //8
    [] //9

];

//Unknown user inputs
const unknownInput = [
    "Please try again or try contacting support at support@infinityarc.net"
];

function compare(userInputArray, botResponsesArray, string) {
    let item;
    for (let i = 0; i < userInputArray.length; i++) {
    for (let j = 0; j < userInputArray[i].length; j++) {
        if (userInputArray[i] == string) {
            let items = botResponsesArray[i];
            item = items[Math.floor(Math.random() * items.length)];

        }
    }
}
    return item;
}

function output(input) {
    let product;
    let text = input.toLowerCase().replace(/[^\w\s\d]/gi, "");
    text = text
      .replace(/ a /g, " ")
      .replace(/whats/g, "what is")
      .replace(/please /g, "")
      .replace(/ please/g, "");
   
    if (compare(userInput, botResponses, text)) {
      product = compare(userInput, botResponses, text);
    } 
    else {
      product = unknownInput[Math.floor(Math.random() * unknownInput.length)];
    }
   
    //update  DOM
    addChatEntry (input, product);
  }


function addChatEntry(input, product) {
    const messageContainer = document.getElementById("messages");

    let userDiv = document.createElement("div");
    userDiv.id = "user";
    userDiv.className = "user response";
    userDiv.innerHTML = `${input}`;
    messageContainer.appendChild(userDiv);

    let botDiv = document.createElement("div");
    botDiv.id = "bot";
    botDiv.className = "bot response";
    botDiv.innerText = "Typing...";
    botDiv.appendChild(botText);
    messagesContainer.appendChild(botDiv);

setTimeout(() => {
    botText.innerText = `${product}`;
    }, 2000); 
}

