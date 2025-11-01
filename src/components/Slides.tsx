import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const originals = Array.from(new Array(11).keys()).map((i) => {
	return `https://cdn.fortmorgangrooming.com/img${i + 1}.png`;
});

const responsive = {
	mobile: {
		breakpoint: { max: Number.POSITIVE_INFINITY, min: 0 },
		items: 1,
		// slidesToSlide: 1, // optional, default to 1.
	},
};

const MyGallery = () => {
	return (
		<Carousel
			responsive={responsive}
			infinite={true}
			autoPlay
			autoPlaySpeed={3000}
			className="max-w-[85dvw]"
		>
			{originals.map((i) => {
				return (
					<div key={i} id={"image"} className={"w-fit mx-auto"}>
						<img
							src={i}
							alt={""}
							width={800}
							height={450}
							class={"w-fit h-auto"}
						/>
					</div>
				);
			})}
		</Carousel>
	);
};

export default MyGallery;
