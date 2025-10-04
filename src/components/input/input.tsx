import React, { forwardRef } from 'react';
import { cn } from '../../lib/utils';

export interface InputProps
	extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
	label?: string;
	error?: string;
	helperText?: string;
	size?: 'sm' | 'md' | 'lg';
	fullWidth?: boolean;
	startIcon?: React.ReactNode;
	endIcon?: React.ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
	(
		{
			label,
			error,
			helperText,
			size = 'md',
			fullWidth = false,
			startIcon,
			endIcon,
			className = '',
			disabled,
			...restProps
		},
		ref
	) => {
		const sizeClasses = {
			sm: 'text-sm py-1.5',
			md: 'text-base py-2',
			lg: 'text-lg py-2.5',
		};

		const paddingX = 'px-3';

		const iconPaddingLeft = {
			sm: 'pl-8',
			md: 'pl-10',
			lg: 'pl-12',
		};

		const iconPaddingRight = {
			sm: 'pr-8',
			md: 'pr-10',
			lg: 'pr-12',
		};

		const inputClass = cn(
			'appearance-none rounded-md border transition outline-none',
			'flex items-center', // optional: keep vertical alignment consistent
			paddingX,
			sizeClasses[size],
			startIcon && iconPaddingLeft[size],
			endIcon && iconPaddingRight[size],
			disabled
				? 'bg-gray-100 text-gray-400 cursor-not-allowed'
				: 'bg-white text-gray-900',
			error
				? 'border-red-500 focus:ring-2 focus:ring-red-500'
				: 'border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500',
			className
		);

		return (
			<div className={cn('space-y-1', fullWidth && 'w-full')}>
				{label && (
					<label className='block text-sm font-medium text-gray-700'>
						{label}
					</label>
				)}

				<div className='relative'>
					{startIcon && (
						<div className='absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400 pointer-events-none'>
							{startIcon}
						</div>
					)}

					<input
						ref={ref}
						disabled={disabled}
						className={inputClass}
						{...restProps}
					/>

					{endIcon && (
						<div className='absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400'>
							{endIcon}
						</div>
					)}
				</div>

				{(error || helperText) && (
					<p
						className={cn('text-xs', error ? 'text-red-500' : 'text-gray-500')}
					>
						{error || helperText}
					</p>
				)}
			</div>
		);
	}
);

Input.displayName = 'Input';
