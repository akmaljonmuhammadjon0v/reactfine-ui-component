import React from 'react';
import { cn } from '../../lib/utils';

// Card asosiy komponenti
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
	children: React.ReactNode;
	shadow?: 'none' | 'sm' | 'md' | 'lg';
	border?: boolean;
	hoverable?: boolean;
	rounded?: 'sm' | 'md' | 'lg' | 'xl';
	width?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Card: React.FC<CardProps> = ({
	children,
	shadow = 'sm',
	width = 'md',
	border = true,
	hoverable = false,
	rounded = 'md',
	className = '',
	...restProps
}) => {
	const shadowMap = {
		none: 'shadow-none',
		sm: 'shadow-sm',
		md: 'shadow-md',
		lg: 'shadow-lg',
	};

	const roundedMap = {
		sm: 'rounded-sm',
		md: 'rounded-md',
		lg: 'rounded-lg',
		xl: 'rounded-xl',
	};
	const widthMap = {
		sm: 'max-w-sm',
		md: 'max-w-md',
		lg: 'max-w-lg',
		xl: 'max-w-xl',
	};

	return (
		<div
			className={cn(
				'bg-white transition-shadow duration-200 p-1', // ← Faqat max-w-md qo'shildi
				shadowMap[shadow],
				border && 'border border-gray-200',
				hoverable && 'hover:shadow-lg cursor-pointer',
				roundedMap[rounded],
				widthMap[width],
				className
			)}
			{...restProps}
		>
			{children}
		</div>
	);
};

// CardHeader
export const CardHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
	children,
	className = '',
	...restProps
}) => (
	<div
		className={cn('px-4 py-3 border-b border-gray-100', className)}
		{...restProps}
	>
		{children}
	</div>
);

// CardTitle
export interface CardTitleProps
	extends React.HTMLAttributes<HTMLHeadingElement> {
	children: React.ReactNode;
	as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export const CardTitle: React.FC<CardTitleProps> = ({
	children,
	as: Component = 'h3',
	className = '',
	...restProps
}) => (
	<Component className={cn('text-lg font-semibold', className)} {...restProps}>
		{children}
	</Component>
);

// CardDescription
export const CardDescription: React.FC<
	React.HTMLAttributes<HTMLParagraphElement>
> = ({ children, className = '', ...restProps }) => (
	<p
		className={cn('text-sm text-gray-500 break-words', className)}
		{...restProps}
	>
		{/* ← Faqat break-words qo'shildi */}
		{children}
	</p>
);

// CardContent
export const CardContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
	children,
	className = '',
	...restProps
}) => (
	<div className={cn('px-4 py-3 break-words', className)} {...restProps}>
		{/* ← Faqat break-words qo'shildi */}
		{children}
	</div>
);

// CardFooter
interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
	align?: 'center' | 'right' | 'left';
}
export const CardFooter: React.FC<CardFooterProps> = ({
	children,
	className = '',
	align = 'left',
	...restProps
}) => {
	const alignmentClasses = {
		center: 'flex justify-center',
		right: 'flex justify-end',
		left: 'flex justify-start',
	};
	return (
		<div
			className={cn(
				'px-4 py-3 pb-5 border-t border-gray-100',
				alignmentClasses[align],
				className
			)}
			{...restProps}
		>
			{children}
		</div>
	);
};
