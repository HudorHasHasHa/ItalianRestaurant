import { ISidePanelItemProps } from './SidePanelItemTypes';

export default function SidePanelItem({
    src,
    icon,
    title,
    isToggled,
}: ISidePanelItemProps) {
    return (
        <div className={`d-flex row ${!isToggled ? 'd-none' : ''}`}>
            <a title={title} className="mx-3" href={src}>
                <img
                    src={`${icon}`}
                    alt={title}
                    style={{ width: '20px', height: '20px' }}
                />
            </a>
        </div>
    );
}
