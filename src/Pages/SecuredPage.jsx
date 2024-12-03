import React from 'react';

const SecuredPage = () => {
    return (
        <div className='text-white'>
            <p className='text-xl my-4'>
                This page is only visible if the user is logged in.
            </p>
            <p className='text-xl'>
                This is a protected route that requires authentication for access.
            </p>
        </div>
    )
}

export default SecuredPage