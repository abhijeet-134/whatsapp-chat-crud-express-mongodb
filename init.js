const mongoose = require("mongoose");
const Chat = require("./model/chat.js"); 


main().then(() => {
    console.log("Connection Successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');

}


let allChats = [
  {
    from: "Neha",
    to: "Preeti",
    msg: "Send me the notes for the exam.",
    created_at: new Date(),
  },
  {
    from: "Abhijeet",
    to: "Dnyandip",
    msg: "Have you completed the DBMS assignment?",
    created_at: new Date(),
  },
  {
    from: "Rahul",
    to: "Sneha",
    msg: "Let's meet in the library at 4 PM.",
    created_at: new Date(),
  },
  {
    from: "Aman",
    to: "Priya",
    msg: "Can you share today's lecture PDF?",
    created_at: new Date(),
  },
  {
    from: "Riya",
    to: "Karan",
    msg: "Happy Birthday! Have a great day!",
    created_at: new Date(),
  },
  {
    from: "Vikram",
    to: "Anjali",
    msg: "I'm running 10 minutes late.",
    created_at: new Date(),
  },
  {
    from: "Pooja",
    to: "Rohit",
    msg: "Did you submit the project report?",
    created_at: new Date(),
  },
  {
    from: "Dnyandip",
    to: "Abhijeet",
    msg: "Yes, I'll send it in 5 minutes.",
    created_at: new Date(),
  },
  {
    from: "Meera",
    to: "Arjun",
    msg: "The placement session starts at 2 PM.",
    created_at: new Date(),
  },
  {
    from: "Sahil",
    to: "Neha",
    msg: "Thanks for helping me with Java DSA.",
    created_at: new Date(),
  },
];


Chat.insertMany(allChats);

