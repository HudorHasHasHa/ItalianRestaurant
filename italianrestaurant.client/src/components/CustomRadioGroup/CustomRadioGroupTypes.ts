import { CustomRadioOptions } from '../CustomRadio/CustomRadioTypes';

export interface CustomRadioGroupProps {
    label: string;
    groupOptions: CustomRadioOptions[];
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
