const form = document.getElementById("checkInForm");
let counter = 0;
const maxGoal = 50;

form.addEventListener("submit", function (event) {
  event.preventDefault();

  counter++;
  const progress = (counter / maxGoal) * 100;

  const name = document.getElementById("attendeeName").value;
  const teamSelect = document.getElementById("teamSelect");
  const teamName = teamSelect.value;
  const teamLabel = teamSelect.options[teamSelect.selectedIndex].text;
  const greeting = `Hello, ${name} from ${teamLabel}!`;

  const attendeeCount = document.getElementById("attendeeCount");
  const waterCount = document.getElementById("waterCount");
  const zeroCount = document.getElementById("zeroCount");
  const powerCount = document.getElementById("powerCount");
  attendeeCount.textContent = counter;

  if (teamName == "water") {
    waterCount.textContent = parseInt(waterCount.textContent) + 1;
  } else if (teamName == "zero") {
    zeroCount.textContent = parseInt(zeroCount.textContent) + 1;
  } else if (teamName == "power") {
    powerCount.textContent = parseInt(powerCount.textContent) + 1;
  }

  document.getElementById("progressBar").style.width = `${progress}%`;
  
  const greetingElement = document.getElementById("greeting");
  greetingElement.textContent = greeting;
  greetingElement.classList.add("success-message");
  greetingElement.style.display = "block";

  form.reset();
});
