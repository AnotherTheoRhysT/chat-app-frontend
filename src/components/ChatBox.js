import React from 'react'

import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import {
	Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"

import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"


const FormSchema = z.object({
  message: z.string()
}).required()

const ChatBox = () => {
	const form = useForm({
    resolver: zodResolver(FormSchema),
  })

	const onSubmit = (formData) => {
		console.log(formData.message)
		formData.message = ""
	}

	return (
		<div className='relative bottom-0 right-0 w-full p-2 border-t-slate-200 border-t-2 border-solid'>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6 flex">
					<FormField
						control={form.control}
						name="message"
						render={({ field }) => (
							<FormItem className='flex-1'>
								<FormControl>
									<Textarea
										placeholder="Aa"
										className="resize-none flex-1"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button type="submit">Submit</Button>
				</form>
			</Form>

		</div>
	)
}

export default ChatBox