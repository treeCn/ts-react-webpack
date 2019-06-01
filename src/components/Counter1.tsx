import * as React from 'react';
interface Props {
  name: string;
}
interface State {
  number: number;
  amount: number;
}
export default class Counter1 extends React.Component<Props, State> {
  state = { number: 0, amount: 1 };

  add = () => {
    this.setState({ number: this.state.number + 1 });
  };
  inputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let value = event.target.value;
    this.setState({ amount: parseInt(value) });
  };
  add1 = () => {
    this.setState({ number: this.state.number + this.state.amount });
  };
  render() {
    const { name } = this.props;
    const { number, amount } = this.state;
    let style: React.CSSProperties = {
      color: '#f00',
      width: '200px',
      height: '30px',
      background: '#e5e5e5'
    };
    return (
      <div>
        <p>{name}</p>
        <p>{number}</p>
        <button onClick={this.add}>+</button>
        <hr />
        <input type="text" value={amount} onChange={this.inputChange} />
        <button onClick={this.add1} style={style}>
          根据输入框的值添加
        </button>
      </div>
    );
  }
}
