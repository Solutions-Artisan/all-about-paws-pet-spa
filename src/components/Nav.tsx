import { DesktopNav } from "./nav/desktop";
import { MobileNav } from "./nav/mobile";
import { useScroll } from "./nav/use-scroll";

export const Nav = ({ route }: { route: string }) => {
	useScroll();

	return (
		<div className={"grid absolute lg:relative right-0 h-full text-center"}>
			<MobileNav />
			<DesktopNav route={route} />
		</div>
	);
};
