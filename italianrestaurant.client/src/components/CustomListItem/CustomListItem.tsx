import { ICustomListItemProps } from './CustomListItemTypes';

export default function CustomListItem({
    text,
    classes,
}: ICustomListItemProps) {
    return (
        <li className={classes}>
            <span>{text}</span>
        </li>
    );
}
