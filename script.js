let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let image = new Image();
let button = document.querySelector("button");

function loadImage() {
    let file = document.querySelector("input[type=file]").files[0];
    let reader = new FileReader();

    reader.addEventListener(
        "load",
        function () {
            image.src = reader.result;
            image.onload = function () {
                canvas.width = image.width;
                canvas.height = image.height + 45;
                ctx.fillStyle = "red";
                ctx.fillRect(0, 0, canvas.width, 45);
                ctx.drawImage(image, 0, 45);
                button.style.display = "block";
                canvas.style.display = "block";
            };
        },
        false
    );

    if (file) {
        reader.readAsDataURL(file);
    }
}

function downloadImage() {
    let link = document.createElement("a");
    link.download = "image.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
}