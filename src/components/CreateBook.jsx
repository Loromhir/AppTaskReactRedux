import React from 'react'

const CreateBook = () => {
  return (
    <div className='create-book'>
        <form action="">
            <div className='form-group'>
                <input type="text" className='form-control input' name='title' placeholder='Enter a Ttitle' />
            </div>
            <div className='form-group'>
            <input type="text" className='form-control input' name='author' placeholder='Enter an Author' />
            </div>
            <div className='form-group'>
            <input type="text" className='form-control input' name='year' placeholder='Enter year publisher' />
            </div>
            <div className='form-group'>
                <button type='submit' className='btn btn-primary'>Add</button>
                <button type='cancel' className='btn btn-default'>Cancel</button>
            </div>
        </form>
    </div>
  )
}

export default CreateBook