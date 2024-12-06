
import {createFileRoute} from "@tanstack/react-router"
import {useState} from "react"

import { useNavigate} from "@tanstack/react-router"

import { useMutation} from "@tanstack/react-query"
export const Route=createFileRoute("/signIn")({
  component: RouteComponent,
});

function RouteComponent() {
  const[email,setEmail]=useState("")
const[password, setPassword]=useState("")
  const[emailError, setEmailError]=useState("")
  const[passwordError, setPasswordError]=useState("")
  const navigate=useNavigate()

  
  
  const loginMutation=useMutation({
    mutationFn: async(fldata:{email:string;password:string})=>{
      const response=await fetch(
        "https://api-ticketmanagement.onrender.com/v1.0/user/login",
        {
          method:"POST",
     headers:{"Content-Type":"application/json"},
          body:JSON.stringify(fldata),
        }
      )

      const data=await response.json();
      console.log(data)
      if(!response.ok){
     throw new Error(data.message);
      }
      return data;
    },
    onSuccess:(data)=>{
            localStorage.setItem("email",email);
       localStorage.setItem("password",password);
      localStorage.setItem("accessToken",data.data.token);
      localStorage.setItem("userId",data.data.user_id);
      navigate({ to:"/dashboard"});
    },
    onError:(error)=>{
       if (error.message.includes("email"))
        {
           setEmailError(error.message);
      }else{
      setPasswordError(error.message);
      }
    },
  });

  const handleLogin=(e: React.FormEvent)=>{
    e.preventDefault();
         loginMutation.mutate({email,password});
    
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
               <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            placeholder="Enter your email"
          />
          {emailError && <p style={{color:"red"}}>{emailError}</p>}
        </div>

       
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}placeholder="Enter your password"
          />
          {passwordError && <p style={{color:"red" }}>{passwordError}</p>}
        </div>
              <button type="submit">
          {loginMutation.isLoading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
}
