import * as React from 'react';
import { connect } from 'react-redux';
import { Counter } from '../store/reducers/counter1';
import { RootState } from './../store/reducers';
import actions from '../store/actions/counter1';

// 方式二、动态的判断数据类型
type mapStateToPropsType = ReturnType<typeof mapStateToProps>;
type actionsType = typeof actions;
// 使用&取并集
type Props = mapStateToPropsType & actionsType;

class Counter4 extends React.Component<Props> {
  render() {
    const { number, increment, decrement } = this.props;
    return (
      <div>
        <p>计数器1</p>
        <p>{number}</p>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
    );
  }
}
const mapStateToProps = (state: RootState): Counter => state.counter1;
export default connect(
  mapStateToProps,
  actions
)(Counter4);
