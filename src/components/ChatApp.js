import useConversations from '@/data/useConversations'
import { AuthContext } from '@/pages/_app'
import axios from 'axios'
import React, { useContext } from 'react'
import Conversations from './Conversations'


const ChatApp = () => {
	return (
		<>
			<h2>Chatbox</h2>
			<Conversations />
		</>
	)
}

export default ChatApp 