const X = document.querySelector("#person-X");
const Y = document.querySelector("#person-Y");

Y.innerText = "Friend"

const chatheader    = document.querySelector(".chat-header");
const chatContainer = document.querySelector(".chat-container");
const messageForm   = document.querySelector(".message-form");
const ChatInput   = document.querySelector(".chat-input");
const Clearbtn   = document.querySelector("#clear-chat");



const ChatElement = (message) => `
   <div class="message ${message.sender === "Subhan" ? 'blue-bg' : 'grey-bg'}">
                <div class="message-sender">${message.sender}</div>
                <div class=" message-text">${message.text}</div>
                <div class="timestamp">${message.timestamp}</div>
            </div>
` 

let messagesender = 'Subhan'

const UpdateSender = (Name) => {
    messagesender = Name
    chatheader.innerText = `${messagesender} Chatting... `

    if(Name === 'Subhan')
    {
        X.classList.add('active-person')
        Y.classList.remove('active-person')
    }
    if(Name === 'Friend')
        {
            Y.classList.add('active-person')
            X.classList.remove('active-person')
        }

        ChatInput.focus()
    
}

X.onclick = () => UpdateSender('Subhan')
Y.onclick = () => UpdateSender('Friend')


const SendMessage = (a) => {
    a.preventDefault()
 
    const timestamp = new Date().toLocaleString( 'en-US' , {hour : 'numeric' , minute : 'numeric' , hour12 : true})

    const message = {
        sender : messagesender,
        text: ChatInput.value,
        timestamp,
    }

    chatContainer.innerHTML += ChatElement(message)
    messageForm.reset()
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

messageForm.addEventListener('submit' , SendMessage)


Clearbtn.addEventListener('click' , () => {
    chatContainer.innerHTML = '';
})




// let ActiveSender = "Subhan"

// function UpdateSender()
// {
//     if(ActiveSender === "Subhan") 
//     {
//         ActiveSender = "Friend"
//     }
//     if(ActiveSender === "Friend") 
//     {
//         ActiveSender = "Subhan"
//     }
// }


