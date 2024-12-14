import { ISidePanelItemProps } from './SidePanelItemTypes';

export default function SidePanelItem({ text, src }: ISidePanelItemProps) {
    return (
        <div>
            <a className="mx-3" href={src}>
                {text}
            </a>
        </div>
    );
}
