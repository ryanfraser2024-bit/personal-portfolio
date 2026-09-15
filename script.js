// Chatbot elements
const chatButton = document.getElementById("chat-button");
const chatbot = document.getElementById("chatbot");
const closeChatButton = document.getElementById("close-chat");
const chatForm = document.getElementById("chat-form");
const chatInput = document.getElementById("chat-input");
const chatMessages = document.getElementById("chat-messages");

// Open chatbot
chatButton.addEventListener("click", function () {
    chatbot.classList.remove("hidden");
    chatInput.focus();
});

// Close chatbot
closeChatButton.addEventListener("click", function () {
    chatbot.classList.add("hidden");
});

// Display a chatbot message
function addMessage(message, className) {
    const messageElement = document.createElement("p");

    messageElement.textContent = message;
    messageElement.classList.add(className);

    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Determine the chatbot response
function getBotResponse(question) {
    const userQuestion = question.toLowerCase();

    if (
        userQuestion.includes("hello") ||
        userQuestion.includes("hi") ||
        userQuestion.includes("hey")
    ) {
        return "Hello! Ask me about Ryan's skills, education, experience, or projects.";
    }

    if (
        userQuestion.includes("skill") ||
        userQuestion.includes("technology") ||
        userQuestion.includes("programming")
    ) {
        return "Ryan's skills include HTML, CSS, JavaScript, PHP, SQL, MySQL, GitHub, Wireshark, Windows Server 2022, Hyper-V, Active Directory, and Group Policy.";
    }

    if (
        userQuestion.includes("education") ||
        userQuestion.includes("school") ||
        userQuestion.includes("college") ||
        userQuestion.includes("graduate")
    ) {
        return "Ryan is completing a Bachelor of Science in Computer Technology at Bowie State University and expects to graduate in December 2026.";
    }

    if (
        userQuestion.includes("credit card") ||
        userQuestion.includes("payment") ||
        userQuestion.includes("verification") ||
        userQuestion.includes("card number") ||
        userQuestion.includes("expiration")
    ) {
        return "Ryan developed a Credit Card Payment Verification System using HTML, CSS, and JavaScript. The system checks required fields, card-number formatting, expiration dates, and security-code entries while providing clear verification messages.";
    }

    if (
        userQuestion.includes("wireshark") ||
        userQuestion.includes("network") ||
        userQuestion.includes("cybersecurity") ||
        userQuestion.includes("security")
    ) {
        return "Ryan used Wireshark to capture and analyze DNS, HTTP, HTTPS, TCP, and UDP traffic and document potential security concerns.";
    }

    if (
        userQuestion.includes("server") ||
        userQuestion.includes("hyper-v") ||
        userQuestion.includes("active directory") ||
        userQuestion.includes("group policy")
    ) {
        return "Ryan completed Windows Server 2022 labs involving Hyper-V, virtual machines, Active Directory tools, file-sharing permissions, and Group Policy.";
    }

    if (
        userQuestion.includes("project") ||
        userQuestion.includes("work")
    ) {
        return "Ryan's featured projects are a Credit Card Payment Verification System, Wireshark Packet Inspection, and a Windows Server Administration and Hyper-V lab series.";
    }

    if (
        userQuestion.includes("experience") ||
        userQuestion.includes("job") ||
        userQuestion.includes("employment")
    ) {
        return "Ryan works as a substitute teacher and also has experience as a youth mentor, nanny, and seasonal fulfillment associate.";
    }

    if (userQuestion.includes("resume")) {
        return "You can view or download Ryan's resume from the Resume section.";
    }

    if (
        userQuestion.includes("contact") ||
        userQuestion.includes("email")
    ) {
        return "You can contact Ryan by completing the form in the Contact section.";
    }

    if (
        userQuestion.includes("github") ||
        userQuestion.includes("code")
    ) {
        return "Use the GitHub buttons to view Ryan's profile and portfolio source code.";
    }

    if (
        userQuestion.includes("bye") ||
        userQuestion.includes("goodbye")
    ) {
        return "Thank you for visiting Ryan's portfolio!";
    }

    return "I can answer questions about Ryan's education, skills, experience, resume, GitHub, or featured projects.";
}

// Submit a chatbot question
chatForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const question = chatInput.value.trim();

    if (question === "") {
        return;
    }

    addMessage(question, "user-message");
    chatInput.value = "";

    setTimeout(function () {
        const response = getBotResponse(question);
        addMessage(response, "bot-message");
    }, 350);
});

// Contact-form elements
const contactForm = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

// Create an email when the contact form is submitted
contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const subject = encodeURIComponent(
        "Portfolio message from " + name
    );

    const body = encodeURIComponent(
        message +
        "\n\nFrom: " +
        name +
        "\nReply email: " +
        email
    );

    formMessage.textContent =
        "Your email application is opening. Review the message and press Send.";

    window.location.href =
        "mailto:ryanfraser2024@gmail.com?subject=" +
        subject +
        "&body=" +
        body;
});
