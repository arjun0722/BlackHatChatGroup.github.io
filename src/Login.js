import { Button } from '@material-ui/core';
import React from 'react';
import './Login.css';
import {auth,provider} from './firebase';
import { actionTypes } from './reducer';
import { useStateValue } from './StateProvider';

function Login() {
    const [{},dispatch] = useStateValue();
    const signIn = () => {
        auth
            .signInWithPopup(provider)
            .then((result) => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                })
            })
            .catch((error) => alert(error.message));
    }
    return (
        <div className="login">
           <div className="login_container">
               <img src="https://imgs.search.brave.com/BwF76F97LA0F7pBac8JXoQn2pl43TVcc_DEDn1PFZRs/rs:fit:768:500:1/g:ce/aHR0cHM6Ly90aGUt/ZGFyay13ZWIuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDIx/LzAyL2Jsa2hhdGp4/bHJ2YzVhZXZxeno1/dDZreGxkYXlvZzZq/bHg1aDdnbG51NDRl/dXpvbmdsNGZoNWFk/LTc2OHg1MDAucG5n" alt=""/> 
                <div className="login_text">
                    <h1>Greeting Patron , Sign In Here To Become The Part Of "The Legion"</h1>
                </div>
                <Button type="submit" onClick={signIn}>Sign in With Google</Button>
           </div>
        </div>
    );
}

export default Login
