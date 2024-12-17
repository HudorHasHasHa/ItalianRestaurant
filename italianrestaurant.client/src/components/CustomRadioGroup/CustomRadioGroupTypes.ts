import { ICustomRadioOptionsModel } from '../CustomRadio/CustomRadioTypes';

export interface ICustomRadioGroupPropsModel {
    label: string;
    groupOptions: ICustomRadioOptionsModel[];
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
