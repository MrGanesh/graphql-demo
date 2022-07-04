import React from "react"
import {useQuery, gql} from "@apollo/client"
import {useParams} from "react-router"
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
  const {id} = useParams()
  const {data, loading, error} = useQuery(GET_CHARACTER,{
    variables:{
      id
    }
  })
  if(loading) return <h1>Loading...</h1>
  if(error) return <h1>Error: {error.message}</h1>
  return(
    <div style={{display:'flex'}}> 
        <img src={data.character.image} width={750} height={750} />
        <div style={{marginLeft:'10px'}}>
            <h1>{data.character.name}</h1>
            <p>{data.character.gender}</p>
            <div>
                {data.character.episode.map(episode=>{
                  return(
                    <div>
                        {episode.name} - {episode.episode}
                    </div>
                  )
                })}
            </div>
        </div>
    </div>
  )
}