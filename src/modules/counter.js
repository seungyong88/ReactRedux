/* 타입 설정 */
const INCREASE = 'counter/increase';
const DECREASE = 'counter/decrease';
const SET_DIFF = 'counter/setDiff';

/* 액션 객체 생성 */
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });
export const setDiff = diff => ({ type: SET_DIFF, diff });

// 초기 값
const initialState = {
  number: 0,
  diff: 1,
}

function counter(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return {
        ...state, 
        number: state.number + state.diff
      }
    case DECREASE:
      return {
        ...state, 
        number: state.number - state.diff
      }
    case SET_DIFF:
      return {
        ...state,
        diff: action.diff
      }
    default: return state;
  }
}

export default counter;