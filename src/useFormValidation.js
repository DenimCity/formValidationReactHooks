import { useState, useEffect } from 'react'

const useFormValidation = (initialState, validate, authenticate) => {
 const [values, setValues] = useState(initialState)
 const [errors, setErrors] = useState({})
 const [isSubmitting, setSubmitting] = useState(false)


 useEffect(() => {
       if(isSubmitting){
             const noErrors = Object.keys(errors).length === 0
             if (noErrors){
                  // authenticate()
                   setSubmitting(true)
             } else {
                  setSubmitting(false)
             }
       }

 // eslint-disable-next-line react-hooks/exhaustive-deps
 },[errors])
 
 const handleChange = (e) => {
      setValues({...values, [e.target.name]: e.target.value})
 }


 const handleBlur = () => {
      const validationError = validate(values)
      setErrors(validationError)
}
const handleSubmit = (e) =>{
      e.preventDefault()
      console.log("authenticated!", values.email, values.password )
      /// Do Something

    }



 return { errors, handleChange, handleBlur, handleSubmit, isSubmitting, values }
}

export default useFormValidation;