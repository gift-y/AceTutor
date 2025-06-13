import React from 'react'


const Button = ({
    children,
    className = '',
    size = 'small',
    variant = 'primary'
}) => {

    const buttonSize =
        size === 'large'
            ? 'md:text-lg  md:px-5 md:py-3'
            : 'px-4 py-3 text-sm';

    const buttonVariant =
        variant === 'secondary'
            ? 'bg-[var(--accent-color)] text-[var(--primary-color)]'
            : 'border-2 border-[var(--accent-color)] text-[var(--accent-color)]';

    return (
        <button className={`${buttonVariant} ${buttonSize}  rounded-full font-semibold ${className}`}>
            {children}
        </button>
    )
}

export default Button