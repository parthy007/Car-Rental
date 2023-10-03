import { loginFailure, loginStart, loginSuccess, logout } from "./AuthAction";

export const login = async(user,dispatch)=>{
    dispatch(loginStart());
    try{
        const res = await fetch(`https://car-rental-backend-kappa.vercel.app/auth/login`, {
            method: "POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(user),
            credentials: 'include'
        });

        if(!res.ok){
            dispatch(loginFailure());
            return;
        }
        const data = await res.json();
        dispatch(loginSuccess(data))
    }catch(err){
        dispatch(loginFailure())
    }
};

export const logoutCall = (dispatch) => {
    dispatch(logout());
};