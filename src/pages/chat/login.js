import ChatLayout from '@/components/ChatLayout'
import React from 'react'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useContext, useRef, useState } from "react"
import axios from "axios"
// import { redirect } from "next/navigation"
import { AuthContext } from '../_app'
import { useRouter } from "next/router"




const LoginSchema = z.object({
  email: z.string().email({ message: "Invalid email" }),
  password: z.string()
}).required()


const Login = () => {
  const [auth, setAuth] = useContext(AuthContext)
  const router = useRouter()
	if (auth) router.push('/chat')


  const form = useForm({
    resolver: zodResolver(LoginSchema),
  })


	// Handle form submission
  async function onSubmit(formData) {
    console.log('submitting...')
    await axios.get(`${process.env.SERVER_URL}/sanctum/csrf-cookie`)
    try {

      let loginRes = await axios.post(`${process.env.SERVER_URL}/login`, {
        email: formData.email,
        password: formData.password
      })
      const { data: userData } = await axios.get(`${process.env.SERVER_URL}/api/user`)
      console.log(loginRes)
      setAuth(userData)
			router.push('/chat')
    } catch (err) {
      console.log('error', err)
    }
  }


  return (
		<ChatLayout>
			{ auth &&
				<pre>
					{JSON.stringify(auth)}
				</pre>
			}
			<Form {...form}	>
				<form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Email</FormLabel>
								<FormControl>
									<Input {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="password"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Password</FormLabel>
								<FormControl>
									<Input {...field} type="password"/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button type="submit">Submit</Button>
				</form>
			</Form>
		</ChatLayout>
  )
}


export default Login