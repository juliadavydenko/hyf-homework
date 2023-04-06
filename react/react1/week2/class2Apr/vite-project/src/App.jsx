import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import books from './books'
import Book from './Book'

function App() {

  return (
    <div classtitle="App">
<h1>Books list</h1>
<Book
        title={books[0].title}
        authors={books[0].authors}
        publisher={books[0].publisher}
        year={books[0].year}
      />
      <Book
        title={books[1].title}
        authors={books[1].authors}
        publisher={books[1].publisher}
        year={books[1].year}
      />
      <Book
        title={books[2].title}
        authors={books[2].authors}
        publisher={books[2].publisher}
        year={books[2].year}
      />
      <Book
        title={books[3].title}
        authors={books[3].authors}
        publisher={books[3].publisher}
        year={books[3].year}
      />
      <Book
        title={books[4].title}
        authors={books[4].authors}
        publisher={books[4].publisher}
        year={books[4].year}
      />
      <Book
        title={books[5].title}
        authors={books[5].authors}
        publisher={books[5].publisher}
        year={books[5].year}
      />
      <Book
        title={books[6].title}
        authors={books[6].authors}
        publisher={books[6].publisher}
        year={books[6].year}
      />
      <Book
        title={books[7].title}
        authors={books[7].authors}
        publisher={books[7].publisher}
        year={books[7].year}
      />
      <Book
        title={books[8].title}
        authors={books[8].authors}
        publisher={books[8].publisher}
        year={books[8].year}
      />
      <Book
        title={books[9].title}
        authors={books[9].authors}
        publisher={books[9].publisher}
        year={books[9].year}
      />
      <Book
        title={books[10].title}
        authors={books[10].authors}
        publisher={books[10].publisher}
        year={books[10].year}
      />
      <Book
        title={books[11].title}
        authors={books[11].authors}
        publisher={books[11].publisher}
        year={books[11].year}
      />
      </div>
     
  )
}

export default App
