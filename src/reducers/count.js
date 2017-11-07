import * as countAction from "../actions/constants";

const initialState = {
  number: 1
};
export default function update(state = initialState, action) {
  switch (action.type) {
    case countAction.INCREASE: {
      return { number: state.number + action.amount };
    }
    case countAction.DECREASE: {
      return { number: state.number - action.amount };
    }
    case countAction.GET_DATA:
    case countAction.GET_DATA_SUCCESS:
    case countAction.GET_DATA_FAIL: {
      console.log(action);
      // let { data, success, loading, error } = action.result;
      // if (error && error.error_id === 0) {
      //   return state.setIn(
      //     [uid, "detail"],
      //     Immutable.fromJS({
      //       loading,
      //       success,
      //       data
      //     })
      //   );
      // } else if (error && error.error_id !== 0) {
      //   return state.updateIn([uid, "detail"], detail => {
      //     detail = detail || Immutable.Map();
      //     return detail.merge(
      //       Immutable.fromJS({
      //         loading: false,
      //         success: false
      //       })
      //     );
      //   });
      // } else {
      //   if (action.notLoad) {
      //     return state;
      //   } else {
      //     return state.updateIn([uid, "detail"], detail => {
      //       detail = detail || Immutable.Map();
      //       return detail.merge(
      //         Immutable.fromJS({
      //           loading,
      //           success
      //         })
      //       );
      //     });
      //   }
      // }

      return state;
    }
    default:
      return state;
  }
}
