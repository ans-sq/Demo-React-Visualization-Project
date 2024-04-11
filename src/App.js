import React, { useState } from 'react';
import './App.css';

function TestComponent() {
  const [array, setArray] = useState([
    { value: 1, flag: false, highlight: false },
    { value: 7, flag: false, highlight: false },
    { value: 6, flag: false, highlight: false },
    { value: 3, flag: false, highlight: false },
    { value: 4, flag: false, highlight: false },
    { value: 5, flag: false, highlight: false },
    { value: 2, flag: false, highlight: false }
  ]);

  // const getColor = (num) => {
  //   const hue = (num / 10) * 120;
  //   return `hsl(${hue}, 70%, 50%)`;
  // };

  const delay = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
  };

  const sortArrayRandomly = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  const swap = async (arr, i, j) => {
    arr[i].flag = true;
    arr[j].flag = true;
    setArray([...arr]);

    await delay(300);

    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;

    setArray([...arr]);
    await delay(300);

    arr[i].flag = false;
    arr[j].flag = false;
    setArray([...arr]);
    await delay(300);
  };

  const bubbleSort = async () => {
    let arr = [...array];
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        arr[i].highlight = true;
        arr[j].highlight = true;
        setArray([...arr]);
        await delay(500);

        if (arr[i].value > arr[j].value) {
          await swap(arr, i, j);
        }

        arr[i].highlight = false;
        arr[j].highlight = false;
        setArray([...arr]);
      }
    }
  };

  const resetArray = () => {
    let arr = [...array];
    arr = sortArrayRandomly(arr);
    setArray([...arr]);
  };

  return (
    <div className='host'>
      <div className="container">
        {array.map((num, index) => (
          <div
            key={index}
            className="number"
            style={{
              // color: getColor(num.value),
              backgroundColor: num.flag ? '#ffcdd2' : (num.highlight ? '#c9ddfe' : 'white')
            }}
          >
            {num.value}
          </div>
        ))}
      </div>
      <div className="btn-container">
        <div className="btn">
          <button onClick={bubbleSort}>Sort</button>
        </div>
        <div className="btn">
          <button onClick={resetArray}>Reset Array</button>
        </div>
      </div>
    </div>
  );
}

export default TestComponent;
