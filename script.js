const BLACKLISTED_KEY_CODES = [ 38 ];
const COMMANDS = {
  ls:
    'Supported commands: <span class="code">whoami</span>, <span class="code">experience</span>, <span class="code">education</span>, <span class="code">skills</span>, <span class="code">certifications</span>, <span class="code">contact</span>',
  whoami:
    "Hello I'm Manish Saini, Final year student pursuing Bachelor's degree in Computer Science and engineering and I hold Ehtical Hacking Essentials (EHE). I am well-equipped to identify and analyze potential security threats, vulnerabilites. I enjoy exploring TryHackMe, Bug Hunting, and participatie in CTF's to enhance my knowledge. I am excited to continue leveraging my skills and experience to help organizations stay ahead of potential cyber threats and protect their valuable assets.    ",
  skills:
    "Ethical Hacking | Web Penetration Testing | Networking | Digital Forensics | CTF Player | Windows & Linux | Web Development",
  education:
    "Anand International College of Engineering,Jaipur <br> B.Tech | Computer Science(2020-2024*)  <br> <br>Shri Balram Adarsh V M Sr. Sec. School,Jaipur <br> RBSC 12th Borad(2020) | PCM-69.40% aggregate  ",
  experience:'<span class="code"> Red Team Engineering Intern at Hacker Bro Technologies </span><br> Security Researcher | CTF Player on the Various Platforms - Present<br> ',
  certifications: 
    "Ethical Hacking Essentials(EHE) | EC-Council <br> Introducation to Dark Web,Anonymity | EC-Council <br> TechHacker Pre-Hacking Course | bittentechsolutions.in <br> Linux Training | Spoken Tutorial Project,IIT Bombay ",
  contact:
    "You can contact me on Linkedin and or via the mail:<br><a href='https://www.linkedin.com/in/msrajoriya/' class='success link'>Linkedin</a>, <a href='mailto:cyberwarrior01@duck.com' class='success link'>Email</a>,<a href='https://t.me/cyberwarrior01' class='success link'>Telegram</a>"
};
let userInput, terminalOutput;

const app = () => {
  userInput = document.getElementById("userInput");
  terminalOutput = document.getElementById("terminalOutput");
  document.getElementById("dummyKeyboard").focus();
  console.log("Application loaded");
};

const execute = function executeCommand(input) {
  let output;
  input = input.toLowerCase();
  if (input.length === 0) {
    return;
  }
  output = `<div class="terminal-line"><span class="success">➜</span> <span class="directory">~</span> ${input}</div>`;
  if (!COMMANDS.hasOwnProperty(input)) {
    output += `<div class="terminal-line">no such command: ${input}</div>`;
    console.log("Oops! no such command");
  } else {
    output += COMMANDS[input];
  }

  terminalOutput.innerHTML = `${
    terminalOutput.innerHTML
  }<div class="terminal-line">${output}</div>`;
  terminalOutput.scrollTop = terminalOutput.scrollHeight;
};

const key = function keyEvent(e) {
  const input = userInput.innerHTML;

  if (BLACKLISTED_KEY_CODES.includes(e.keyCode)) {
    return;
  }

  if (e.key === "Enter") {
    execute(input);
    userInput.innerHTML = "";
    return;
  }

  userInput.innerHTML = input + e.key;
};

const backspace = function backSpaceKeyEvent(e) {
  if (e.keyCode !== 8 && e.keyCode !== 46) {
    return;
  }
  userInput.innerHTML = userInput.innerHTML.slice(
    0,
    userInput.innerHTML.length - 1
  );
};

document.addEventListener("keydown", backspace);
document.addEventListener("keypress", key);
document.addEventListener("DOMContentLoaded", app);
