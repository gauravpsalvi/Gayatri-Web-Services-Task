var imageName = "";

function chngImage(obj) {
    var butName = $(obj).val();
    if(butName == "Tiger") {
        $("#imageBox").attr("src", "img/tiger.jpg");
        $("#imageBox").attr("alt", "Tiger Image");
    } else if(butName == "Lion") {
        $("#imageBox").attr("src", "img/lion.jpg");
        $("#imageBox").attr("alt", "Lion Image");
    } else if(butName == "Dog") {
        $("#imageBox").attr("src", "img/dog.jpg");
        $("#imageBox").attr("alt", "Dog Image");  
    } else if(butName == "Reset") {
        $("#imageBox").attr("src", "img/horse.jpg");
        $("#imageBox").attr("alt", "On button click the image will display in the image box");
    }
    //alert(butName);
}

function displayName() {
    imageName = $("#imageBox").attr("alt");
    alert(imageName);
}