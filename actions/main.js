import {
    ACTIVE_OVERLAY_STATE,
    ACTIVE_SERVICE_MODAL_STATE,
    ACTIVE_SUCCESS_MODAL_STATE,
    CHANGE_SERVICE_STATE,
    CHANGE_SERVICE_TAB_STATE,
    DEACTIVE_MODAL_STATE,
    DEACTIVE_SERVICE_MODAL_STATE,
    DEACTIVE_SUCCESS_MODAL_STATE
} from '../types';

export const activateSuccessModalState = () => {
    return {
        type: ACTIVE_SUCCESS_MODAL_STATE,
        payload: true
    }
};
const activeServiceModalState = () => {
    return {
        type: ACTIVE_SERVICE_MODAL_STATE,
        payload: true
    }
};

const activeOverlayState = () => {
    return {
        type: ACTIVE_OVERLAY_STATE,
        payload: true
    }
};

export const deactivateSuccessModalState = () => {
    return {
        type: DEACTIVE_SUCCESS_MODAL_STATE,
        payload: false
    }
};


export const deactivateModalState = () => {
    return {
        type: DEACTIVE_MODAL_STATE,
        payload: false
    }
};


export const deactivateServiceMadalState = () => {
    return {
        type: DEACTIVE_SERVICE_MODAL_STATE,
        payload: false
    }
};


export const changeServiceState = e => {
    return {
        type: CHANGE_SERVICE_STATE,
        payload: e
    }
};


export const changeServiceTabState = e => {
    return {
        type: CHANGE_SERVICE_TAB_STATE,
        payload: e
    }
};

export const enableServiceModal = () => dispatch => {
    dispatch(activeServiceModalState);
    dispatch(activeOverlayState);
};


export {
    activeServiceModalState,
    activeOverlayState
};

