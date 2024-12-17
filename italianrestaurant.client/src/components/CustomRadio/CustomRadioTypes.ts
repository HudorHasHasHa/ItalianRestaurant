export interface ICustomRadioPropsModel extends ICustomRadioOptionsModel {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface ICustomRadioOptionsModel {
    label: string;
    value: number;
    checked: boolean | undefined;
}
