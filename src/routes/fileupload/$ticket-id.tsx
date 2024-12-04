//@ts-nocheck

import * as React from 'react'
import { createFileRoute, useParams } from '@tanstack/react-router'
import { useState } from 'react'
import { useNavigate } from '@tanstack/react-router'
// import { useQueryClient, useMutation, useQuery } from '@tanstack/react-query'
// import { useLocation } from '@tanstack/react-router'
export const Route = createFileRoute('/fileupload/$ticket-id')({
  component: RouteComponent,    
})


function RouteComponent() {

const[file,setFile]=useState(null)
const[status,setStatus]=useState("")

const {'ticket-id':ticketId}=Route.useParams()
 
//  const location=useLocation();
// const queryClient=useQueryClient() 
const token = localStorage.getItem('accessToken')
// const loginusrid=localStorage.getItem('userId')
// console.log(loginusrid)
  const navigate = useNavigate()
  if (!token) {
    alert(
      'no access token found in the localstorage. so please login to view the tickets data',
    )

    navigate({ to: '/signIn' })
  }
  

 
  const handleSubmit=async(event)=>{
       event.preventDefault();
      setStatus("")
      const formData=new FormData();
    formData.append("file",file);
    
             const res=await fetch(
        `https://api-ticketmanagement.onrender.com/v1.0/tickets/${ticketId}/attachment`,formData,
        {
             method: "POST",
          headers: {
            "Content-Type": "form-data",
            Authorization: `Bearer ${token}`,
          },
            }
      );
      setStatus(res.status===200?"file uploaded thank you":error)
   }
      
//    const mutation=useMutation({
//     mutationFn:postComment,
//     onSuccess:()=>{
//       setReply("")
//       // alert("Comment added successfully!");
//       queryClient.invalidateQueries(["Comments",ticketId])

//     },
//     onError:(err)=>{
//       alert(err.message)
//     } })
//    const handleSubmit=(e)=>{
//     e.preventDefault()
//     if(!reply.trim()){
//       alert("Please enter a valid comment");
//       return;
//     }
//     mutation.mutate({comment:reply})
//    }   

  return (
    <div>
      <h1>upload files</h1>
        
        <>
       
         
          <form  style={{ textAlign: "center", marginTop: "50px" }} onSubmit={handleSubmit}>
            {/* <textarea value={reply} onChange={(e)=>setReply(e.target.value)}></textarea> */}
            <input type='file'   onChange={(e)=>setFile(e.target.files[0])}></input>
            <button type='submit' disabled={!(file)}>upload file</button>
            {status ? <h1>{status}</h1>:null}
            </form>
          
        </>
     
    </div>
  )
}

