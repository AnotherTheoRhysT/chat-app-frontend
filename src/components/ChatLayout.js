import React from 'react'
import Navbar from './Navbar'
// import '../styles/chatGlobals.css'

const ChatLayout = ({ children }) => {
	return (
		<>
			<style jsx global>{`
          html, body {
            height: 100dvh;
          }
					body {
						display: flex;
						flex-direction: column;
					}
					#__next {
						flex: 1;
						display: flex;
						flex-direction: column;
					}
			`}</style>
			<Navbar />
			<div className='flex-[1] flex flex-col'>
				{ children }
			</div>
		</>
	)
}

export default ChatLayout