import SidePanelItem from '../SidePanelItem/SidePanelItem';

export default function SidePanel() {
    const mockItems = [
        {
            src: '/home',
            icon: 'home-svgrepo-com.svg',
            title: 'Home',
        },
        {
            src: '/user',
            icon: 'user-svgrepo-com.svg',
            title: 'User',
        },
    ];
    return (
        <nav className="d-flex">
            {mockItems.map((x) => (
                <SidePanelItem src={x.src} icon={x.icon} title={x.title} />
            ))}
        </nav>
    );
}
