import { useState } from "react";
import "./Chatbot.css";

function Chatbot() {

    const [open, setOpen] = useState(false);
    const [messages, setMessages] = useState([
        {
            type: "bot",
            text: "Hi! I'm Vrushabh's portfolio assistant. Ask me about his skills, projects, education or contact details."
        }
    ]);
    const [input, setInput] = useState("");

    const getResponse = (message) => {

        const text = message.toLowerCase();

        if (text.includes("about") || text.includes("who")) {
            return "I'm Vrushabh, a frontend developer focused on building clean, responsive and user-friendly web applications.";
        }

        if (text.includes("skill") || text.includes("technology")) {
            return "Vrushabh works with HTML, CSS, Bootstrap, JavaScript, React, jQuery, Redux and Git & GitHub.";
        }

        if (text.includes("project")) {
            return "He has built projects including Fashion Blog, Loan Day, Bootstrap templates, To-Do List, Calculator, Digital Clock and Guess the Number game.";
        }

        if (text.includes("education") || text.includes("study")) {
            return "He completed BBA-CA with A Grade and is currently pursuing MCA through distance learning.";
        }

        if (text.includes("contact") || text.includes("email")) {
            return "You can contact Vrushabh through the contact section or email him at vrushabhhdhindale@gmail.com.";
        }

        if (text.includes("work") || text.includes("hire")) {
            return "Yes, Vrushabh is open to new opportunities and exciting frontend development projects.";
        }

        return "I can help with questions about Vrushabh's about section, skills, projects, education or contact details.";
    };

    const sendMessage = (message = input) => {

        if (message.trim() === "") return;

        const userMessage = {
            type: "user",
            text: message
        };

        const botMessage = {
            type: "bot",
            text: getResponse(message)
        };

        setMessages((prev) => [
            ...prev,
            userMessage,
            botMessage
        ]);

        setInput("");
    };

    return (
        <div className="chatbot">

            {open && (
                <div className="chat-window">

                    <div className="chat-header">

                        <div>
                            <h3>Portfolio Assistant</h3>
                            <span>Ask me anything about Vrushabh</span>
                        </div>

                        <button
                            onClick={() => setOpen(false)}
                        >
                            <i className="fa-solid fa-xmark"></i>
                        </button>

                    </div>

                    <div className="chat-messages">

                        {messages.map((message, index) => (

                            <div
                                key={index}
                                className={`chat-message ${message.type}`}
                            >
                                {message.text}
                            </div>

                        ))}

                    </div>

                    <div className="quick-questions">

                        <button onClick={() => sendMessage("About")}>
                            About
                        </button>

                        <button onClick={() => sendMessage("Skills")}>
                            Skills
                        </button>

                        <button onClick={() => sendMessage("Projects")}>
                            Projects
                        </button>

                        <button onClick={() => sendMessage("Education")}>
                            Education
                        </button>

                        <button onClick={() => sendMessage("Contact")}>
                            Contact
                        </button>

                    </div>

                    <div className="chat-input">

                        <input
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    sendMessage();
                                }
                            }}
                            placeholder="Type a message..."
                        />

                        <button
                            onClick={() => sendMessage()}
                        >
                            <i className="fa-solid fa-paper-plane"></i>
                        </button>

                    </div>

                </div>
            )}

            <button
                className="chat-toggle"
                onClick={() => setOpen(!open)}
            >
                <i className="fa-solid fa-comment-dots"></i>
            </button>

        </div>
    );
}

export default Chatbot;