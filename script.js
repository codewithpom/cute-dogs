

function set_image(image_src) {
    const image = document.getElementById("image")
    image.className = "img-fluid"
    document.getElementById('loader').className = "spinner-border invisible";
    image.onload = function () {
        console.log("Image loaded")
        document.getElementById("heading").innerText = "Here is a cute random dog";
    }
    image.src = image_src;
}

function new_dog(){
	document.getElementById("loader").className = "spinner-border"
	document.getElementById("image").className = "img-fluid invisible"
	console.log("Clicked and wants something new");
	document.getElementById("heading").innerText = "Loading a new cute puppy";
	fetch('https://random.dog/woof.json?filter=mp4,webm')
		.then(response => response.json())
		.then(data => set_image(data.url))
		.catch(err => console.error(err));

}


document.getElementById('button').addEventListener("click", function(){
	new_dog();

});


document.body.onload = function () {
	new_dog();
}

document.addEventListener('keydown', function(event) {
	if (event.keyCode === 78){
		console.log(event.keyCode)
		new_dog();
	}
});


