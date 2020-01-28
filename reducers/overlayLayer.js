import {ACTIVE_OVERLAY_STATE, DEACTIVE_MODAL_STATE} from "../types";

export default function modalState (state = false, action = {}){
    switch (action.type) {
        case ACTIVE_OVERLAY_STATE:
            return  action.payload;
        case DEACTIVE_MODAL_STATE:
            return  action.payload;
        default: return state;
    }
}