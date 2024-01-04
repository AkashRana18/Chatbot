document.addEventListener("DOMContentLoaded", function () {
  const userInputElement = document.getElementById("user-input");
  const chatMessagesElement = document.getElementById("chat-messages");

  function sendMessage() {
    const userMessage = userInputElement.value.trim();
    if (userMessage === "") return;

    appendMessage("user", userMessage);
    userInputElement.value = "";

    setTimeout(() => {
      const chatbotResponse = getChatbotResponse(userMessage);
      appendMessage("chatbot", chatbotResponse);
    }, 1000);
  }

  function appendMessage(sender, message) {
    const messageElement = document.createElement("div");
    messageElement.classList.add(sender);
    messageElement.textContent = message;
    chatMessagesElement.appendChild(messageElement);

    chatMessagesElement.scrollTop = chatMessagesElement.scrollHeight;
  }

  function getChatbotResponse(userMessage) {
    switch (userMessage.toLowerCase()) {
      case "hello":
      case "hlo":
      case "hi":
        return "Hi there! How can I assist you?";
      case "i want to know about sciastra":
      case "what is sciastra?":
      case "what is sciastra":
        return "SciAstra is a fantastic platform. How may I explain it to you?";
      case "how are you?":
      case "how are you":
        return "I'm doing great! How about you?";
      case "i'm doing great":
      case "i'm doing well":
      case "i am doing great":
      case "i am doing well":
      case "fine":
        return "That's great to hear!";
      case "what products or services does sciastra offer":
        return "SciAstra offers a wide range of products and services. How may I help you?";
      case "can you provide an overview of sciastra's mission and vision?":
        return "SciAstra's mission is to provide a fantastic platform for all your needs. How may I help you?";
      case "what are the benefits of using sciastra?":
        return "SciAstra offers a wide range of benefits. How may I help you?";
      default:
        return "For any further queries, please visit our website.";
    }
  }

  userInputElement.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      sendMessage();
    }
  });

  setTimeout(() => {
    appendMessage(
      "chatbot",
      "Hi, this is SciAstra bot! How can I help you today?"
    );
  }, 2000);


  window.sendMessage = sendMessage;
});
