import useMessages from '@/data/useMessages'
import React from 'react'
import Message from './Message'
import ChatBox from './ChatBox'

const ChatWindow = ({convoId = null, convoName}) => {
	const {data, error, isLoading} = useMessages(convoId)
	if (convoId === null) return "Select Convo"
	if (error) return "LOL Error"
	if (isLoading) return "Loading..."
	// console.log('message', data)
	return (

		<section className='flex flex-col w-full'>
			<div className='p-3 bg-slate-200'>{ convoName }</div>
			<main className='flex-[1]'>
				{data.messages.map(message => (
					<Message key={message.id} userId={message.user_id} userName={message.user.name}>
						{ message.message_text }
					</Message>
				))}
			</main>
			<ChatBox />
		</section>
	)
}

export default ChatWindow