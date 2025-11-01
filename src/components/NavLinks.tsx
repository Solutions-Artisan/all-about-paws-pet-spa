import React from "preact/compat";

export const NavLinks = ({
	selected,
}: {
	selected: "home" | "packages" | "faq";
}) => {
	const selectClass =
		"text-white lg:bg-gray-900 border-r-accent-900 hover:bg-gray-900 ";

	return (
		<>
			<a href="/" class={""}>
				<li
					id="home"
					class={`py-6 px-4 lg:py-0 hover:bg-gray-400 border-r-4 border-r-current lg:border-r-0 hover:text-gray-100 transition-colors h-full ${selected === "home" ? selectClass : ""}`}
				>
					Home
				</li>
			</a>

			<a href="/packages" class={""}>
				<li
					id="packages"
					class={`py-6 px-4 lg:py-0 hover:bg-gray-400 border-r-4 border-r-current lg:border-r-0 hover:text-gray-100 transition-colors h-full ${selected === "packages" ? selectClass : ""}`}
				>
					Packages
				</li>
			</a>
			<a href="/faq" class={""}>
				<li
					id="faq"
					class={`py-6 px-4 lg:py-0 hover:bg-gray-400 border-r-4 border-r-current lg:border-r-0 hover:text-gray-100 transition-colors h-full ${selected === "faq" ? selectClass : ""}`}
				>
					FAQ
				</li>
			</a>
		</>
	);
};
