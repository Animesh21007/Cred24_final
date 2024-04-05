import React from 'react';
import { Label } from './label';
import { Input } from './input';
import { cn } from '../../utils/cn';
import { useForm } from 'react-hook-form';
import {
	IconBrandGithub,
	IconBrandGoogle,
	IconBrandOnlyfans,
} from '@tabler/icons-react';

function SignupForm() {
	const { register, handleSubmit } = useForm();
	const handleFeedback = (e) => {
		e.preventDefault();
		toast.success('Form submitted successfully', {
			style: {
				background: '#1e3257',
				margin: '7px',
				borderRadius: '7px',
				color: 'white',
				border: '1px solid gray',
			},
		});
		// console.log('Form submitted');
	};
	return (
		<div className=" w-full mx-auto rounded-3xl p-4 md:p-8 shadow-input bg-slate-900 border border-cyan-600">
			<h2 className="font-bold text-xl text-neutral-200">Feedback Form</h2>

			<form className="my-8" onSubmit={handleSubmit(handleFeedback)}>
				<div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
					<LabelInputContainer>
						<Label htmlFor="firstname">First name</Label>
						<Input
							{...register('firstname')}
							className="bg-slate-600 font-[Poppins]"
							id="firstname"
							placeholder=""
							type="text"
						/>
					</LabelInputContainer>
					<LabelInputContainer>
						<Label htmlFor="lastname ">Last name</Label>
						<Input
							{...register('lastname')}
							id="lastname"
							className="font-[Poppins]"
							placeholder=""
							type="text"
						/>
					</LabelInputContainer>
				</div>
				<LabelInputContainer className="mb-4">
					<Label htmlFor="email">Email Address</Label>
					<Input
						{...register('email')}
						id="email"
						className="font-[Poppins]"
						placeholder=""
						type="email"
					/>
				</LabelInputContainer>

				<LabelInputContainer className="mb-4">
					<Label htmlFor="feedback">Feedback</Label>
					<textarea
						{...register('feedback')}
						id="feedback"
						className="bg-slate-600 text-white rounded-md py-2 font-[Poppins] px-3"
						placeholder="Enter your feedback here"
					/>
				</LabelInputContainer>

				<button
					className="focus:bg-black border-blue-300 bg-gradient-to-br relative group/btn  from-slate-900 dark:from-slate-600 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full  text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
					type="submit">
					Submit &rarr;
					<BottomGradient />
				</button>

				<div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
			</form>
		</div>
	);
}

const BottomGradient = () => {
	return (
		<>
			<span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
			<span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
		</>
	);
};

const LabelInputContainer = ({ children, className }) => {
	return (
		<div className={cn('flex flex-col space-y-2 w-full', className)}>
			{children}
		</div>
	);
};

export { SignupForm };