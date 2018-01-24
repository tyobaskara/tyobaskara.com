import React from 'react';

export const LoadingRequest = () => {
    return (
        <div className="data-loading text-center" style={{color: 'white'}}>Loading...</div>
    )
}

export const FailedRequest = () => {
    return (
        <div className="data-loading text-center" style={{color: 'white'}}>Try again later..</div>
    )
}