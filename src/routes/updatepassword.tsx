//@ts-nocheck

import * as React from 'react'
import { createFileRoute,useNavigate } from '@tanstack/react-router'
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

export const Route = createFileRoute('/updatepassword')({
  component: RouteComponent,
})

function RouteComponent() {
  const navigate=useNavigate();
  const[oldPass,setOldPass]=React.useState('')
  const[newPass,setNewPass]=React.useState("")
  
 const mutation=useMutation({
  mutationFn:async({oldPass,newPass})=>{
    const token=localStorage.getItem('accessToken')
    if(!token){
      throw new Error("Your access token was not in your localstorage")
      
     }
     const res=await axios.patch(
      'https://api-ticketmanagement.onrender.com/v1.0/user/password/update',
      { oldPassword: oldPass, newPassword: newPass },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
    )
   if(!res.data.success){
    throw new Error("fialed to update the password")
   }
   return res.data;
  },
  onSuccess:(data)=>{
    alert("password updated succesfully")
    navigate({to:'/'})
  },
  onError:(error)=>{
    alert(error.message)
  }

 })
  
const handleUpdatePassword=async()=>{
   mutation.mutate({oldPass,newPass })

}
 
  
  return(
    
      <div>
       {mutation.isError && (mutation.error.message )}
        <h2>Update Password</h2>
               <div>
          <label> Old Password:
            <input type="password" value={oldPass}  onChange={(e)=>setOldPass(e.target.value)}/>
          </label>
        </div>
        <div>
          <label>
            New Password:
            <input
              type="password"
              value={newPass}
              onChange={(e) => setNewPass(e.target.value)}
            />
          </label>
        </div>
        <button onClick={handleUpdatePassword}>  update   
        </button>
      </div>
    );
  
  }

