import useConversations from '@/data/useConversations'
import React, { useState } from 'react'
import ChatWindow from './ChatWindow'

const Conversations = () => {
	const [currentConvo, setCurrentConvo] = useState(null)
	const {data, error, isLoading} = useConversations()
	if (error) {
		console.log('Conversations Error', error)
		return 'Error in fetching conversations'
	}
	if (isLoading) return 'Loading...'
	if (data?.conversations)
	return (
			<div className='flex flex-[1]'>
				<ul className='bg-slate-50 min-w-[16rem] w-1/5  max-w-sm'>
				{data.conversations.map(conversation => {
					const active = conversation.id === currentConvo?.id
					return (
						<div key={conversation.id} className={`py-2 px-1 hover:bg-slate-200 ${active ? 'big-slate-200' : ''}`} onClick={() => {setCurrentConvo(conversation)}}>
							<li key={conversation.id}>{conversation.conversation_name ?? 'No Name'}</li>
						</div>
						)
				})}
				</ul>
				<ChatWindow convoId={currentConvo?.id} convoName={currentConvo?.conversation_name}/>
			</div>
	)
	return 'Empty'
}

export default Conversations