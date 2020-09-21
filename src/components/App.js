import React, { useState, useEffect } from 'react';
import './App.css';
import CreateProblem from './CreateProblem.js';
import ShowProblems from './ShowProblems.js';
import ShowStat from './ShowStat.js';

import { authService, firebaseInstance } from '../fbase.js';

function App() {
    const [init, setInit] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showProblems, setShowProblems] = useState(true);
  const [userObj, setUserObj] = useState(null);
    useEffect(() => {
        authService.onAuthStateChanged((user) => {
            if (user) {
                setIsLoggedIn(true);
				setUserObj(user);
            } else {
                setIsLoggedIn(false);
            }
            setInit(true);
        });
    }, []);

    const onLoginClick = async (event) => {
        const {
            target: { name },
        } = event;
        const provider = new firebaseInstance.auth.GoogleAuthProvider();
        const data = await authService.signInWithRedirect(provider);
    };

    const onLogOutClick = async () => {
        await authService.signOut();
    };


    return (
        <>
            {init ? (
                <>
                    {isLoggedIn || (
                        <button onClick={onLoginClick} style={{margin:'auto'}}>Google Login</button>
                    )}
                    {!isLoggedIn || (
                        <button onClick={onLogOutClick} style={{margin:'auto'}}>Log out</button>
                    )}
                    {isLoggedIn && (
                        <div className="App">
							
                            <CreateProblem />
                            <input
                                type="button"
                                value="오답보기"
                                style={{
                                    margin: 5,
                                    width: 100,
                                    height: 40,
                                    fontSize: '1rem',
                                }}
                                onClick={() =>
                                    setShowProblems(true)
                                }
                            />
                            <input
                                type="button"
                                value="통계보기"
                                style={{
                                    margin: 5,
                                    width: 100,
                                    height: 40,
                                    fontSize: '1rem',
                                }}
                                onClick={() =>
                                    setShowProblems(false)
                                }
                            /><br/>
                            {showProblems && <ShowProblems />}
                            {showProblems || <ShowStat />}
                        </div>
                    )}
                </>
            ) : (
                <div>Loading...</div>
            )}
        </>
    );
}

export default App;