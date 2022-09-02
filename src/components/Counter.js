import React from "react";
import '../assets/css/counter.css'

//trasnformando componente stateless em stateful

class Counter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            number: props.initialNumber
        };
    }

    increment() {
        this.setState({
            number: this.state.number + 1
        });
    }

    decrement() {
        this.setState({
            number: this.state.number - 1
        });
    }

    componentDidMount(){
        console.log("O componente foi montado!");
    }

    componentDidUpdate(){
        console.log("O componente foi atualizado!");
    }

    render() {
        console.log('O componeten foi renderizado!');
        return (
            <div className="contador">
                <h1>O número é: { this.state.number } </h1>
                <button onClick={ () => this.increment() }>Increment</button>
                <button onClick={ () => this.decrement() }>Decrement</button>
            </div>
        )
    }
}

export default Counter;
