import React from 'react';
import { cn } from '@/lib/utils'; // agar util funksiyalaring bo‘lsa
import { X } from 'lucide-react';

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	children: React.ReactNode;
	className?: string;
}

const Modal: React.FC<ModalProps> = ({
	isOpen,
	onClose,
	children,
	className,
}) => {
	if (!isOpen) return null;

	return (
		<div
			className='fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-[1px]'
			onClick={onClose}
		>
			<div
				className={cn(
					'bg-white rounded-xl p-6 shadow-lg w-full max-w-md relative',
					className
				)}
				onClick={e => e.stopPropagation()} // modal ichiga bosganda yopilmasligi uchun
			>
				{/* Close button */}

				{/* Content */}
				{children}
				<button
					onClick={onClose}
					className='absolute cursor-pointer top-2 right-2 text-zinc-500 hover:text-zinc-800'
				>
					<X />
				</button>
			</div>
		</div>
	);
};

export default Modal;

export function ModalTitle({ children }: { children: React.ReactNode }) {
	return <h2 className='text-xl font-semibold mb-2'>{children}</h2>;
}

export const ModalDescription: React.FC<
	React.HTMLAttributes<HTMLParagraphElement>
> = ({ children, className = '', ...restProps }) => {
	return (
		<p
			className={cn('text-sm py-3 pl-0 text-zinc-700', className)}
			{...restProps}
		>
			{children}
		</p>
	);
};

export function ModalImage({ src, alt }: { src: string; alt?: string }) {
	return <img src={src} alt={alt} className='w-full rounded-md mb-4' />;
}

export const ModalContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
	children,
	className = '',
	...restProps
}) => (
	<div
		className={cn(
			'px-4 py-3 pl-0 break-words border-y border-gray-100',
			className
		)}
		{...restProps}
	>
		{/* ← Faqat break-words qo'shildi */}
		{children}
	</div>
);

interface ModalFooterProps extends React.HTMLAttributes<HTMLDivElement> {
	align?: 'center' | 'right' | 'left';
}

export const ModalFooter: React.FC<ModalFooterProps> = ({
	children,
	className = '',
	align = 'right',
	...restProps
}) => {
	const alignmentClasses = {
		center: 'flex justify-center',
		right: 'flex justify-end',
		left: 'flex justify-start',
	};
	return (
		<div
			className={cn('px-4 pl-0 py-3', alignmentClasses[align], className)}
			{...restProps}
		>
			{children}
		</div>
	);
};
