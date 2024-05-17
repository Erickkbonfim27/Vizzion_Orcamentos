import React from "react";
import FormAsset from "../../Assets/Rectangle 17.png";

export default function input({
  type,
  text,
  nome,
  placeholder,
  handleOnChange,
  value,
  multiple,
}) {
  return (
    <div className='form_control'>
      <label htmlFor={nome}>
        <img src={FormAsset} alt="asset" />
        {text}:
      </label>
      <input 
        type={type}
        name={nome}
        id={nome}
        placeholder={placeholder}
        onChange={handleOnChange}
        value={value}
        {...(multiple ? {multiple} : "")}
      />
    </div>
  );
}
