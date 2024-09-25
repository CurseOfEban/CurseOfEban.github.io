// Initialize BotUI
var botui = new BotUI('bot-app');

// Start the conversation
botui.message.add({
  content: "Hello! I'm your portfolio assistant. How can I help you today?",
  delay: 1000
}).then(function () {
  return botui.action.button({
    delay: 1500,
    action: [
      { text: 'Tell me about your projects', value: 'projects' },
      { text: 'What are your skills?', value: 'skills' },
      { text: 'How to contact you?', value: 'contact' }
    ]
  });
}).then(function (res) {
  if (res.value === 'projects') {
    showProjects();
  } else if (res.value === 'skills') {
    showSkills();
  } else if (res.value === 'contact') {
    showContactInfo();
  }
});

// Functions to handle different answers

function showProjects() {
  botui.message.add({
    content: "Here are some of my top projects:",
    delay: 1000
  }).then(function () {
    botui.message.add({
      content: "1. [Portfolio Website](https://github.com/your-repo)\n2. [AI Chatbot Project](https://github.com/your-repo)\n3. [Machine Learning App](https://github.com/your-repo)",
      delay: 2000
    });
  });
}

function showSkills() {
  botui.message.add({
    content: "Here are some of the technologies I work with:",
    delay: 1000
  }).then(function () {
    botui.message.add({
      content: "- HTML, CSS, JavaScript\n- React, Vue\n- Python, Node.js\n- Machine Learning, AI",
      delay: 2000
    });
  });
}

function showContactInfo() {
  botui.message.add({
    content: "You can contact me at:",
    delay: 1000
  }).then(function () {
    botui.message.add({
      content: "Email: your-email@example.com\nLinkedIn: [Your Profile](https://linkedin.com/in/your-profile)",
      delay: 2000
    });
  });
}
