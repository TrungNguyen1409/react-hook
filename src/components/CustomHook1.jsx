import React from 'react'
import useLocalStorage from '../hooks/UseLocalStorage'
function CustomHook1() {

    const [task,setTask] = useLocalStorage('task','')

  return (
    <div>
        <form className='w-50'> 
            <div className='mb-3'>
                <label className='form-label'>Task</label>
                <input 
                    className='form-control'
                    type="text" 
                    value={task} 
                    onChange={(e)=> setTask(e.target.value)}/>
            </div>
        </form>
    </div>
  )
}

export default CustomHook1