import * as types from './../action-types';
import { Store } from './../types';
import { Action } from './../actions/counter';

let initState = { number: 0 };
export default (state: Store = initState, action: Action): Store => {
  switch (action.type) {
    case types.INCREMENT:
      return { number: state.number + 1 };
    case types.DECREMENT:
      return { number: state.number - 1 };
    default:
      return state;
  }
};
