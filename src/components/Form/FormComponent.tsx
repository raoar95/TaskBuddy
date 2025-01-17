import React, { useState } from "react";

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

// ================================================= Form Components Start =================================================

/*=====================
👉 Input Without Label
======================*/

const Input = (props: IInput) => {
  const [showPassword, setShowPassword] = useState(true);

  return (
    <div className="input_wrapper">
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
              ? "password"
              : "text"
            : props.type
        }`}
        id={props.id || ""}
        className={`input ${props.class || ""}`}
        placeholder={props.placeholder || ""}
        autoComplete={props.type === "password" ? "new-password" : "off"}
        name={props.name ? props.name : "myInput"}
        onClick={props.onClick}
        onChange={props.onChange}
        value={props.value}
        autoFocus={props.autoFocus}
        required={props.required}
        disabled={props.disabled}
        readOnly={props.readOnly}
      />
    </div>
  );
};

/*==================
👉 Input With Label
===================*/

const LabelInput = (props: ILabelInput) => {
  const [showPassword, setShowPassword] = useState(true);

  return (
    <>
      <div className="input_wrapper label_input_wrapper">
        <label
          htmlFor={props.id || ""}
          className={`input_label ${props.labelClass || ""}`}
        >
          {props.labelName || ""}
        </label>{" "}
        <br />
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
                ? "password"
                : "text"
              : props.type
          }`}
          id={props.id || ""}
          className={`input Label_input ${props.class || ""}`}
          placeholder={props.placeholder || ""}
          autoComplete={props.type === "password" ? "new-password" : "off"}
          name={props.labelName || ""}
          onClick={props.onClick}
          onChange={props.onChange}
          value={props.value}
          // required={props.required}
          disabled={props.disabled}
          readOnly={props.readOnly}
          required
        />
      </div>
    </>
  );
};

/*=========================
👉 Input With Label & Icon
==========================*/

const IconLabelInput = (props: IIconLabelInput) => {
  const [isInputEmpty, setIsInputEmpty] = useState(true);
  const [showPassword, setShowPassword] = useState(true);

  const handleFocusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "") {
      setIsInputEmpty(true);
    } else {
      setIsInputEmpty(false);
    }
  };

  return (
    <div className="icon_input_wrapper">
      <props.icon className={`icon ${props.iconClass}}`} />

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
        className={`icon_input ${props.class || "" || ""}`}
        placeholder={props.placeholder || ""}
        autoComplete={props.type === "password" ? "new-password" : "off"}
        name={props.labelName.toLowerCase().split(" ").join("-")}
        value={props.value}
        required={props.required}
        disabled={props.disabled}
        readOnly={props.readOnly}
        onChange={(e) => {
          props.onChange && props.onChange(e);
          handleFocusChange(e);
        }}
      />
      <label
        htmlFor={props.labelName || ""}
        className={`input_label ${isInputEmpty ? "" : "top"} ${
          props.labelClass || ""
        }`}
      >
        {props.labelName || ""}
      </label>
    </div>
  );
};

/*=================
👉 Input With Icon
==================*/

const IconInput = (props: IIconInput) => {
  const [showPassword, setShowPassword] = useState(true);

  return (
    <div className="icon_input_wrapper">
      <props.icon className={`icon ${props.iconClass || ""}`} />

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
        className={`icon_input normal_icon_input ${props.class || ""}`}
        placeholder={props.placeholder || ""}
        autoComplete={props.type === "password" ? "new-password" : "off"}
        name={props.name ? props.name : "myInput"}
        value={props.value}
        required={props.required}
        disabled={props.disabled}
        readOnly={props.readOnly}
        onChange={props.onChange}
      />
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
        name={props.name ? props.name : "myCheckbox"}
        className={`input_checkbox ${props.class || ""}`}
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
        className={`input_label ${props.labelClass || ""}`}
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
        id={props.labelName || ""}
        name={props.name ? props.name : "myInput"}
        className={`input_radio ${props.class || ""}`}
        required={props.required}
        disabled={props.disabled}
        readOnly={props.readOnly}
        defaultChecked={props.checked}
      />
      <label
        htmlFor={props.labelName || ""}
        className={`input_label ${props.labelClass || ""}`}
        onClick={props.labelClickFunc}
      >
        {props.labelName || ""}
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
        htmlFor={props.labelName || ""}
        className={`input_label ${props.labelClass || ""}`}
      >
        {props.labelName || ""}
      </label>
      <select
        id="category"
        className={`input_select  ${props.class || ""}`}
        name={props.labelName || ""}
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
        htmlFor={props.labelName || ""}
        className={`input_label ${props.labelClass || ""}`}
      >
        {props.labelName || ""}
      </label>
      <textarea
        name={props.labelName || ""}
        className={`input_textarea  ${props.class || ""}`}
        placeholder={props.placeholder || ""}
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
        id={props.id || ""}
        className={`myBtn input_submit ${props.class || ""}`}
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
