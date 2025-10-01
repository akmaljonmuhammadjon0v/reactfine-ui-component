import { useState } from 'react';
import { MailIcon, RocketIcon, Sun } from 'lucide-react';
import { Badge, Card, Input, Modal } from './components';

import {
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from './components/card/card';

import {
	ModalContent,
	ModalDescription,
	ModalFooter,
	ModalTitle,
} from './components/modal/modal';
import { Button } from 'reactfine-ui';

function App() {
	const [open, setOpen] = useState(false);
	return (
		<div>
			<div>
				<Button variant='primary'>
					Button <RocketIcon size={18} />
				</Button>
				<Button variant='secondary'>Button</Button>
				<Button variant='outline'>Button</Button>
				<Button variant='danger'>Button</Button>
				<Button variant='success'>Button</Button>
				<Button variant='dark'>Button</Button>
				<Button variant='dark' size='icon' rounded='full'>
					<Sun size={18} />
				</Button>
			</div>
			<div>
				<Badge rounded='sm' variant='default'>
					Primary
				</Badge>
				<Badge rounded='md' variant='outline'>
					Outline
				</Badge>
				<Badge rounded='lg' variant='dark'>
					Dark
				</Badge>
				<Badge rounded='lg' variant='success'>
					Success
				</Badge>
				<Badge rounded='full' variant='warning'>
					Warning
				</Badge>
				<Badge variant='danger'>Danger</Badge>
			</div>
			<div>
				<Card shadow='md' width='xl' hoverable rounded='lg'>
					<CardHeader>
						<CardTitle>Card Title</CardTitle>
						<CardDescription>Bio</CardDescription>
					</CardHeader>

					<CardContent>
						<CardDescription>
							Bu yerda card ichidagi kontent bo'ladi. U matn, rasm yoki button
							bo'lishi mumkin. Bu yerda card ichidagi kontent bo'ladi. U matn,
							rasm yoki button bo'lishi mumkin.
						</CardDescription>
					</CardContent>

					<CardFooter>
						<Button>Batafsil</Button>
					</CardFooter>
				</Card>
			</div>
			<div>
				<Input
					label='Email'
					placeholder='you@example.com'
					helperText='Yaxshi formatda kiriting'
					error=''
					type='email'
					size='default'
					startIcon={<MailIcon className='w-4 h-4' />}
				/>
			</div>
			<div>
				<Button onClick={() => setOpen(true)}>Modal</Button>
				<Modal isOpen={open} onClose={() => setOpen(false)}>
					<ModalTitle>Modal Title</ModalTitle>
					<ModalContent>
						<ModalDescription>
							Bu oddiy modal. ReactFine kutubxonasi uchun ishlab chiqilgan.
						</ModalDescription>
					</ModalContent>
					<ModalFooter>
						<Button variant='primary' onClick={() => setOpen(false)}>
							Yopish
						</Button>
					</ModalFooter>
				</Modal>
			</div>
			<div>
				<Button variant='primary' className='bg-red-500'>
					Button
				</Button>
			</div>
		</div>
	);
}

export default App;
