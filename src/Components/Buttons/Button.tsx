import React from 'react'

type Button = {
    children: JSX.Element | string,
    className: string,
    onClick?: () => void; // Make onClick optional

}

function Button({ children, className,onClick }: Button) {
    return (
        <button
            type="submit"
            onClick={onClick}
            className={className}
        
        >
        {children}
        </button>
    )
}

export default Button