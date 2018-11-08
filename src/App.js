import React, { Component } from "react";

class App extends Component {
    state = {
        count: 0
    };
    
    render() {
        const { count } = this.state;
        const handleClick = () => {
            this.setState({ count: count+1});
        };

        return (
            <div>
                You have clicked {count} times!
                <button onClick={handleClick}>Test me</button>
            </div>
        )
    }

}

export default App;
