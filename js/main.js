var dateInfo = new Date();
var hr = dateInfo.getHours() > 12 ? dateInfo.getHours() - 12 : dateInfo.getHours(),
    min = dateInfo.getMinutes(),
    sec = dateInfo.getSeconds(),
    millisec = dateInfo.getMilliseconds();

var hrAngle = hr * 30 + (min * 6 / 12),
    minAngle = min * 6 + (sec * 6 / 60),
    secAngle = sec * 6 + (millisec * 0.36 / 1000);

// set initial angles of the hand wrappers
function setAngle(wrapper, angle) {
    document.querySelector("." + wrapper).style.transform = "rotate(" + angle + "deg)";
}
setAngle("hr-hand", hrAngle);
setAngle("min-hand", minAngle);
setAngle("sec-hand", secAngle);

function themeChange() {
    let element = document.body;
    element.classList.toggle("darkmodecss");
    var x = document.querySelector(".heading")
    if (x.innerHTML === "Light") {
        x.innerHTML = "Dark";
        document.getElementById("icon").classList.add('bxs-moon');
        document.getElementById("icon").classList.remove('bxs-sun');
    } else {
        x.innerHTML = "Light";
        document.getElementById("icon").classList.add('bxs-sun');
        document.getElementById("icon").classList.remove('bxs-moon');
    }
}