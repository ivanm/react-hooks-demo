import React, { useState } from "react";

const App = () => {
    const [count, setCount] = useState(0);
    const handleClick = () => {
        setCount(count+1);
    };

    return (
        <div>
            You have clicked {count} times!
            <button onClick={handleClick}>Test me</button>
        </div>
    );
};

export default App;
