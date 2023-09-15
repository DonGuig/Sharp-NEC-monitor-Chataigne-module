// Source for protocol information :
// https://www.sharpnecdisplays.eu/p/download/v/3f891814a00f3255efeb9a93bb84e64a/cp/Products/LargeFormatDisplays/Products/CurrentProducts/Shared/Command_Lists/PDF-ExternalControlManual-LCDMonitor-%28english%29.pdf?fn=ExternalControlManual-LCDMontior_en.pdf

// function init() {

// }

// function moduleParameterChanged(param) {
//   script.log(param.name + " parameter changed");

// }

function moduleValueChanged(value) {
  script.log(value.name + " value changed");

  if (!value.isParameter()) {
    // if it is a trigger
    script.log("it is a trigger");
    if (value.name === "powerOn") powerOn();
    else if (value.name === "powerOff") powerOff();
  }
}

function dataReceived(data) {
  //If mode is "Lines", you can expect data to be a single line String
  script.log("Data received : " + data);

}

function sendHex(hexString) {
  // script.log("sending string : " + hexString);
  var hexList = hexString.trim().split(' ');
  var numberList = [];
  for(var index = 0; index < hexList.length; ++index) {
    numberList.push(parseInt('0x' + hexList[index]));
  }
  // script.log(numberList);
  local.sendBytes(numberList);
}

// Here are the callback functions for the commands

function powerOn() {
  sendHex("01 30 41 30 41 30 43 02 43 32 30 33 44 36 30 30 30 31 03 73 0d");
}

function powerOff() {
  sendHex("01 30 41 30 41 30 43 02 43 32 30 33 44 36 30 30 30 34 03 76 0d");
}

function sendCustomMessage(message) {
  local.send(message);
}