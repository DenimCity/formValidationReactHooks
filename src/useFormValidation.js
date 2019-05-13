import { useState, useEffect } from 'react'

const useFormValidation = (initialState, validate, authenticate) => {
 const [values, setValues] = useState(initialState)
 const [errors, setErrors] = useState({})
 const [isSubmitting, setSubmitting] = useState(false)


 useEffect(() => {
       if(isSubmitting){
             const noErrors = Object.keys(errors).length === 0
             if (noErrors){
                  authenticate()
                  console.log(` Were submitting`)
                   setSubmitting(false)
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
      const validationErrors = validate(values)
      setErrors(validationErrors)
}
const handleSubmit = (e) =>{
      e.preventDefault()
      const validationErrors = validate(values)
      setErrors(validationErrors);
      setSubmitting(true);
    }



 return { errors, handleChange, handleBlur, handleSubmit, isSubmitting, values }
}

export default useFormValidation;