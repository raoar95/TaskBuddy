export interface IInput {
  key?: number;
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
  error?: boolean;
  errorMsg?: string;
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

export interface ICheckbox
  extends Omit<ILabelInput, "type" | "placeholder" | "required"> {
  labelClickFunc?: (e: React.MouseEvent<HTMLLabelElement>) => void;
  id: string;
  required?: boolean;
  checked?: boolean;
  placeholder?: string;
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
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  loading?: boolean;
}
