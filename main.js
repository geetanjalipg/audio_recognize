function start() {
    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/Iz-azplIT/model.json", modelready);


}

function modelready() {
    console.log("modelready");
    classifier.classify(gotresults);
}
function gotresults(error, results) {
    if (error) {
        console.log(error);

    }
    else {
        console.log(results);
        label = results[0].label;
        accuracy = (results[0].confidence * 100).toFixed(2);
        document.getElementById("label").innerHTML = "I can hear " + label;
        document.getElementById("confidence").innerHTML = "Accuracy " + accuracy;

        randomnumber_r = Math.floor(Math.random() * 255) + 1;
        randomnumber_g = Math.floor(Math.random() * 255) + 1;
        randomnumber_b = Math.floor(Math.random() * 255) + 1;
        document.getElementById("label").style.color = "rgb(" + randomnumber_r + "," + randomnumber_g + "," + randomnumber_b + ")";
        document.getElementById("confidence").style.color = "rgb(" + randomnumber_r + "," + randomnumber_g + "," + randomnumber_b + ")";

        img1=document.getElementById("alien1");
        img2=document.getElementById("alien2");
        img3=document.getElementById("alien3");
        img4=document.getElementById("alien4");


        if (label == "CLAP") {
            img1.src= "aliens-01.gif";
            img2.src = "aliens-02.png";
            img3.src = "aliens-03.png";
            img4.src = "aliens-04.png";
        }
        else if (label == "SNAP") {
            img1.src = "aliens-01.png";
            img2.src = "aliens-02.gif";
            img3.src = "aliens-03.png";
            img4.src = "aliens-04.png";
        }
        else if (label == "HELLO") {
            img1.src = "aliens-01.png";
            img2.src = "aliens-02.png";
            img3.src = "aliens-03.gif";
            img4.src = "aliens-04.png";
        }
        else {
            img1.src = "aliens-01.png";
            img2.src = "aliens-02.png";
            img3.src = "aliens-03.png";
            img4.src = "aliens-04.gif";
        }
    }
}
