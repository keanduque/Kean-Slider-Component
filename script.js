/**
 * Author : Kean Duque
 * Project : Slider Component for Tractive
 */
import data from "./data.json" assert { type: "json" };

("use strict");

class Slider {
	scrollbarInner = document.querySelector(".scroll-inner-bar");
	sliderNavLeft = document.querySelectorAll(".slider__btn--left");
	sliderNavRight = document.querySelectorAll(".slider__btn--right");
	//initialize slider
	constructor(sliderWrapper, options) {
		const slider = document.querySelector(sliderWrapper);
		//render Cards
		this.card(slider, options);
		//render Events
		this.events(slider, options);
	}
	events(slider, options) {
		const touchOptions = {
			imgClass: options.cardImgClass,
			slider: slider,
		};
		this.sliderTouchSlide(touchOptions);

		// navigation left right button control
		if (options.navControl === false) {
			console.log("disabled");
			document.querySelector(".controls").style.visibility = "hidden";
		} else {
			this.sliderNav(options);
		}
	}
	// control for touching slider
	sliderTouchSlide(touchOptions) {
		const self = this;
		const scrollBar = self.scrollbarInner;
		const slider = touchOptions.slider;
		const cardImgClass = touchOptions.imgClass;
		const imgDrag = document.querySelector(`.${cardImgClass}`);
		let sliderGrabbed = false;

		slider.parentElement.addEventListener("scroll", (e) => {
			scrollBar.style.width = `${this.getScrollPercentage(slider)}%`;
		});
		slider.addEventListener("mousedown", (e) => {
			sliderGrabbed = true;
			slider.style.cursor = "grabbing";
		});
		slider.addEventListener("mouseup", (e) => {
			sliderGrabbed = false;
			slider.style.cursor = "grab";
		});
		slider.addEventListener("mouseleave", (e) => {
			sliderGrabbed = false;
		});
		slider.addEventListener("mousemove", (e) => {
			if (sliderGrabbed) slider.parentElement.scrollLeft -= e.movementX;
		});
		slider.addEventListener("wheel", (e) => {
			e.preventDefault();
			slider.parentElement.scrollLeft += e.deltaY;
		});

		if (imgDrag)
			imgDrag.addEventListener("mousedown", (e) => {
				return false;
			});
	}
	// controls for desktop navigation left and right
	sliderNav(options) {
		const self = this;
		const sliderContent = document.querySelectorAll(
			`.${options.sliderContentClass}`
		);
		const sliderLeft = self.sliderNavLeft;
		const sliderRight = self.sliderNavRight;
		const sliderContainers = [...sliderContent];
		const btnLeft = [...sliderLeft];
		const btnRight = [...sliderRight];

		sliderContainers.forEach((item, i) => {
			let dimension = item.getBoundingClientRect();
			let containerWidth = dimension.width;

			btnRight[i].addEventListener("click", () => {
				item.scrollLeft += containerWidth;
			});
			btnLeft[i].addEventListener("click", () => {
				item.scrollLeft -= containerWidth;
			});
		});
	}
	// create cards
	card(sliderWrapper, options) {
		const cards = [...options.cards];
		const path = options.path;
		const draggable = options.draggable;
		const cardClass = options.cardClass;
		const cardImgClass = options.cardImgClass;
		const getClass = sliderWrapper.getAttribute("class");

		let render = "";
		if (cards.length > 0) {
			cards.forEach((item, i) => {
				render += `<div class="${cardClass}">
			<div class="card-img-content">
					<img
						class="${cardImgClass}"
						src="${path + item.imgSrc}"
						alt="${item.name}"
						draggable=${draggable} />
				</div>
				<div class="card-content">
					<h2 class="card-content-name">${item.name}</h2>
					<p class="card-content-price">${item.price}</p>
					<button class="card-content-button">${options.btnTitle}</button>
				</div>
			</div>`;
			});
		} else {
			const wrapperDiv = document.getElementsByClassName(getClass)[0];
			wrapperDiv.style.position = "initial";
			wrapperDiv.style.backgroundColor = "#f9f9f9";
			wrapperDiv.style.borderRadius = "10px";
			render += `<div class="${cardClass} no-data">
			<h2 class="card-content-name">No Data</h2>
			</div>`;
		}
		const divSlider = sliderWrapper;
		divSlider.innerHTML += render;
		return render;
	}
	// get the scroll percentage for slide touch
	getScrollPercentage(slider) {
		return (
			(slider.parentElement.scrollLeft /
				(slider.parentElement.scrollWidth -
					slider.parentElement.clientWidth)) *
			100
		);
	}
}

//change settings here for the slider
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
const initialize = new Slider(".slider-wrapper", config);
