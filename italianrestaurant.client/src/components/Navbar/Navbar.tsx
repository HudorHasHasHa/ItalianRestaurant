import NavbarLink from '../NavbarLink.tsx/NavbarLink';
//keeping navbar to move it into components library that will be created later on
export default function Navbar() {
    const mockItems = [
        {
            src: '/home',
            text: 'Home',
        },
        {
            src: '/about',
            text: 'About Us',
        },
        {
            src: 'https://example.com/contact',
            text: 'Contact',
        },
    ];
    return (
        <nav className="d-flex">
            {mockItems.map((x) => (
                <NavbarLink src={x.src} text={x.text} />
            ))}
        </nav>
    );
}
