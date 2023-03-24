 let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let image = new Image();
let button = document.querySelector("button");
let colorPicker1 = document.getElementById("color-picker-1");
let colorPicker2 = document.getElementById("color-picker-2");
let hidden = document.getElementById("box-tip");
			let content = document.getElementById("content");
			let doesntwork = document.getElementById("doesntwork");
			// let hide = document.getElementById("presets");

function loadImage() {
    let file = document.querySelector("input[type=file]").files[0];
    let reader = new FileReader();

    reader.addEventListener(
        "load",
        function () {
            image.src = reader.result;
            image.onload = function () {
							window.scrollTo(0, 0);
                canvas.width = image.width;
                canvas.height = image.height;
                let gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
                gradient.addColorStop(0, colorPicker1.value);
                gradient.addColorStop(1, colorPicker2.value);
                ctx.fillStyle = gradient;
                ctx.fillRect(0, 0, canvas.width, 30);
                ctx.drawImage(image, 0, 30);
                button.style.display = "block";
                canvas.style.display = "block";
							// hide.style.display = "block";
							doesntwork.style.display = "block";
                colorPicker1.style.display = "initial";
                colorPicker2.style.display = "initial";
                hidden.style.display = "none"; 
							content.style.marginTop = "1vh";
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
    link.download = "MenuBarStyle.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
}

colorPicker1.addEventListener("input", function () {
    let gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
    gradient.addColorStop(0, colorPicker1.value);
    gradient.addColorStop(1, colorPicker2.value);
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, 30);
    ctx.drawImage(image, 0, 30);
});

colorPicker2.addEventListener("input", function () {
    let gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
    gradient.addColorStop(0, colorPicker1.value);
    gradient.addColorStop(1, colorPicker2.value);
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, 30);
    ctx.drawImage(image, 0, 30);
});
			
let box = document.getElementById("box-tip");
let droparea = document.getElementById("droparea");
let droptip = document.getElementById("droptip");
			
			droparea.addEventListener("dragenter", function(e) {
  e.preventDefault();
				droptip.style.display = "block"
});

droparea.addEventListener("dragleave", function(e) {
  e.preventDefault();
	droptip.style.display = "block"
});

droparea.addEventListener("dragover", function(e) {
  e.preventDefault();
	droptip.style.display = "block"

});

droparea.addEventListener("drop", function(e) {
  e.preventDefault();
  let file = e.dataTransfer.files[0];
  loadImageFile(file);
	
});
box.addEventListener("dragenter", function(e) {
  e.preventDefault();
  box.style.borderStyle = "dashed";
});

box.addEventListener("dragleave", function(e) {
  e.preventDefault();
  box.style.borderStyle = "dashed";
});

box.addEventListener("dragover", function(e) {
  e.preventDefault();
});

box.addEventListener("drop", function(e) {
  e.preventDefault();
  let file = e.dataTransfer.files[0];
  loadImageFile(file);
});

function loadImageFile(file) {
	window.scrollTo(0, 0);
  let reader = new FileReader();
  reader.addEventListener("load", function() {
    image.src = reader.result;
    image.onload = function() {
      canvas.width = image.width;
      canvas.height = image.height;
      let gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
      gradient.addColorStop(0, colorPicker1.value);
      gradient.addColorStop(1, colorPicker2.value);
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, 30);
      ctx.drawImage(image, 0, 30);
      button.style.display = "block";
      canvas.style.display = "block";
      doesntwork.style.display = "block";
      colorPicker1.style.display = "initial";
      colorPicker2.style.display = "initial";
      hidden.style.display = "none"; 
      content.style.marginTop = "1vh";
			//hide.style.display = "block";
			droptip.style.display = "none"
			document.body.style.backgroundColor = "initial"
				document.body.style.opacity = "initial"
    };
  }, false);
  reader.readAsDataURL(file);
}
const faqQuestions = document.querySelectorAll('.faq-question');

  faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
      question.classList.toggle('active');
      const answer = question.nextElementSibling;
      if (question.classList.contains('active')) {
        answer.style.maxHeight = answer.scrollHeight + 'px';
      } else {
        answer.style.maxHeight = 0;
      }
    });
  });
function theme() {
   var element = document.body;
	var logo = document.querySelectorAll('navbar-text');
   element.classList.toggle("light");
	logo.style.backgroundColor("linear-gradient(to left, #b92b27, #1565c0);")
}

// START OF PRESETS
/*fetch('gradients.json')
			.then(response => response.json())
			.then(gradients => {
				// Loop through each gradient
				for (let i = 0; i < gradients.length; i++) {
					let gradient = gradients[i];

					// Create the circle
					let circle = document.createElement('div');
					circle.className = 'circle';

					// Set the gradient as the background of the circle
					let startColor = gradient.start;
					let endColor = gradient.end;
					circle.style.background = `linear-gradient(to right, ${startColor}, ${endColor})`;

					// Append the circle to the container
					document.getElementById('circles').appendChild(circle);
				}
			})
			.catch(error => console.error(error));
let circles = document.getElementById('circles')*/

/*circles.addEventListener('click', () => {
				let circlestyle = window.getComputedStyle(circles);
// console.log(window.getComputedStyle(circles.getPropertyValue('background-image')))
				// Get the start and end colors from the computed style
				let startColor = circlestyle.getPropertyValue('background-image').split(',')[0].split('(')[1];
				let endColor = circlestyle.getPropertyValue('background-image').split(',')[1].split(')')[0];
	window.scrollTo(0, 0);
  let reader = new FileReader();
  reader.addEventListener("load", function() {
    image.src = reader.result;
    image.onload = function() {
      canvas.width = image.width;
      canvas.height = image.height;
      let gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
      gradient.addColorStop(0, start.value);
      gradient.addColorStop(1, end.value);
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, 30);
      ctx.drawImage(image, 0, 30);
      button.style.display = "block";
      canvas.style.display = "block";
      doesntwork.style.display = "block";
      colorPicker1.style.display = "initial";
      colorPicker2.style.display = "initial";
      hidden.style.display = "none"; 
      content.style.marginTop = "1vh";
			hide.style.display = "block";
			droptip.style.display = "none"
			document.body.style.backgroundColor = "initial"
				document.body.style.opacity = "initial"
		}
	});
});*/
