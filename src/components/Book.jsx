import React from 'react'

const Book = ({book}) => {
  return (
    <div>
        <tr>
            <th>{book.id}</th>
            <th>{book.title}</th>
            <th>{book.author}</th>
            <th>{book.year}</th>
            <th>
            <button type='button' className='btn btn-danger'>
            Delete</button>
            <button type='button' className='btn btn-info'>
            Edit</button>
            </th>
        </tr>
    </div>
  )
}
 
export default Book;