var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
function start() {
document.getElementById("textbox").innerHTML= "";
recognition.start();
}
recognition.onresult = function ( event ) {
console.log(event);
var Content = event.results[0] [0].transcript;
document.getElementById("textbox").innerHTML = Content;
console.log(Content);
speak();
} 
function speak (){
var synth = window.speechSynthesis;
speak_data = document.getElementById("textbox").value;
var utterThis = new SpeechSynthesisUtterance(speak_data);
synth.speak(utterThis);
Webcam.attach(camera);
}
Webcam.set({
    width:360,
    height:250,
    image_format: 'png',
    png_quality:90
});
camera = document.getElementById("camera");
function take_snapshot(){
console.log(img_id);
Webcam.snap(function(data_uri) {
    document.getElementById("result1").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';
});
}
Webcam.snap(function(data_uri) {
    document.getElementById("result2").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';
});
Webcam.snap(function(data_uri) {
    document.getElementById("result3").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';
});

setTimeout(function()
{ 
    take_snapshot(); 
    speak_data = "taking your next selfie in 10 second";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
}, 5000);
function take_snapshot()
{
   if(img_id == "selfie1"){
   Webcam.snap(function(data_uri) 
   document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';
   if(img_id == "selfie1"){

   Webcam.snap(function(data_uri) 
   document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';
   if(img_id == "selfie1"){

   Webcam.snap(function(data_uri) {
  document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';
    });    