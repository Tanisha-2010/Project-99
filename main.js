var speech_recognition = window.webkitSpeechRecognition;
var recogition = new speech_recognition();

function start() {
    recogition.start();
}

recogition.onresult = function run(event) {
    console.log(event);
    var content = event.results[0][0].transcript;
    console.log(content);
    speak();
}

function speak() {
    synth = window.speechSynthesis;
    speakData = document.getElementById("textbox").value;
    var utterThis = new SpeechSynthesisUtterance(speakData);
    synth.speak(utterThis);
    Webcam.attach(camera);
}

Webcam.set({
    width: 360,
    height: 250,
    image_format: "png",
    png_quality: 90,
});
camera = document.getElementById("camera");