import React, { useContext } from 'react'
import Link from 'next/link'
import { AuthContext } from '@/pages/_app'
import { Button } from './ui/button'
import { useRouter } from 'next/router'
import axios from 'axios'

const Navbar = () => {
	const [auth, setAuth] = useContext(AuthContext)
	const router = useRouter()
	const logoutHanlder = () => {
		console.log("Logout")
		axios.post(`${process.env.SERVER_URL}/logout`)
			.then(res => {
				console.log("logged out", res)
				setAuth(null)
			})
			.catch(err => {
				console.log("log out error", err)
			})
	}
	return (
		<nav className='flex justify-between'>
			<Button>
				<Link href='/chat'>Home</Link>
			</Button>
				{
					auth &&	<h3>Welcome, {auth.name}</h3>
				}
			{
				(router.pathname != '/chat/login') && 
				(	(auth) ?
					<Button onClick={logoutHanlder}>Log Out</Button>
					:
					<Button>
						<Link href='/chat/login'>Sign In</Link>
					</Button>
				)
			}
		</nav>
	)
}

export default Navbar