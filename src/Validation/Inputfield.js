import React from 'react'
import { useField } from "formik";
import { Formikwrapper } from './Validatestyle';


export default function Inputfield(props) {
    const [field,meta]=useField(props.field)
  return (
    <Formikwrapper>
     <input {...field} {...props} />
       {meta.error && meta.touched && <p>{meta.error}</p>}

    </Formikwrapper>
  
  )
}
