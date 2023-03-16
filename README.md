# Kean Slider Component for Tractive
##=======================================================

-  Developer : Kean Duque
-  Duration : 13hrs | March 14-16, 2023 | 4hrs per day

##=======================================================

## Important Notes : 

You can use the navControl for Desktop currently the config for navControl is false to fulfill the required code Challenge & Touch slider for both Desktop & Mobile to slide the items.


## Description : 

Accessory Slider using Vanilla JavaScript, HTML, and CSS

The user should be able to slide through the section. The sidebar should adopt
corresponding to the visible cards.

------------------------------------------------------

###### Important Notes for Slider Config :
```
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
```

1. The Data is located on data.json, you can change the data under the cards config
2. The Cards are rendered from the script.js
3. You can change the class of cards, and images using the config object.
	- cardClass - class name for the card
	- cardImgClass - class name for the card image.
	- path - location folder of the images
	- draggable - to avoid dragging the image
4. You can modify the data on the data.json undercards
5. You can also change the title for the button
6. To use navigation control change the navControl value to true
7. sliderContentClass class for the content of the slider that holds the touch and nav events
8. use mouse down to grab the slider to slide
9. use mouse wheel to slide the slier.


## Task Done : 

- Build HTML and CSS for the Structure of the Slider
- font used is Roboto based on the Tractive fonts style
- downloaded some images from the Tractive website for testing the items displayed.
- create a Slider using touch event for mobile and desktop
- add slider nav control for desktop
- code the functionality of the Slider using only Vanilla JS
- implement a usable script to be able to reuse in other projects.
- when the data of the card is empty it will display No available Data.


Hope these README files will help.

Thanks,

KEAN DUQUE