function start(){


    navigator.mediaDevices.getUserMedia({audio:true});
    classifier= ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/kA4F-80yW/model.json",modelready)
}
function modelready(){

    classifier.classify(gotResults);
}