import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { fetchTable } from './redux/Table/operation'

import { useAppDispatch } from './hooks/hook'
import { Layout } from './components/Layout'

function App() {
  const [count, setCount] = useState(0)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchTable());
  }, [dispatch])
  

  return (
    <>
      <Layout />
    </>
  )
}

export default App
