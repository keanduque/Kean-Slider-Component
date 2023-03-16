=======================================================
-  Developer : Kean Duque
-  Duration : 13hrs | March 14-16, 2023 | 4hrs per day
-  Project : Slider Component Challenge for Tractive
=======================================================

Important Notes : 
You can use the navControl for Desktop currently the config for navControl is false to fulfill the requied code Challenge & Touch slider for both Desktop & Mobile to slide the items.


Description : 
Accessory Slider using Vanilla JavaScript, HTML and CSS

The user should be able to slide through the section. The slidebar should adapt
corresponding to the visible cards.

------------------------------------------------------

Important Notes for Slider Config :

const config = {
	cardClass: "card",
	cardImgClass: "card-img",
	path: "public/img/",
	draggable: false,
	cards: data,
	btnTitle: "Add to Cart",
	navControl: false,
	sliderContentClass: "slider-content",
};

1. The Data is located on data.json, you can change the data under cards config
2. The Cards are render from the script.js
3. You can change the class of card, images using the config object.
	- cardClass - class name for the card
	- cardImgClass - class name for the card image.
	- path - location folder of the images
	- draggable - to avoid dragging the image
4. You can modify the data on the data.json under cards
5. You can also change the title for the button
6. To use navigation control change navControl value to true
7. sliderContentClass class for the content of slider that holds the touch and nav events


Task Done : 

- Build HTML, CSS for the Structure of the Slider
- font use are Roboto based on the Tractive fonts style
- downloaded some images in Tractive website for testing the items display
- code the functionality of the Slider using only Vanilla JS
- implement usable script to be able to re-use in other projects.
- when the cards data is empty it will display No available Data.


Hope this Readme file will help.

Thanks,

KEAN DUQUE