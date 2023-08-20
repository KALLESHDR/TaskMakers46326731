
"use strict";

const stars = document.querySelectorAll("#star");
const popup = document.querySelector('.popup');
const close = document.querySelector('.close');

stars.forEach(star => {
    let duration = Math.random() * (0.4) + 1.3;
    // console.log(duration);
    star.style.animation = `stars ${duration}s linear infinite alternate-reverse`;
});

window.addEventListener('load', function() {
    const preloader = document.querySelector(".preloader");
    preloader.classList.add("preload-finish");

    setTimeout(()=> {
        popup.style.display = "block";
    }, 5000);

    setInterval(()=> {
        popup.style.display = "block";
    }, 100000);

});
const buttons = document.querySelectorAll("a");

buttons.forEach((button) => {
  button.onclick = function (e) {
    let x = e.clientX - e.target.offsetLeft;
    let y = e.clientY - e.target.offsetTop;
    let ripple = document.createElement("span");
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    this.appendChild(ripple);
    setTimeout(() => {
      ripple.remove();
    }, 600);
  };
});
document.addEventListener("DOMContentLoaded", function() {
  var dateTimeElement = document.getElementById("dateTime");
  var lastUpdatedElement = document.getElementById("lastUpdated");

  var date = new Date(document.lastModified);
  var options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
  var formattedDate = date.toLocaleDateString("en-US", options);

  dateTimeElement.textContent = formattedDate;

  lastUpdatedElement.style.display = "block";
});
function setCookie(cookieName, cookieValue, expirationDays) {
  var date = new Date();
  date.setTime(date.getTime() + (expirationDays * 24 * 60 * 60 * 1000));
  var expires = "expires=" + date.toUTCString();
  document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";
}

function getCookie(cookieName) {
  var name = cookieName + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var cookieArray = decodedCookie.split(";");
  for (var i = 0; i < cookieArray.length; i++) {
    var cookie = cookieArray[i];
    while (cookie.charAt(0) == " ") {
      cookie = cookie.substring(1);
    }
    if (cookie.indexOf(name) == 0) {
      return cookie.substring(name.length, cookie.length);
    }
  }
  return "";
}
document.addEventListener("DOMContentLoaded", function() {
  var countElement = document.getElementById("count");
  var visitorCount = getCookie("visitorCount");

  if (visitorCount === "") {
    visitorCount = 1;
  } else {
    visitorCount = parseInt(visitorCount) + 1;
  }

  setCookie("visitorCount", visitorCount, 365);

  countElement.textContent = visitorCount;
});
document.addEventListener("DOMContentLoaded", function() {
  var versionElement = document.getElementById("versionNumber");
  var appVersion = "CSE BCE"; // Replace with the actual app version

  versionElement.textContent = appVersion;
});
close.addEventListener('click', function() {
    popup.style.display = "none";
});
