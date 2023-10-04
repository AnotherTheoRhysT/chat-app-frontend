import '@/styles/globals.css'
import { createContext, useEffect, useState } from 'react'
import axios from 'axios'

const AuthContext = createContext(null)
axios.defaults.withCredentials = true

const App = ({ Component, pageProps }) => {
  const [auth, setAuth] = useState(null)
  useEffect(() => {
    if (!auth) {
      axios.get(`${process.env.SERVER_URL}/api/user`)
        .then(res => {
          setAuth(res.data)
        })
        .catch(err => {
          console.log('login err', err)
        })
    }
  }, [])
  return (
		<AuthContext.Provider value={[auth, setAuth]}>
      <Component {...pageProps} />
		</AuthContext.Provider>
  )
}


export default App
export { AuthContext }