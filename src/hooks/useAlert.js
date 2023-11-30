import React, { useState } from 'react'

const useAlert = () => {
    const [alert, setAlert]=useState({show:false, text: ' ', type: "danger"})

    const showAlert = ({text, type='danger'}) => {
        show:true,
        text,
        type
    }
    const hideAlert = () =>( {
        show:false,
        text: '',
        type: "danger" 
    
    })
  return {
    alert, showAlert, hideAlert}
}

export default useAlert
