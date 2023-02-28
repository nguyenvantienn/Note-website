import { INIT_STATE } from "../../constant";
import { getType ,showModal , hideModal } from "../actions";

export default function modalReducers(state = INIT_STATE.modal, action) {
    // console.log('INIT State  ',state);
    // console.log(action.type);
    switch(action.type){
        case getType(showModal): //
            return {
                ...state,
                isShow :true,
            }
        case getType(hideModal): //
            // console.log('PayLoad  :  ',action.payload);
            return {
                ...state,
                isShow : false,
            }
        default:
            return state;
    }
};