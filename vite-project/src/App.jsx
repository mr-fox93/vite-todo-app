import "./App.css";
import { useState } from "react";

function App() {
  const [array, setArray] = useState([]);
  const [value, setValue] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    setArray([
      ...array,
      { id: crypto.randomUUID(), title: value, completed: false },
    ]);
    setValue("");
  };

  const handleCheckboxChange = (id) => {
    setArray((prevState) =>
      prevState.map((item) => {
        if (item.id === id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  console.log(array);
  return (
    <>
      <form className="newForm" onSubmit={handleClick}>
        <div className="form-group">
          <label htmlFor="item">Add item</label>
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

      <span>To do list:</span>
      <ul className="list">
        {array.map((item) => (
          <li key={item.id}>
            <label>
              <input
                type="checkbox"
                checked={item.completed}
                onChange={() => handleCheckboxChange(item.id)}
              />
              <span>
                {item.completed === true ? (
                  <strike> {item.title}</strike>
                ) : (
                  <span>{item.title}</span>
                )}
              </span>
            </label>
            <button
              className="btn-danger"
              onClick={() => {
                setArray(array.filter((i) => i.id !== item.id));
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      <button
        onClick={() => {
          setArray([]);
        }}
        className="btn"
      >
        CLEAR
      </button>
    </>
  );
}

export default App;
