var myImage =document.getElementById('mainImage');
	myImage.onclick = function() {
		alert('You clicked the image');
}

// setting interval function
var imageArray = ['images/watches/watch.jpg', 'images/watches/watch1.jpg', 'images/watches/watch2.jpg', 'images/watches/watch3.jpg', 'images/watches/watch4.jpg',
 'images/watches/watch5.jpg', 'images/watches/watch6.jpg'];

var imageIndex = 0;

function changeImage() {
	myImage.setAttribute('src', imageArray[imageIndex]);
	imageIndex++;
	if(imageIndex >= imageArray.length) {
		imageIndex = 0;
	}
}
// to cancel interval
var intervalHandler = setInterval(changeImage, 3000);
	myImage.onclick = function() {
		clearInterval(intervalHandler);
}

// to see the shopping bag
function preparePage() {
	document.getElementById('show-button').onclick = function() {
	if (document.getElementById('show-button').checked) {
		document.getElementById('show').style.display = 'block';
		} else {
			document.getElementById('show').style.display = 'none';
		}
	};
	document.getElementById('show').style.display = 'none';
}

window.onload = function() {
	preparePage();
};



