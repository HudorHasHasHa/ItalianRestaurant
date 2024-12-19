export interface CustomRadioProps extends CustomRadioOptions {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface CustomRadioOptions {
    label: string;
    value: number;
    checked: boolean | undefined;
}
