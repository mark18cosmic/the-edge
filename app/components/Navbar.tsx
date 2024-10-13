import Link from "next/link";

const links = [
    {
        href: "/services",
        label: "Our Services",
    },

    {
        href: "/about",
        label: "About",
    },
    {
        href: "/Contact",
        label: "Contact",
    },
];

export default function Navbar() {
    return (
    <nav className="bg-black flex flex-row justify-between items-center p-4">
        <Link href="/" className=" text-white text-xl font-bold">The Edge</Link>
        <ul className="flex text-white justify-between flex-row gap-4">
            {links.map((link) => (
                <li key={link.href}>
                    <Link href={link.href}>{link.label}</Link>
                </li>
            ))}
        </ul>
    </nav>
    )
}

// Change link to logo