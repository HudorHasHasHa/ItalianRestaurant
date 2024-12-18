import CustomListItem from '../CustomListItem/CustomListItem';
import { ICustomListProps } from './CustomListTypes';

export default function CustomList({
    listItems,
    decoration = true,
}: ICustomListProps) {
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
