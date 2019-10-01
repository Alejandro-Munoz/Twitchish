import { SIGN_IN, SIGN_OUT } from './types';

export const signIn = () => {
    return {
        type: SIGN_IN
    };
};

export const signOut = (userId) => {
    return {
        type: SIGN_OUT,
        payload: userId,

    };
};