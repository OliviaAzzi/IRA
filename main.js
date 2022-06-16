Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach("#camera");
function take_snapshot() {
    Webcam.snap(function(src_of_image) {
        document.getElementById("result").innerHTML="<img id='captured' src='"+src_of_image+"'/>";
    });
}
