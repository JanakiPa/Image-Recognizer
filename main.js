Webcam.set({width: 290, height:300, image_format:'png', png_quality:90});
camera=document.getElementById("camera");
Webcam.attach('#camera');
function capture(){
    Webcam.snap(function (data_uri){
        document.getElementById("image").innerHTML='<img id="img" src="'+data_uri+'">'
    });
}
console.log(ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/a-IDSOBoz/model.json', modelLoaded);
function modelLoaded(){
    console.log('model loaded');
}
function identify(){
    img=document.getElementById('img');
    classifier.classify(img, result);
}
function result(error,results){
if(error){console.log(error);}
else{console.log(results);
document.getElementById("object_result").innerHTML=results[0].label;
document.getElementById("accuracy_result").innerHTML=results[0].confidence.toFixed(2)*100+"%";

}
}