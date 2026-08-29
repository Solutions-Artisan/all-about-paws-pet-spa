import type { EmblaCarouselType } from "embla-carousel";

const addTogglePrevNextButtonsActive = (
	emblaApi: EmblaCarouselType,
	prevBtn: HTMLElement,
	nextBtn: HTMLElement,
): void => {
	const togglePrevNextButtonsState = (): void => {
		if (emblaApi.canScrollPrev()) {
			prevBtn.classList.remove("embla__button--disabled");
		} else {
			prevBtn.classList.add("embla__button--disabled");
		}

		if (emblaApi.canScrollNext()) {
			nextBtn.classList.remove("embla__button--disabled");
		} else {
			nextBtn.classList.add("embla__button--disabled");
		}
	};

	togglePrevNextButtonsState();

	emblaApi
		.on("select", togglePrevNextButtonsState)
		.on("reInit", togglePrevNextButtonsState);
};

export const addPrevNextButtonClickHandlers = (
	emblaApi: EmblaCarouselType,
	prevBtn: HTMLElement,
	nextBtn: HTMLElement,
): void => {
	const scrollPrev = (): void => {
		emblaApi.scrollPrev();
	};
	const scrollNext = (): void => {
		emblaApi.scrollNext();
	};
	prevBtn.addEventListener("click", scrollPrev, false);
	nextBtn.addEventListener("click", scrollNext, false);

	addTogglePrevNextButtonsActive(emblaApi, prevBtn, nextBtn);
};

export const addDotButtonAndClickHandlers = (
	emblaApi: EmblaCarouselType,
	dotsNode: HTMLElement,
): void => {
	let dotNodes: HTMLElement[] = [];

	const addDotBtnsWithClickHandlers = (): void => {
		dotsNode.innerHTML = emblaApi
			.scrollSnapList()
			.map(() => '<button class="embla__dot" type="button"></button>')
			.join("");

		const scrollTo = (index: number): void => {
			emblaApi.scrollTo(index);
		};

		dotNodes = Array.from(dotsNode.querySelectorAll(".embla__dot"));
		dotNodes.forEach((dotNode, index) => {
			dotNode.addEventListener("click", () => scrollTo(index), false);
		});
	};

	const toggleDotButtonsActive = (): void => {
		const previous = emblaApi.previousScrollSnap();
		const selected = emblaApi.selectedScrollSnap();
		dotNodes[previous].classList.remove("embla__dot--selected");
		dotNodes[selected].classList.add("embla__dot--selected");
	};

	addDotBtnsWithClickHandlers();
	toggleDotButtonsActive();

	emblaApi
		.on("reInit", addDotBtnsWithClickHandlers)
		.on("reInit", toggleDotButtonsActive)
		.on("select", toggleDotButtonsActive);
};
