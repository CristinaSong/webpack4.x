import React, {useState, useEffect} from 'react';

export default function Example() {
    const [count, setCount] = useState(0);
    const [age, setAge] = useState(18);
    const [fruit, setFruit] = useState('banana');
    const [todos, setTodos] = useState([{text: 'Learn Hooks'}, {text: 'Learn React'}]);
    // 相当于 componentDidMount 和 componentDidUpdate:
    useEffect(() => {
        // 使用浏览器的 API 更新页面标题
        document.title = `You clicked ${count} times`;
    });

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
          Click me
            </button>

            <p>I am {age} years old</p>
            <button onClick={() => setAge(age + 1)}>
          age
            </button>

            <p>{fruit}</p>
            <button onClick={() => {
                setFruit('apple');
            }}>fruit</button>

        </div>
    );
}
