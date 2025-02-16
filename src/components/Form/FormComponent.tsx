import React, { memo, useState } from "react";

/* Styles */
import "./FormComponent.scss";

/* Interface */
import type {
  ICheckbox,
  IIconLabelInput,
  IIconInput,
  IInput,
  ILabelInput,
  ISelect,
  ISubmit,
  ITextarea,
} from "../../interface/formComponent";

/* Icons */
import { AiOutlineEye } from "react-icons/ai";
import BlinkLoader from "../Loader/Loader";

// ================================================= Form Components Start =================================================

/*==================
👉 Input With Label
===================*/

const MyInput = memo((props: ILabelInput) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <div className="input_wrapper label_input_wrapper">
        {props.labelName && (
          <label htmlFor={props.id} className="label input_label">
            {props.labelName}
          </label>
        )}

        {props.type === "password" && (
          <AiOutlineEye
            className="eye_icon"
            onClick={() => setShowPassword(!showPassword)}
          />
        )}

        <input
          type={`${
            props.type === "password"
              ? showPassword
                ? "text"
                : "password"
              : props.type
          }`}
          id={props.id}
          className="input Label_input"
          placeholder={props.placeholder}
          name={props.labelName}
          onClick={props.onClick}
          onChange={props.onChange}
          value={props.value}
          autoComplete={props.type === "password" ? "new-password" : "off"}
          required={props.required}
          disabled={props.disabled}
          readOnly={props.readOnly}
        />
      </div>
      {props.error && <p className="error">{props.error}</p>}
    </>
  );
});

/*=================
👉 Input With Icon
==================*/

const IconInput = memo((props: IIconInput) => {
  const [showPassword, setShowPassword] = useState(true);

  return (
    <>
      <div className={`icon_input_wrapper ${props.class}`}>
        <props.icon className="icon" />

        {props.type === "password" && (
          <AiOutlineEye
            className="icon eye_icon"
            onClick={() => setShowPassword(!showPassword)}
          />
        )}

        <input
          type={`${
            props.type === "password"
              ? showPassword
                ? "password"
                : "text"
              : props.type
          }`}
          className="icon_input normal_icon_input"
          placeholder={props.placeholder}
          name={props.name ? props.name : "myInput"}
          value={props.value}
          autoComplete={props.type === "password" ? "new-password" : "off"}
          required={props.required}
          disabled={props.disabled}
          readOnly={props.readOnly}
          onClick={props.onClick}
          onChange={props.onChange}
        />
      </div>
      {props.error && <p className="error">{props.errorMsg}</p>}
    </>
  );
});

/*=========================
👉 Input With Label & Icon
==========================*/

const IconLabelInput = memo((props: IIconLabelInput) => {
  const [showPassword, setShowPassword] = useState(false);

  const labelName = props.labelName.toLowerCase().split(" ").join("-");

  return (
    <>
      <div className={`icon_input_wrapper ${props.class}`}>
        <props.icon className="icon" />

        {props.type === "password" && (
          <AiOutlineEye
            className="icon eye_icon"
            onClick={() => setShowPassword(!showPassword)}
          />
        )}

        <input
          type={`${
            props.type === "password"
              ? showPassword
                ? "text"
                : "password"
              : props.type
          }`}
          className="icon_input"
          id={props.id}
          placeholder={props.placeholder}
          name={labelName}
          value={props.value}
          autoComplete={props.type === "password" ? "new-password" : "off"}
          required={props.required}
          disabled={props.disabled}
          readOnly={props.readOnly}
          onClick={props.onClick}
          onChange={props.onChange}
        />
        <label
          htmlFor={labelName}
          className={`input_label ${props.value ? "top" : ""}`}
        >
          {props.labelName}
        </label>
      </div>
      {props.error && <p className="error">{props.errorMsg}</p>}
    </>
  );
});

/*==========
👉 Checkbox
===========*/

const Checkbox = memo((props: ICheckbox) => {
  return (
    <>
      <input
        type="checkbox"
        id={props.id}
        name={props.name ? props.name : "myCheckbox"}
        className={`input_checkbox ${props.class}`}
        value={props.labelName}
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
        {props.labelName}
      </label>
      {props.error && <p className="error">{props.errorMsg}</p>}
    </>
  );
});

/*=======
👉 Radio
========*/

const Radio = memo((props: ICheckbox) => {
  return (
    <>
      <input
        type="radio"
        id={props.labelName}
        name={props.name ? props.name : "myInput"}
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
      {props.error && <p className="error">{props.errorMsg}</p>}
    </>
  );
});

/*========
👉 Select
=========*/

const SingleSelect = memo((props: ISelect) => {
  return (
    <>
      <label
        htmlFor={props.labelName}
        className={`input_label ${props.labelClass}`}
      >
        {props.labelName}
      </label>
      <br />
      <select
        id="category"
        className={`input_select  ${props.class}`}
        name={props.labelName}
        required={props.required}
        disabled={props.disabled}
      >
        <option value="" disabled selected hidden>
          Select Options
        </option>
        {props.options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      {props.error && <p className="error">{props.errorMsg}</p>}
    </>
  );
});

const MultiSelect = (props: ISelect) => {};

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
      <br />
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
      {props.error && <p className="error">{props.errorMsg}</p>}
    </>
  );
};

/*========
👉 Submit
=========*/

const Submit = memo((props: ISubmit) => {
  console.log("loading", props.loading);

  return (
    <button className="myBtn input_submit" onClick={props.onClick}>
      {props.loading ? <BlinkLoader /> : "Submit"}
    </button>
  );
});

// =================================================== Form Components End ==================================================

export {
  MyInput,
  IconLabelInput,
  IconInput,
  Checkbox,
  Radio,
  SingleSelect,
  MultiSelect,
  Textarea,
  Submit,
};
