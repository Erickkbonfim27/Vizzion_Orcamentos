import React from "react";
import FormAsset from "../../Assets/Rectangle 17.png";

export default function TextArea({
  text,
  nome,
  placeholder,
  rows,
  handleOnChange,
}) {
  return (
    <div className="form_control">
      <label htmlFor={nome}>
        <img src={FormAsset} alt="asset" />
        {text}:
      </label>
      <textarea
        name={nome}
        id={nome}
        rows={rows}
        placeholder={placeholder}
        onChange={handleOnChange}
      >
        
      </textarea>
    </div>
  );
}
