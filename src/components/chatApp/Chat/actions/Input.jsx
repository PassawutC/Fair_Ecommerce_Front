import React from "react";

function Input({ message, setMessage }) {
  const onChangeHandler = (e) => {
    setMessage(e.target.value);
  };

  return (
    <div className="w-full">
      <input
        type="text"
        className="dark:bg-dark_hover_1 dark:text-dark_text_1 outline-none h-[45px] w-full flex-1 rounded-lg pl-4"
        placeholder="Type a message"
        value={message}
        onChange={onChangeHandler}
      />
    </div>
  );
}

export default Input;
