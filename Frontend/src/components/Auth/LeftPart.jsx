import React from 'react'

function LeftPart() {
    return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white p-8">
        <i className="fab fa-atlassian text-6xl mb-6"></i>
        <h1 className="text-4xl font-bold mb-4">Your Digital Bank, Your Digital Cheque</h1>
        <img src="/check.png"/>
    </div>
    )
}

export default LeftPart
