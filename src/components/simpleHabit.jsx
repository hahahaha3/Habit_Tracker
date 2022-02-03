import React, { useCallback, useEffect, useRef, useState } from 'react';

const SimpleHabit = (props) => {
  // state = {
  //   count: 0,
  // };
  const [count, setCount] = useState(0);
  const spanRef = useRef();

  const handleIncrement = useCallback(() => {
    setCount( count + 1 );
  });

  useEffect(() => {
    console.log(`mounted & update!: ${count}`);
  }, [count, name, age]);
// 두번째 인자에 어떤 값이 변경이 되었을 때만 이 함수를 호출되도록 만들 수 있음. count라는 데이터를 넘겨주면 이 count가 변경될때마다 이 함수가 호출 됨
// 이것을 아무것도 전달하지 않으면 기존에 있는 이 state나 props이 변경될때마다 이것이 호출되고,,, 만약 아무것도 전달하지 않는 텅텅 비어있는 배열을 전달하면 처음에만 호출 됨
// 두번째 인자 텅텅비어진 배열을 하면 처음에만 호출하는거임, 그리고 내가 원하는 데이터가 변경이 되어있을때만 실행이 되고 싶으면 그것을 전달해주면 됨
  return (
    <li className="habit">
      <span ref={spanRef} className="habit-name">Reading</span>
      <span className="habit-count">{count}</span>
      <button className="habit-button habit-increase" onClick={handleIncrement}>
        <i className="fas fa-plus-square"></i>
      </button>
    </li>
  );
}

export default SimpleHabit;
