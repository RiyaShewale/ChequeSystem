import React from 'react'
import LeftPart from './LeftPart'
import SignUp from './SignUp';
import SignIn from './SignIn';

function Auth({flag}) {
    return (
        <div className="flex min-h-screen">
            <div className="flex-1 bg-blue-500 flex justify-center items-center">
                <LeftPart />
            </div>

            <div className="flex-1 bg-white flex justify-center items-center">
                {flag==1 ? <SignUp/>  : <SignIn/>}
            </div>
        </div>
    )
}

export default Auth;
