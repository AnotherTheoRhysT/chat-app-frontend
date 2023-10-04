import React from 'react'
import Navbar from './Navbar'

const ChatLayout = ({ children }) => {
	return (
		<>
			<Navbar />
			<div className='p-16'>
				{ children }
			</div>
		</>
	)
}

export default ChatLayout