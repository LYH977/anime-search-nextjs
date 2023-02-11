import React from 'react'

type ButtonProps = {
    extraClassName?: string
    onClick: () => void
}

export const Button = ({
    children,
    onClick,
    extraClassName = '',
}: React.PropsWithChildren<ButtonProps>) => {
    const extraStyle = extraClassName ? ` ${extraClassName}` : ''
    return (
        <button
            className={
                'inline-block px-6 py-2.5 primaryBgColor text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out' +
                extraStyle
            }
            onClick={ onClick }
        >
            { children }
        </button>
    )
}
