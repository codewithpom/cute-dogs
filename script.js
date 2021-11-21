function set_image(image_src) {
    const image = document.getElementById("image")
    image.onload = function () {
        console.log("Image loaded")
        document.getElementById("heading").innerText = "Here is a cute random dog";
    }
    image.src = image_src;
}


document.body.onload = function () {
    fetch('https://random.dog/woof.json?filter=mp4,webm')
	.then(response => response.json())
	.then(data => set_image(data.url))
	.catch(err => console.error(err));
}

