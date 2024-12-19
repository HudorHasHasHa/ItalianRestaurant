import CustomListItem from '../CustomListItem/CustomListItem';
import { CustomListProps } from './CustomListTypes';

export default function CustomList({
    listItems,
    decoration = true,
}: CustomListProps) {
    return (
        <ul className={`text-start${decoration ? '' : ' list-unstyled'}`}>
            {listItems.map((item, index) => (
                <CustomListItem
                    text={item.text}
                    classes={item.classes}
                    key={`customListItem-${index}`}
                />
            ))}
        </ul>
    );
}
