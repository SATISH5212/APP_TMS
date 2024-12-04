
 //@ts-nocheck


import * as React from 'react'
import { createFileRoute, useParams } from '@tanstack/react-router'
import { useState } from 'react'
import { useNavigate } from '@tanstack/react-router'
import { useQueryClient, useMutation, useQuery } from '@tanstack/react-query'
import { useLocation } from '@tanstack/react-router'
export const Route = createFileRoute('/getallcomments/$ticket-id')({
  component: RouteComponent,
})


function RouteComponent() {
  const[reply,setReply]=useState("")
  const {'ticket-id':ticketId}=Route.useParams()
    //  console.log(ticketId)
 const location=useLocation();
 //@ts-ignore
 const {requestedBy}=location.state;
 //console.log(requestedBy)
const queryClient=useQueryClient() 

  //   const [title, setTitle] = useState('')
  //   const [description, setDescription] = useState('')
  //   const [priority, setPriority] = useState('')

  const token = localStorage.getItem('accessToken')
  const loginusrid=localStorage.getItem('userId')
  console.log(loginusrid)
  const navigate = useNavigate()
  if (!token) {
    alert(
      'no access token found in the localstorage. so please login to view the tickets data',
    )

    navigate({ to: '/signIn' })
  }
  const fetchComments=async()=>{
    const res = await fetch(
      `https://api-ticketmanagement.onrender.com/v1.0/tickets/${ticketId}/comment`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      },
      //`https://api-ticketmanagement.onrender.com/v1.0/tickets?page=1&limit=10`
    )
    if (!res.ok) {
      throw new Error('failed to fetch comments data')
    }
    return await res.json()
    console.log(res)
  }

  const {data:commentsData,isLoading,isError,error} = useQuery({
    queryKey: ['Comments', ticketId],
    queryFn:fetchComments,
   
  })
  // const handleSearch = () => {
  //   if (ticketId.trim()) {
  //     setQueryid(ticketId)
  //   } else {
  //     alert('enter a valid ticket id')
  //   }
  // }
  //   const handleSubmit = async (e: React.FormEvent) => {
  //     e.preventDefault()

  //     try {
  //       const response = await fetch(
  //         `https://api-ticketmanagement.onrender.com/v1.0/tickets/${ticketId}`,
  //         {
  //           method: 'PUT',
  //           headers: {
  //             'Content-Type': 'application/json',
  //             Authorization: `Bearer ${token}`,
  //           },
  //           body: JSON.stringify({ title, description, priority }),
  //         },
  //       )

  //       if (response.ok) { 
  //         alert('Ticket updated successfully!')
  //         setTitle('')
  //         setDescription('')
  //         setPriority('')
  //       } else {
  //         const errorData = await response.json()
  //         alert(errorData.message)
  //       }
  //     } catch (error) {
  //       alert('Network error. Please try again later.')
  //     }
  //   }
  // const name=requestedBy;

  //console.log(requestedBy)


 //@ts-ignore
  const postComment=async(newComment)=>{
      //  e.preventDefault();
             const res=await fetch(
        `https://api-ticketmanagement.onrender.com/v1.0/tickets/${ticketId}/comment`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(newComment),
        }
      );
      if(!res.ok){
        const errorData=await res.json()
        throw new Error(errorData.message)
      }
      return res.json()
    }
      
   const mutation=useMutation({
    mutationFn:postComment,
    onSuccess:()=>{
      setReply("")
      // alert("Comment added successfully!");
      //@ts-ignore
      queryClient.invalidateQueries(["Comments",ticketId])

    },
    onError:(err)=>{
      alert(err.message)
    } })
   const handleSubmit=(e:React.FormEvent)=>{
    e.preventDefault()
    if(!reply.trim()){
      alert("Please enter a valid comment");
      return;
    }
    mutation.mutate({comment:reply})
   }



   //@ts-ignore
   //delete comment
   const deletecomment = async (commentId) => {
    const res = await fetch(
      `https://api-ticketmanagement.onrender.com/v1.0/tickets/${ticketId}/comment/${commentId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!res.ok) {
      //@ts-ignore
      throw new Error(Error.message);
    }
    const data = await res.json();
    return data;
  };

// delete
  const deleteMutation=useMutation({
    mutationFn:deletecomment,
    onSuccess:() =>{
      //@ts-ignore
            queryClient.invalidateQueries(['comment']);
      alert('comment deleted successfully!');
    },
    onError:()=>{
      alert('Failed to delete  the comment. Please try again.');
    },
  });


  return (
    <div>
      <h1>Specific ticket comments</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : isError ? (
        <p>Error:{error?.message}</p>
      ) : (
        <>
        {/* <p>Hello {ticketId.requested_by}</p> */}
        <p>Ticket ID:{ticketId}</p>
          <p>Requested By:{requestedBy}</p>
          {commentsData?.data?.map((comment) => (
            <div key={comment.id}>
              <br />
              
              {/* {(comment.user_id===loginusrid?"you":"user id(from):{comment.user_id}")} */}
              {(comment.user_id==loginusrid)?(<p>you</p>):(<p>from:{comment.user_id}</p>)}
             
              <p>{new Date( comment.created_at).toLocaleDateString()}</p>
              <p>comment: {comment.comment}</p>
              
              {/* <p>requested by:{requestedBy}</p> */}
              <p>comement id:{comment.id}</p>
              <button  onClick={() => deleteMutation.mutate(comment.id)}> Delete </button>
              
            </div>
          ))}
          <form  style={{ textAlign: "center", marginTop: "50px" }} onSubmit={handleSubmit}>
            <textarea value={reply} onChange={(e)=>setReply(e.target.value)}></textarea>
            <button type='submit' disabled={mutation.isLoading}>send</button>
            </form>
          
        </>
      )}
    </div>
  )
}


