import React from "react";

function TodoForm() {
  return (
    <>
      <form className="newForm" onSubmit={handleClick}>
        <div className="form-group">
          <label htmlFor="item">mr-fox93</label>
          <input
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
            type="text"
            id="item"
            placeholder="put something here ... :) "
          />
          <button className="btn">ADD</button>
        </div>
      </form>
    </>
  );
}

export default TodoForm;
