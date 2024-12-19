import { useState } from 'react';
import SidePanelItem from '../SidePanelItem/SidePanelItem';
import { SidePanelProps } from './SidePanelTypes';

export default function SidePanel({ passedWidth }: SidePanelProps) {
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

    const [isToggled, setisToggled] = useState(false);

    const toggleSidePanel = () => setisToggled(!isToggled);

    return (
        <div>
            <div
                className={`toggle-btn ${isToggled ? 'slideButton' : ''}`}
                onClick={toggleSidePanel}
            >
                <img
                    style={{ width: '40px', height: '40px' }}
                    src="/hamburger-svgrepo-com.svg"
                    alt="Toggle Menu"
                />
            </div>

            <div
                className={`side-panel ${isToggled ? 'open' : ''}`}
                style={passedWidth ? { width: `${passedWidth}px` } : {}}
            >
                {mockItems.map((item, index) => (
                    <SidePanelItem
                        key={index}
                        src={item.src}
                        icon={item.icon}
                        title={item.title}
                        isToggled={isToggled}
                    />
                ))}
            </div>
        </div>
    );
}
