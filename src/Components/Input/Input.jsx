import React from "react";

function Input(props) {
  const { lbl, id } = props;
  return (
    <fieldset className="flex flex-col">
      <label htmlFor={id} className="mb-3">
        {lbl}
      </label>
      <input
        className="px-3 py-1 outline-none bg-slate-200 border border-slate-300 rounded-md"
        id={id}
        type="text"
      />
    </fieldset>
  );
}

export default Input;
