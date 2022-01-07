document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.getElementById("input");
    inputField.addEventListener("keydown", (e) => {
      if (e.code === "Enter") {
        let input = inputField.value;
        inputField.value = "";
        output(input);
      }
    });
  });

  function output(input) {
    let product;
    let text = input.toLowerCase().replace(/[^\w\s\d]/gi, "");
    text = text
      .replace(/ a /g, " ")
      .replace(/whats/g, "what is")
      .replace(/please /g, "")
      .replace(/ please/g, "");

      
    if (compare(prompts, replies, text)) {
      product = compare(prompts, replies, text);
    } 
    else {
      product = unknownInput[Math.floor(Math.random() * unknownInput.length)];
    }
   
    //update  DOM
    addChat(input, product);
  }


function compare(promptsArray, repliesArray, string) {
    let reply;
    for (let i = 0; i < promptsArray.length; i++) {
    for (let j = 0; j < promptsArray[i].length; j++) {
        if (promptsArray[i] === string) {
            let replies = repliesArray[i];
            reply = replies[Math.floor(Math.random() * replies.length)];
          
            }
        }
    }
    return reply;
}

function addChat(input, product) {
    const messagesContainer = document.getElementById("messages");
    
    let userDiv = document.createElement("div");
    userDiv.id = "user";
    userDiv.className = "user response";
    userDiv.innerHTML = `${input}`;
    messagesContainer.appendChild(userDiv);
   
    let botDiv = document.createElement("div");
    let botText = document.createElement("span");
    botDiv.id = "bot";
    botDiv.className = "bot response";
    botText.innerText = "Typing...";
    botDiv.appendChild(botText);
    messagesContainer.appendChild(botDiv);
    // Keep messages at most recent
  messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight;
   
    setTimeout(() => {
      botText.innerText = `${product}`;
    }, 2000
    )
 }






// const inputField = document.getElementById("input")
// inputField.addEventListener("keydown", function(e) {
//     if (e.code == "Enter") {
//         let input = inputField.value;
//         inputField.value = "";
//         output(input);
//     }
// });