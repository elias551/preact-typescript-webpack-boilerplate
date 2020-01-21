import React, { useState } from 'react';

const App = () => {
    const [counter, setCounter] = useState(0);

    return (
        <div>
            <h1>Hello preact + typescript + webpack + babel + eslint + vscode !</h1>
            <div>Value: {counter}</div>
            <div>
                <button onClick={() => setCounter(counter + 1)}>+</button>
                <button onClick={() => setCounter(counter - 1)}>-</button>
            </div>
        </div>
    );
};

export default App;
