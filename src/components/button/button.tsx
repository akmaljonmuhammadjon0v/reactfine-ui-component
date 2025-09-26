import React from 'react';
import { Loader } from 'lucide-react';

import { ButtonProps } from '@/types';

// Button component with TypeScript
const Button: React.FC<ButtonProps> = ({
	children,
	variant = 'primary',
	size = 'default',
	loading = false,
	focus,
	className,
	disabled,
	rounded = 'default',
	...restProps
}: ButtonProps) => {
	const variantClasses = {
		primary: 'bg-blue-600 text-white hover:bg-blue-700',
		secondary: 'bg-gray-400 text-white hover:bg-gray-400/80',
		danger: 'bg-[#DC3545] text-white hover:bg-rose-500',
		success: 'bg-green-700 text-white hover:bg-green-800',
		outline: 'border border-gray-300 text-gray-900 hover:bg-gray-100',
		dark: 'bg-black text-white hover:bg-black/70',
	};

	const sizeClasses = {
		small: 'h-9 px-4 text-sm',
		default: 'h-10 px-5 text-base',
		large: 'h-12 px-7 text-lg',
		icon: 'h-10 w-10 p-0',
	};

	const roundedClasses = {
		sm: 'rounded-sm',
		default: 'rounded-md',
		lg: 'rounded-lg',
		full: 'rounded-full',
	};

	const focusClasses = {
		primary:
			'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500',
		secondary:
			'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400',
		danger:
			'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500',
		success:
			'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500',
		outline:
			'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300',
		dark: 'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black',
	};

	// Base classes
	const baseClasses =
		'inline-flex gap-2 items-center cursor-pointer justify-center font-medium transition-colors disabled:opacity-50 disabled:pointer-events-none';
	// cn
	const cn = (...classes: (string | undefined | false | null)[]) => {
		return classes.filter(Boolean).join(' ');
	};

	const buttonClasses = cn(
		baseClasses,
		// Default styles (can be overridden)
		!className?.includes('bg-') && variantClasses[variant],
		!className?.includes('rounded') && roundedClasses[rounded],
		sizeClasses[size],
		focusClasses[focus || variant],
		loading && 'opacity-70 pointer-events-none',
		// Custom className at the end for override
		className
	);

	return (
		<button
			className={buttonClasses}
			disabled={disabled || loading}
			{...restProps}
			aria-label={children ? String(children) : 'Button'}
		>
			{loading && <Loader className='animate-spin mr-2 h-4 w-4' />}
			{children}
		</button>
	);
};
export default Button;
