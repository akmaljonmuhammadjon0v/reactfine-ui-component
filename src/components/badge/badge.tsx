import React from 'react';
import { cn } from '../../lib/utils';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
	variant?: 'default' | 'success' | 'warning' | 'danger' | 'outline' | 'dark';
	size?: 'default';
	rounded?: 'sm' | 'md' | 'lg' | 'full';
}

export const Badge: React.FC<BadgeProps> = ({
	children,
	variant = 'default',
	size = 'default',
	rounded = 'md',
	className,
	...props
}) => {
	const variantClasses = {
		default: 'bg-blue-500 text-white',
		success: 'bg-green-600 text-white',
		warning: 'bg-yellow-400 text-black',
		danger: 'bg-red-500 text-white',
		outline: 'border border-gray-300 text-gray-800 bg-transparent',
		dark: 'bg-black text-white',
	};

	const sizeClasses = {
		default: 'text-[13px] px-3 py-0.5',
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
				'inline-flex items-center font-semibold',
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
