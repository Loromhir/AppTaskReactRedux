import React from 'react'
import { books } from '../data'
import Book from './Book'

const Books = () => {
  return (
    <div>
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Year</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        books.map(book=>{
                            return(<Book key={book.id} book={book}/>)
                        })
                    }
                    
                </tbody>
            </table>

    </div>
  )
}
export default Books