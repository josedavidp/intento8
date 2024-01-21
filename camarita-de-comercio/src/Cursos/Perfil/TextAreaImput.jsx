import { useState, useEffect } from "react";

function InputText({ labelTitle, labelStyle, type, containerStyle, defaultValue, placeholder, updateFormValue, updateType }) {
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    // Actualizar el valor cuando defaultValue cambia externamente
    setValue(defaultValue);
  }, [defaultValue]);

  const updateInputValue = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
    updateFormValue({ name: updateType, value: newValue });
  };
  
  return (
    <div className={`form-control w-full ${containerStyle}`}>
      <label className="label">
        <span className={"label-text text-base-content text-blue font-semibold " + labelStyle}>{labelTitle}</span>
      </label>
      <input 
        type={type || "text"} 
        value={value} 
        placeholder={placeholder || ""} 
        onChange={updateInputValue} 
        className="input input-bordered w-full bg-white" 
      />
    </div>
  );
}

export default InputText;
