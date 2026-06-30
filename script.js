const chatBox = document.getElementById("chatBox");
const userInput = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");
const clearBtn = document.getElementById("clearBtn");

// FAQ Database
const faqs = [
    {
        keywords:["html"],
        answer:"HTML (HyperText Markup Language) is used to create the structure of web pages."
    },
    {
        keywords:["css"],
        answer:"CSS (Cascading Style Sheets) is used to style web pages."
    },
    {
        keywords:["javascript","js"],
        answer:"JavaScript is used to add interactivity to websites."
    },
    {
        keywords:["python"],
        answer:"Python is a popular programming language used in AI, web development, automation and data science."
    },
    {
        keywords:["java"],
        answer:"Java is an object-oriented programming language used for desktop, web and Android development."
    },
    {
        keywords:["ai","artificial intelligence"],
        answer:"Artificial Intelligence enables computers to perform tasks that normally require human intelligence."
    },
    {
        keywords:["machine learning","ml"],
        answer:"Machine Learning is a branch of AI where systems learn from data."
    },
    {
        keywords:["deep learning"],
        answer:"Deep Learning is a subset of Machine Learning based on neural networks."
    },
    {
        keywords:["git"],
        answer:"Git is a version control system used to manage source code."
    },
    {
        keywords:["github"],
        answer:"GitHub is a cloud platform for hosting Git repositories."
    },
    {
        keywords:["sql","database"],
        answer:"SQL is used to manage and query relational databases."
    },
    {
        keywords:["api"],
        answer:"An API allows different software applications to communicate with each other."
    },
    {
        keywords:["frontend"],
        answer:"Frontend development focuses on the user interface using HTML, CSS and JavaScript."
    },
    {
        keywords:["backend"],
        answer:"Backend development handles server-side logic, databases and APIs."
    },
    {
        keywords:["react"],
        answer:"React is a JavaScript library used to build modern user interfaces."
    }
];

// Add Message
function addMessage(text,type){

    const message=document.createElement("div");
    message.className=`message ${type}`;

    if(type==="bot"){

        message.innerHTML=`
        <div class="icon">🤖</div>
        <div class="text">${text}</div>
        `;

    }else{

        message.innerHTML=`
        <div class="text">${text}</div>
        `;

    }

    chatBox.appendChild(message);

    chatBox.scrollTop=chatBox.scrollHeight;

}

// Find Best Answer
function getAnswer(question){

    question=question.toLowerCase();

    for(let item of faqs){

        for(let key of item.keywords){

            if(question.includes(key)){

                return item.answer;

            }

        }

    }

    return "Sorry 😔 I don't know the answer to that yet. Please ask another programming-related question.";

}

// Send Message
function sendMessage(){

    let question=userInput.value.trim();

    if(question==="") return;

    addMessage(question,"user");

    userInput.value="";

    // Typing effect
    setTimeout(()=>{

        const answer=getAnswer(question);

        addMessage(answer,"bot");

    },800);

}

// Button Click
sendBtn.addEventListener("click",sendMessage);

// Enter Key
userInput.addEventListener("keypress",function(e){

    if(e.key==="Enter"){

        sendMessage();

    }

});

// Clear Chat
clearBtn.addEventListener("click",function(){

    chatBox.innerHTML=`
    <div class="bot message">
        <div class="icon">🤖</div>
        <div class="text">
            Hello 👋<br>
            Ask me any programming question.
        </div>
    </div>
    `;

});