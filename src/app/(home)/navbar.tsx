
import Link from "next/link";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["700"],
});
interface NavbarItemsProps {
	href: string;
	children: React.ReactNode;
	isActive?: boolean;
}
const NavbarItem = ({ href, children, isActive }: NavbarItemsProps) => {
	return (
		<Button
			asChild
			variant={"outline"}
			className={cn(
				"bg-transparent hover:bg-transparent rounded-full hover:border-primary border-transparent px-3.5 text-large ",
				isActive && "bg-black text-white hover:bg-black hover:text-white"
			)}>
			<Link href={href}>{children}</Link>
		</Button>
	);
};
const navbarItems = [
	{ href: "/", children: "Home" },
	{ href: "/about", children: "about" },
	{ href: "/features", children: "features" },
	{ href: "/pricing", children: "pricing" },
	{ href: "/contact", children: "contact" },
];
export const Navbar = () => {
	const pathName = usePathname();
	return (
		<nav className="h-20 flex border-b justify-between font-medium bg-white">
			<Link
				href="/"
				className="pl-6 flex items-center">
				<span className={cn("text-5xl font-semibold", poppins.className)}>
					faisal
				</span>
			</Link>
			<div className="items-center gap-4 hidden lg:flex">
				{navbarItems.map(item => (
					<NavbarItem
						key={item.href}
						href={item.href}>
						{item.children}
					</NavbarItem>
				))}
			</div>
		</nav>
	);
};
