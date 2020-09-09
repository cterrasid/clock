"use strict";

const secondHand = document.querySelector(".second");
const minuteHand = document.querySelector(".minute");
const hourHand = document.querySelector(".hour");

const setDate = () => {
  const now = new Date();

  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  setTime({ time: seconds, referenceTime: 60, hand: secondHand });
  setTime({ time: minutes, referenceTime: 60, hand: minuteHand });
  setTime({ time: hours, referenceTime: 12, hand: hourHand });
};

const setTime = ({ time, referenceTime, hand }) => {
  const degrees = (time / referenceTime) * 360 + 90;
  hand.style.transform = `rotate(${degrees}deg)`;
};

setInterval(setDate, 1000);
