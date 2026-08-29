import clsx from "clsx";
import { navItems } from "./items";

export const DesktopNav = ({ route }: { route: string }) => {
	return (
		<ul
			className="flex items-end flex-wrap flex-col lg:flex-row lg:bg-transparent bg-white lg:!flex ease-in-out overflow-clip duration-150 max-h-0 lg:outline-transparent lg:max-h-fit"
			id="nav-items"
			style={{
				transitionProperty: "max-height",
			}}
		>
			{Object.entries(navItems).map(([k, v]) => {
				const isSelected = v === "/" ? route === "/" : route.startsWith(v);
				return (
					<a
						href={v}
						key={k}
						className={clsx(
							"flex-1 min-w-max w-full lg:w-max text-right lg:text-center py-4 lg:py-0 px-4 lg:pb-1 lg:border-b-2 ",
							isSelected
								? "bg-gray-900 text-white border-b-transparent"
								: "border-b-black hover:bg-gray-900/25 ",
						)}
					>
						<li className="leading-6 tacking-loose">{k}</li>
					</a>
				);
			})}
		</ul>
	);
};
