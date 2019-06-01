import * as React from 'react';
import { connect } from 'react-redux';
import { Store } from '../store/types';
import actions, {
  incrementAction,
  decrementAction
} from '../store/actions/counter';

// 方式一、使用之前定义的类型
// interface Props {
//   title: string;
//   number: number;
//   increment: () => incrementAction;
//   decrement: () => decrementAction;
// }
// 方式二、动态的判断数据类型
type mapStateToPropsType = ReturnType<typeof mapStateToProps>;
type actionsType = typeof actions;
// 使用&取并集
type Props = mapStateToPropsType & actionsType & { title: string };

class Counter3 extends React.Component<Props> {
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
const mapStateToProps = (state: Store): Store => state;
export default connect(
  mapStateToProps,
  actions
)(Counter3);
