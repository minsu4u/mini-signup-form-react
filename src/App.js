import { createContext, useState } from 'react'
import './App.css'
import FontControlBox from './component/FontControlBox'
import Footer from './component/Footer'
import Form from './component/Form'
import Modal from './component/Modal'

const initialFormData = {
    id: '',
    pw: '',
    confirmPw: '',
}

export const FormContext = createContext({
    formData: initialFormData,
    setFormData: () => {},
})
function App() {
    const [formData, setFormData] = useState(initialFormData)
    return (
        <FormContext.Provider value={{ formData, setFormData }}>
            <section className="form-wrapper">
                <Form />
                <Footer />
            </section>
            <FontControlBox />
            <Modal />
        </FormContext.Provider>
    )
}

export default App
