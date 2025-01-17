export interface IInput {
  type: string;
  id?: string;
  name?: string;
  class?: string;
  placeholder: string;
  value?: string;
  autoFocus?: boolean;
  required: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface ILabelInput extends Omit<IInput, "placeholder"> {
  labelName: string;
  labelClass?: string;
  placeholder?: string;
}

export interface IIconInput extends IInput {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  iconClass?: string;
}

export interface IIconLabelInput extends ILabelInput {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  iconClass?: string;
}

export interface ICheckbox extends ILabelInput {
  labelClickFunc?: (e: React.MouseEvent<HTMLLabelElement>) => void;
  checked?: boolean;
}

export interface ISelect extends ICheckbox {
  options: string[];
}

export interface ITextarea extends ICheckbox {
  rows?: number;
  cols?: number;
}

export interface ISubmit {
  id?: string;
  class?: string;
  value?: string;
  onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
}
