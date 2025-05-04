import React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: 'primary' | 'secondary' | 'outline' | 'destructive';
    size?: 'sm' | 'md' | 'lg';
};

export const Button: React.FC<ButtonProps> = ({
    className = '',
    variant = 'primary',
    size = 'md',
    ...props
}) => {
    const base = 'uppercase font-semibold transition-colors duration-200 focus:outline-none';

    const variants = {
        primary: 'bg-[#A67C52] text-white hover:bg-[#8c6844]',
        secondary: 'bg-[#FFF1E6] text-[#333333] hover:bg-[#ffe7d2] border border-[#F49E9E]',
        outline: 'border border-gray-400 text-gray-700 bg-white hover:bg-gray-100',
        destructive: 'bg-red-500 text-white hover:bg-red-600',
    };

    const sizes = {
        sm: 'px-3 py-1 text-sm',
        md: 'px-4 py-2 text-base',
        lg: 'px-5 py-3 text-lg',
    };

    const noRadius = 'rounded-none';

    return (
        <button
            className={`${base} ${variants[variant]} ${sizes[size]} ${noRadius} ${className}`}
            {...props}
        >
            {props.children}
        </button>
    );
};
