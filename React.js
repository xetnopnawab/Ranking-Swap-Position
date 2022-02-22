import { useEffect, useState } from "react";
import "./styles.css";

export default function CompA() {
  const [btnArr, setBtnArr] = useState([]);

  useEffect(() => {
    setBtnArr(["first", "second", "third"]);
  }, []);

  const handleClick = (index) => {
    let temp_state = [...btnArr];

    // 2. Make a shallow copy of the element you want to mutate

    if (btnArr[index - 1]) {
      const beforeItem = btnArr[index - 1];
      const currentItem = btnArr[index];
      // 3. Update the property you're interested in

      // 4. Put it back into our array. N.B. we are mutating the array here, but that's why we made a copy first
      temp_state[index] = beforeItem;
      temp_state[index - 1] = currentItem;
      console.log("temp_state 1", beforeItem, currentItem, temp_state);
    } else {
      const beforeItem = btnArr[btnArr?.length - 2];
      const currentItem = btnArr[index];
      const afterItem = btnArr[btnArr?.length - 1];
      // 3. Update the property you're interested in

      // 4. Put it back into our array. N.B. we are mutating the array here, but that's why we made a copy first
      temp_state[index] = beforeItem;
      temp_state[index + 1] = afterItem;
      temp_state[index + 2] = currentItem;
      console.log("temp_state 2", beforeItem, currentItem, afterItem);
    }

    // 5. Set the state to our new copy
    setBtnArr(temp_state);
  };

  // useEffect(() => {
  //   setBtnArr(btnArr);
  // }, [btnArr]);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      {btnArr?.map((item, index) => (
        <div key={index}>
          <span>v</span>
          <button style={{ marginRight: "15px", marginLeft: "15px" }}>
            {item}
          </button>
          <span onClick={() => handleClick(index)}>A</span>
        </div>
      ))}
    </div>
  );
}
