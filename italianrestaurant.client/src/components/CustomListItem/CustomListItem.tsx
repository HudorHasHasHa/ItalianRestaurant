import { CustomListItemProps } from './CustomListItemTypes';

export default function CustomListItem({ text, classes }: CustomListItemProps) {
    return (
        <li className={classes}>
            <span>{text}</span>
        </li>
    );
}
