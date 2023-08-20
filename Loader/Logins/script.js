const form = document.getElementById("login-form");
const errorMessage = document.getElementById("error-message");
const welcomeMessage = document.getElementById("welcome-message");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Define valid username and password combinations
  const validCredentials = [
    // ... (your existing credentials here)
    { username: "guide", password: "guide" },
    { username: "h.o.d", password: "h.o.d" },
    { username: "admin2", password: "admin2" },
    { username: "admin3", password: "admin3" },
    { username: "Kallesh", password: "admin1" },
    { username: "Dhakshatha", password: "member1" },
    { username: "Deepashree", password: "member2" },
    { username: "Kalyani", password: "member3" },
  ];

  let isValidCredential = false;

  for (const cred of validCredentials) {
    if (username === cred.username && password === cred.password) {
      isValidCredential = true;
      break;
    }
  }

  if (username === "" || password === "") {
    errorMessage.textContent = "Username and password are required.";
    speak("Username and password are required.");
  } else if (!isValidCredential) {
    errorMessage.textContent = "Invalid username or password.";
    speak("Invalid username or password.");
  } 
  else {
    errorMessage.textContent = ""; // Clear error message
    console.log("Login successful!");

    // Show the welcome message
    welcomeMessage.textContent = `Welcome ${username}!`;

    // Speak the welcome message
    speak(`Welcome, ${username}! Please update today's status.`);

    // Redirect the user to different pages based on their credentials
    if (username === "Dhakshatha" && password === "member1") {
      window.location.href = "Dhakshatha/index.html";
    } else if (username === "Deepashree" && password === "member2") {
      window.location.href = "Deepashree/index.html";
    } else if (username === "Kalyani" && password === "member3") {
      window.location.href = "Kalyani/index.html";
    } else {
      // Default redirect if no specific condition matches
      window.location.href = "home.html";
    }
  }
});

function speak(message) {
  const synthesis = window.speechSynthesis;
  const speech = new SpeechSynthesisUtterance(message);
  synthesis.speak(speech);
}
