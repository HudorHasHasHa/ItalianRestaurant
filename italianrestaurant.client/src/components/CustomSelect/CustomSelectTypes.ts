export interface ISelectItems {
    value: string | number;
    text: string;
}

export interface ICustomSelectPropsModel {
    label: string;
    items: ISelectItems[];
}
