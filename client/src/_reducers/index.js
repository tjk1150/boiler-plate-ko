/*
    reducer 가 하는 일은 state가 변하는 것을 보여주고 마지막 값을 return 해 주는 것입니다.
    state 는 성격에 따라 다양하게 존재합니다. (userstate, poststate, commentstate 등)
    따라서 reducer 도 다양하게 존재할 수 있습니다.
    따라서 reducer 가 들어있는 store 안에는 여러가지 reducer 가 있을 수 있습니다.
    combineReducers 는 여러가지 reducer 를 root reducer 에서 하나로 합쳐주는 일을 합니다.
 */

import { combineReducers } from 'redux';
import user from './user_reducer'

const rootReducer = combineReducers({
    user
})

export default rootReducer;