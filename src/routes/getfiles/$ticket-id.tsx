import { createFileRoute, useParams } from '@tanstack/react-router'
import { useQuery } from '@tanstack/react-query'
export const Route = createFileRoute('/getfiles/$ticket-id')({
  component: getfilescomponent,
})

function getfilescomponent() {
   
    const{'ticket-id':ticketId}=Route.useParams()   
const fetchComments=async()=>{
   
    
    const res = await fetch(
      `https://api-ticketmanagement.onrender.com/v1.0/tickets/${ticketId}/attachment`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          
        },  
      },
      //`https://api-ticketmanagement.onrender.com/v1.0/tickets?page=1&limit=10`
    )
    if (!res.ok) {
      throw new Error('failed to get files url')
    }
    return await res.json()
    
  }

  const {data,} = useQuery({
    queryKey: ['Comments', ticketId],
    queryFn:fetchComments,
    
   
  })
  console.log(data)
  return(
    <>
    <p> Hello to the files</p>
    {data?.data?.map((file) => (
            <div key={file.id}>
              <br />
              
             
              <p>URL: {file.data}</p>
              
             
             
              
            </div>
          ))}
    </>
  )
}