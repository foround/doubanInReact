const reducerGenerator = (category) => function(state,action){
    const REQUEST_LIST = Symbol.for(`${category}_REQUEST_LIST`);
    const RECEIVE_LIST = Symbol.for(`${category}_RECEIVE_LIST`);
    if(!state){
        state = {
            records: {}
        }
    }
    switch (action.type) {
        case REQUEST_LIST:
            console.log(action.payload);
            break;
        case RECEIVE_LIST:
            let response = action.payload;
            if(response.data.errorCode === 0){
                console.log(action)
                state = action.translateMiddleWare(response)
            }
            break;
        default:
            break;
    }
    return state;
}
//  正在热映
const inTheatersReducer = reducerGenerator("in_theaters");
//  前250
const top250Reducer = reducerGenerator("top250");
const usBoxReducer = reducerGenerator("us_box");
export {inTheatersReducer,top250Reducer,usBoxReducer}