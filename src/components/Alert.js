import React from 'react'

export default function Alert(props) {
  return (
    
  props.Alert && <div className={`alert alert-${props.Alert.type} alert-dismissible fade show`} role="alert">
        <strong>{props.Alert.type}</strong>   
        <div className='contaniner my-2'>{props.Alert.msg}</div>
</div>

  )
}
