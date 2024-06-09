import axios from 'axios';
import React, { useEffect, useState } from 'react'

function SearchFilter() {
  useEffect(() => {
    fetch();
  }, [])
  const [search, setsearch] = useState('')
  
  console.log(search);
  
  const [data, setdata] = useState([]);
  const fetch = async () => {
    const result = await axios.get(`http://localhost:3000/Fruit`)
    console.log(result.data);
    setdata(result.data)
  }
  return (
    <div style={{display: "flex",justifyContent : "center",height:"100vh", alignItems : "center"}}>
      <div className="card shadow " style={{ width: '400px' }}>
        <form class="d-flex me-3 ms-2 mt-5 ">
          <input class="form-control me-2" type="text" placeholder="Search" value={search} onChange={(e) => setsearch(e.target.value)} />
          <button class="btn btn-primary" type="button"  >Search</button>
        </form>
        <div class="card-body ">
          {
            data.filter((value) => {
              return search === '' ? value : (value.fruit && value.fruit.
                toLowerCase().includes(search.toLowerCase()));
            }).map((value) => {
              return (
                <ul key={value.id}>
                  <li className=''>{value.fruit}</li>
                </ul>
              )
            })
          }
        </div>
      </div>
    </div>
  ) 
}

export default SearchFilter