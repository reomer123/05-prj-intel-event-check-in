const form = document.getElementById("checkInForm");
let counter = 0;
let waterAttendees = 0;
let zeroAttendees = 0;
let powerAttendees = 0;
const maxGoal = 50;

form.addEventListener("submit", function (event) {
  event.preventDefault();

  if(counter < maxGoal) {
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
      waterAttendees = parseInt(waterCount.textContent) + 1;
      waterCount.textContent = waterAttendees;
    } else if (teamName == "zero") {
      zeroAttendees = parseInt(zeroCount.textContent) + 1;
      zeroCount.textContent = zeroAttendees;
    } else if (teamName == "power") {
      powerAttendees = parseInt(powerCount.textContent) + 1;
      powerCount.textContent = powerAttendees;
    }

    document.getElementById("progressBar").style.width = `${progress}%`;

    const greetingElement = document.getElementById("greeting");
    greetingElement.textContent = greeting;
    greetingElement.classList.add("success-message");
    greetingElement.style.display = "block";

    if(counter == maxGoal) {
      const winnersElement = document.getElementById("winners");
      let winnersCongrats = "";
      const highest = Math.max(waterAttendees, zeroAttendees, powerAttendees);

      if(highest == waterAttendees) {
        if(waterAttendees == zeroAttendees) {
          winnersCongrats = "And the winners are: 🎉 Team Water Wise AND Team Net Zero! 🎉";
        } else if(waterAttendees == powerAttendees) {
          winnersCongrats = "And the winners are: 🎉 Team Water Wise AND Team Renewables! 🎉";
        } else {
          winnersCongrats = "And the winner is: 🎉 Team Water Wise! 🎉";
        }
      } else if(highest == zeroAttendees) {
        if(waterAttendees == zeroAttendees) {
          winnersCongrats = "And the winners are: 🎉 Team Water Wise AND Team Net Zero! 🎉";
        } else if(zeroAttendees == powerAttendees) {
          winnersCongrats = "And the winners are: 🎉 Team Net Zero AND Team Renewables! 🎉";
        } else {
          winnersCongrats = "And the winner is: 🎉 Team Net Zero! 🎉";
        }
      } else if(highest == powerAttendees) {
        if(waterAttendees == powerAttendees) {
          winnersCongrats = "And the winners are: 🎉 Team Water Wise AND Team Renewables! 🎉";
        } else if(zeroAttendees == powerAttendees) {
          winnersCongrats = "And the winners are: 🎉 Team Net Zero AND Team Renewables! 🎉";
        } else {
          winnersCongrats = "And the winner is: 🎉 Team Renewables! 🎉";
        }
      }

      winnersElement.textContent = winnersCongrats;
      winnersElement.classList.add("winners-message");
      winnersElement.style.display = "block";
    }
    form.reset();
  } 
});
