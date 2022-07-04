import React from "react"
import {useQuery, gql} from "@apollo/client"

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
  <div style={{display:'flex', flexDirection:'column'}}>
    {
      data.characters.results.map(item => {
        return(
          <div style={{ margin:'20px'}}>
            <img src={item.image} style={{ width: '100px', height: '100px' }} />
            <p>{item.name}</p>
          </div>)
      })
    }
  </div>
)
}