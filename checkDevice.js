let arkits = document.getElementsByClassName("arkit-content");
let ars = document.getElementsByClassName("ar-content");
let prompt = document.getElementById("prompt");

arkits = Array.from(arkits);
ars = Array.from(ars);

function iosSwitch() {
    if (!device.ios()) {
        arkits.forEach(el => {
            el.style["pointer-events"] = "none";
            el.style["cursor"] = "default";
            // console.log(el);
        });
    }
}

function desktopSwitch() {
    if (device.desktop()) {
        ars.forEach(el => {
            el.style["pointer-events"] = "none";
            el.style["cursor"] = "default";
        });

        prompt.style["display"] = "block";
        // console.log(typeof(prompt))
    } else {
        prompt.style["display"] = "none";
    }
}

function run() {
    iosSwitch();
    desktopSwitch();
}

run();