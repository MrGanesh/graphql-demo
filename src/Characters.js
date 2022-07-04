import React from "react"
import {useQuery, gql} from "@apollo/client"
const GET_CHARACTER = gql`
query GetCharacters($id: ID!){
  character(id:$id){
    name
    id
    image
    episode{
      name
      episode
    }
  }
}
`
export default function Characters(){
  const {data, loading, error} = useQuery(GET_CHARACTER,{
    variables:{
      id:4
    }
  })

  return(
    <div>
      </div>
  )
}