import ChatLayout from '@/components/ChatLayout'
import React from 'react'
import ChatBox from '@/components/ChatBox'

const Page = () => {
	return (
		<ChatLayout>
			<div>Chat</div>
			<ChatBox />
		</ChatLayout>
	)
}

export default Page