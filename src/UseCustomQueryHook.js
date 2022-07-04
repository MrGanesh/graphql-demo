import React from "react"
import {useQuery, gql} from "@apollo/client"
import {Link} from 'react-router-dom'
const QUERY_INPUT = gql`
query{
  characters{
    results{
      id
      name
      image
    }
  }
}
`

export default function UseCustomQueryHook () {
const {loading, data, error} = useQuery(QUERY_INPUT)

if(loading) return <h1>Loading...</h1>
if(error) return <h1>Error: {error.message}</h1>
console.log(data)
return(
  <div style={{display:'flex', flexWrap:'wrap'}}>
    {
      data.characters.results.map(item => {
        return(
          <Link to={`/${item.id}`} style={{ margin:'20px'}}>
            <img src={item.image} style={{ width: '100px', height: '100px' }} />
            <p>{item.name}</p>
          </Link>)
      })
    }
  </div>
)
}