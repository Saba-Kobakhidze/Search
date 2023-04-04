import React, {useState, useEffect} from 'react'

const Search = () =>{

    const [keyword, setKeyword] = useState('')

      useEffect(() => {
        fetch('https://dummyjson.com/products/search?q=phone')
        .then(res => res.json())
        .then(setKeyword(json))
      }, [])

    const searchHandler = (e) => {
        e.preventDefault() 
          
      }
      return(
        <form onSubmit={searchHandler}>
            <div>
                <input 
                    type="text" 
                    placeholder='Enter Product Name' onChange={(e) => setKeyword(e.target.value)} 
                />
                <button>Search</button>
            </div>
        </form>
      )
}

export default Search