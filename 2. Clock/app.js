const secondHand = document.querySelector('.hand.second');
const minsHand = document.querySelector('.hand.minute');
const hourHand = document.querySelector('.hand.hour');

function setDate() {
  const now = new Date;
  const seconds = now.getSeconds();
  const secondsTransformValue = ((seconds/60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsTransformValue}deg)`;

  const minutes = now.getMinutes();
  const minutesTransformValue = ((minutes/ 60) * 360) + 90;
  minsHand.style.transform = `rotate(${minutesTransformValue}deg)`;

  const hour = now.getHours();
  const hoursTransformValue = ((hour/ 12) * 360) + 90;
  hourHand.style.transform = `rotate(${hoursTransformValue}deg)`;
}

setInterval(setDate,1000);

setDate();

