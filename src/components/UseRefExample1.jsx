import userEvent from '@testing-library/user-event'
import React from 'react'
import {useRef} from 'react'
function UseRefExample1() {

    const inputRef = useRef()
    const onSubmit = (e) => {
        e.preventDefault()
        console.log(123)
    }

  return (
    <div>
        <form onSubmit={onSubmit}>
            <label htmlFor='name'>Name</label>
            <input 
            type="text" 
            ref = {inputRef}
            id="name" 
            className="form-control mb-2"/>
            <button type="submit" className='btn btn-primary'> Submit</button>
        </form>
    </div>
  )
}

export default UseRefExample1