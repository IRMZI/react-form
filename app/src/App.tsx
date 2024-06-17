import './App.css'
import Form from './Components/Formpage' 
import { useEffect } from 'react';
import { Input, Box, TextField } from "@material-ui/core"

function App() {
  useEffect(() => {
    document.title = 'Formulário';
  }, [])
  return (
    <>
    <Form/>
    </>
  )
}

export default App
