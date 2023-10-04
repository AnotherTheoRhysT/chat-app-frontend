import { AuthContext } from '@/pages/_app'
import React, { useContext } from 'react'

const ChatBox = () => {
	const [auth, setAuth] = useContext(AuthContext)

	return (
		auth && 
		<div>ChatBox</div>
	)
}

export default ChatBox