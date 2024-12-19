export interface SelectItems {
    value: string | number;
    text: string;
}

export interface CustomSelectProps {
    label: string;
    items: SelectItems[];
}
