
import Link from "next/link"


const navlinks = [
    { name: 'Store', href: '/store' },
    { name: 'About', href: '/about' },
    { name: 'Support', href: '/support' },
    { name: 'Contact', href: '/contact' },
]

const Navbar = () => {
    return (
        <nav className="flex items-center px-5 lg:px-12 py-5 relative z-10">
            <div>
                <Link href="/" className="text-3xl font-semibold">Techwave</Link>
            </div>
            <ul className="ml-auto flex items-center space-x-3 relative ">
                {navlinks.map((link, index) => (
                    <li className="font-semibold text-neutral-500 px-3 py-2 transition-all duration-300 rounded-xl hover:bg-neutral-100 hover:text-neutral-800" key={index}>
                        <Link href={link.href}>{link.name}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Navbar