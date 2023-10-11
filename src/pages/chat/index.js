import ChatLayout from '@/components/ChatLayout'
import React, { useContext } from 'react'
import { AuthContext } from '../_app'
import ChatApp from '@/components/ChatApp'

const Page = () => {
	const [auth, setAuth] = useContext(AuthContext)
	return (
		<ChatLayout>
			<div>Chat</div>
			{ auth && <ChatApp /> }
		</ChatLayout>
	)
}

export default Page