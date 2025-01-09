import React from "react";

/* Styles */
import "./FormComponent.css";

/* Interface */
import type {
  ICheckbox,
  IconLabelInput,
  IInput,
  ILabelInput,
  ISelect,
  ISubmit,
  ITextarea,
} from "../../interface/formComponent";

// ================================================= Form Components Start =================================================

/*=====================
👉 Input Without Label
======================*/

const Input = (props: IInput) => {
  return (
    <input
      type={props.type}
      id={props.id}
      className={`my_input ${props.class}`}
      placeholder={props.placeholder}
      autoComplete={props.autoComplete}
      name={props.name}
      onClick={props.onClick}
      onChange={props.onChange}
      value={props.value}
      autoFocus={props.autoFocus}
      required={props.required}
      disabled={props.disabled}
      readOnly={props.readOnly}
    />
  );
};

/*==================
👉 Input With Label
===================*/

const LabelInput = (props: ILabelInput) => {
  return (
    <>
      <label htmlFor={props.id} className={`input_label ${props.labelClass}`}>
        {props.labelName}
      </label>
      <input
        type={props.type}
        id={props.id}
        className={`Label_input ${props.class}`}
        placeholder={props.placeholder}
        autoComplete={props.autoComplete}
        name={props.labelName}
        onClick={props.onClick}
        onChange={props.onChange}
        value={props.value}
        required={props.required}
        disabled={props.disabled}
        readOnly={props.readOnly}
      />
    </>
  );
};

/*=========================
👉 Input With Label & Icon
==========================*/

const IconLabelInput = (props: IconLabelInput) => {
  return (
    <div className="InputComp IconInputComp">
      <label
        htmlFor={props.labelName}
        className={`input_label ${props.labelClass}`}
      >
        {props.labelName}
      </label>
      <div className="accInputCont">
        <props.icon className={`input_icon ${props.iconClass}}`} />
        <input
          className={`icon_label_input ${props.class}`}
          type={props.type}
          placeholder={props.placeholder}
          autoComplete={props.autoComplete}
          name={props.labelName}
          value={props.value}
          required={props.required}
          disabled={props.disabled}
          readOnly={props.readOnly}
        />
      </div>
      {props.moreInput}
    </div>
  );
};

/*=================
👉 Input With Icon
==================*/

const IconInput = (props: IconLabelInput) => {
  return (
    <div className="InputComp IconInputComp">
      <div className="accInputCont">
        <props.icon className={`input_icon ${props.iconClass}`} />
        <input
          className={`icon_input ${props.class}`}
          type={props.type}
          placeholder={props.placeholder}
          autoComplete={props.autoComplete}
          name={props.labelName}
          value={props.value}
          required={props.required}
          disabled={props.disabled}
          readOnly={props.readOnly}
        />
      </div>
      {props.moreInput}
    </div>
  );
};

/*==========
👉 Checkbox
===========*/

const Checkbox = (props: ICheckbox) => {
  return (
    <>
      <input
        type="checkbox"
        id={props.id}
        name={props.name}
        className={`input_checkbox ${props.class}`}
        value={props.value}
        onClick={props.onClick}
        onChange={props.onChange}
        required={props.required}
        disabled={props.disabled}
        readOnly={props.readOnly}
        checked={props.checked}
      />
      <label
        htmlFor={props.id}
        className={`input_label ${props.labelClass}`}
        onClick={props.labelClickFunc}
      >
        {props.value}
      </label>
      <br />
    </>
  );
};

/*=======
👉 Radio
========*/

const Radio = (props: ICheckbox) => {
  return (
    <>
      <input
        type="radio"
        id={props.labelName}
        name={props.name}
        className={`input_radio ${props.class}`}
        required={props.required}
        disabled={props.disabled}
        readOnly={props.readOnly}
        defaultChecked={props.checked}
      />
      <label
        htmlFor={props.labelName}
        className={`input_label ${props.labelClass}`}
        onClick={props.labelClickFunc}
      >
        {props.labelName}
      </label>
      <br />
    </>
  );
};

/*========
👉 Select
=========*/

const Select = (props: ISelect) => {
  return (
    <>
      <label
        htmlFor={props.labelName}
        className={`input_label ${props.labelClass}`}
      >
        {props.labelName}
      </label>
      <select
        id="category"
        className={`input_select  ${props.class}`}
        name={props.labelName}
        required={props.required}
        disabled={props.disabled}
      >
        {props.options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </>
  );
};

/*==========
👉 Textarea
===========*/

const Textarea = (props: ITextarea) => {
  return (
    <>
      <label
        htmlFor={props.labelName}
        className={`input_label ${props.labelClass}`}
      >
        {props.labelName}
      </label>
      <textarea
        name={props.labelName}
        className={`input_textarea  ${props.class}`}
        placeholder={props.placeholder}
        rows={props.rows}
        cols={props.cols}
        required={props.required}
        disabled={props.disabled}
        readOnly={props.readOnly}
      />
    </>
  );
};

/*========
👉 Submit
=========*/

const Submit = (props: ISubmit) => {
  return (
    <>
      <input
        type="submit"
        id={props.id}
        className={`input_submit ${props.class}`}
        onClick={props.onClick}
        value={props.value}
      />
    </>
  );
};

// =================================================== Form Components End ==================================================

export {
  Input,
  LabelInput,
  IconLabelInput,
  IconInput,
  Checkbox,
  Radio,
  Select,
  Textarea,
  Submit,
};
