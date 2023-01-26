import React from "react";

const FormField = ({
  labelName,
  type,
  name,
  placeholder,
  value,
  handleChange,
  isSurpriseMe,
  handleSurpriseMe,
}) => {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2"></div>
      <label
        htmlFor="{name}"
        className="block text-sm font-medium text-gray-900"
      ></label>
      {isSurpriseMe && (
        <button
          type="button"
          onClick={handleSurpriseMe}
          className="font-semibold text-xs bg-[#ececf1] py-1 px-2 rounded-[5px] text-black"
        >
          Surprise Me
        </button>
      )}
    </div>
  );
};

export default FormField;
