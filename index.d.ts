declare module 'reactfine-ui' {
	import * as React from 'react';

	// ========== Badge ==========
	export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
		variant?: 'default' | 'success' | 'warning' | 'danger' | 'outline' | 'dark';
		size?: 'default';
		rounded?: 'sm' | 'md' | 'lg' | 'full';
	}
	export const Badge: React.FC<BadgeProps>;

	// ========== Button ==========
	export interface ButtonProps
		extends React.ButtonHTMLAttributes<HTMLButtonElement> {
		children: React.ReactNode;
		variant?:
			| 'primary'
			| 'secondary'
			| 'danger'
			| 'success'
			| 'outline'
			| 'dark';
		size?: 'small' | 'default' | 'large' | 'icon';
		focus?: 'primary' | 'secondary' | 'danger' | 'success' | 'outline' | 'dark';
		rounded?: 'sm' | 'md' | 'lg' | 'full';
		loading?: boolean;
	}
	export const Button: React.FC<ButtonProps>;

	// ========== Input ==========
	export interface InputProps
		extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
		label?: string;
		error?: string;
		helperText?: string;
		size?: 'small' | 'default' | 'large';
		fullWidth?: boolean;
		startIcon?: React.ReactNode;
		endIcon?: React.ReactNode;
	}
	export const Input: React.FC<InputProps>;

	// ========== Card ==========
	export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
		children: React.ReactNode;
		shadow?: 'none' | 'sm' | 'md' | 'lg';
		border?: boolean;
		hoverable?: boolean;
		rounded?: 'sm' | 'md' | 'lg' | 'xl';
	}
	export const Card: React.FC<CardProps>;

	export const CardHeader: React.FC<React.HTMLAttributes<HTMLDivElement>>;

	export interface CardTitleProps
		extends React.HTMLAttributes<HTMLHeadingElement> {
		children: React.ReactNode;
		as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
	}
	export const CardTitle: React.FC<CardTitleProps>;

	export const CardDescription: React.FC<
		React.HTMLAttributes<HTMLParagraphElement>
	>;

	export const CardContent: React.FC<React.HTMLAttributes<HTMLDivElement>>;

	export interface CardFooterProps
		extends React.HTMLAttributes<HTMLDivElement> {
		align?: 'center' | 'right' | 'left';
	}
	export const CardFooter: React.FC<CardFooterProps>;

	// ========== Modal ==========
	export interface ModalProps {
		isOpen: boolean;
		onClose: () => void;
		children: React.ReactNode;
		className?: string;
	}
	export const Modal: React.FC<ModalProps>;

	export const ModalTitle: React.FC<{ children: React.ReactNode }>;

	export const ModalDescription: React.FC<
		React.HTMLAttributes<HTMLParagraphElement>
	>;

	export const ModalImage: React.FC<{ src: string; alt?: string }>;

	export const ModalContent: React.FC<React.HTMLAttributes<HTMLDivElement>>;

	export interface ModalFooterProps
		extends React.HTMLAttributes<HTMLDivElement> {
		align?: 'center' | 'right' | 'left';
	}
	export const ModalFooter: React.FC<ModalFooterProps>;
}
