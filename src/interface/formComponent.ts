export interface IInput {
  type: string;
  name: string;
  id: string;
  class?: string;
  placeholder?: string;
  autoComplete?: string;
  value?: string;
  autoFocus?: boolean;
  required?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface ILabelInput extends IInput {
  labelName: string;
  labelClass?: string;
}

export interface IconLabelInput extends ILabelInput {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  iconClass?: string;
  moreInput?: React.ReactNode;
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
  id: string;
  class?: string;
  value?: string;
  onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
}
