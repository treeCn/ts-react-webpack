import * as React from 'react';
import { connect } from 'react-redux';
import { Counter } from '../store/reducers/counter2';
import { RootState } from './../store/reducers';
import actions from '../store/actions/counter2';

// 使用方式二、动态读取类型
type mapStateToPropsType = ReturnType<typeof mapStateToProps>;
type actionsType = typeof actions;
// 使用&取并集
type Props = mapStateToPropsType & actionsType & { title: string };

class Counter5 extends React.Component<Props> {
  render() {
    const { title, number, increment, decrement } = this.props;
    return (
      <div>
        <p>{title}</p>
        <p>{number}</p>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
    );
  }
}
const mapStateToProps = (state: RootState): Counter => state.counter2;
export default connect(
  mapStateToProps,
  actions
)(Counter5);
