import React from 'react';
import { cn } from '../../lib/utils';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
	variant?:
		| 'primary'
		| 'secondary'
		| 'success'
		| 'warning'
		| 'danger'
		| 'outline'
		| 'dark';
	size?: 'sm' | 'md' | 'lg';
	rounded?: 'sm' | 'md' | 'lg' | 'full';
}

export const Badge: React.FC<BadgeProps> = ({
	children,
	variant = 'primary',
	size = 'md',
	rounded = 'md',
	className,
	...props
}) => {
	const variantClasses = {
		primary: 'bg-blue-500 text-white',
		secondary: 'bg-gray-400 text-white',
		success: 'bg-green-600 text-white',
		warning: 'bg-yellow-400 text-black',
		danger: 'bg-red-500 text-white',
		outline: 'border border-gray-300 text-gray-800 bg-transparent',
		dark: 'bg-black text-white',
	};

	const sizeClasses = {
		sm: 'text-[12px] px-2 py-0.5 leading-none',
		md: 'text-[13px] px-3 py-1 leading-none',
		lg: 'text-[14px] px-4 py-1.5 leading-none',
	};

	const roundedClasses = {
		sm: 'rounded-sm',
		md: 'rounded-md',
		lg: 'rounded-lg',
		full: 'rounded-full',
	};

	return (
		<span
			className={cn(
				'inline-flex items-center font-semibold leading-none',
				variantClasses[variant],
				sizeClasses[size],
				roundedClasses[rounded],
				className
			)}
			{...props}
		>
			{children}
		</span>
	);
};
