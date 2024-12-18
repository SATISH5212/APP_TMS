//@ts-nocheck

import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';

import { keepPreviousData, useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Link } from '@tanstack/react-router';
import { useNavigate } from '@tanstack/react-router';
export const Route = createFileRoute('/users')({
  component: RouteComponent,
});

function RouteComponent() {
  const [cpage, setCpage] = useState(1);
  const [totalPages, setTpages] = useState(1);
  const limit = 20;
  const queryClient = useQueryClient();
  const token = localStorage.getItem("accessToken");
  const navigate = useNavigate();
  if (!token) {
    alert("No access token found in local storage. Please login to view the tickets data");
    navigate({ to: "/signIn" });
  }

  const fetchTickets = async (page) => {
    const res = await fetch(
      `https://api-ticketmanagement.onrender.com/v1.0/tickets?page=${page}&limit=${limit}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch the tickets data");
    }
    const data = await res.json();
    console.log(data)
    setTpages(data.pagination_details.total_pages);
    return data;
  };

 

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['tickets', cpage],
    queryFn: () => fetchTickets(cpage),
    placeholderData: keepPreviousData,
  })

  const deleteTicket = async (ticketId) => {
    const res = await fetch(
      `https://api-ticketmanagement.onrender.com/v1.0/tickets/${ticketId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!res.ok) {
      throw new Error("Failed to delete the ticket");
    }
    const data = await res.json();
    return data;
  };
// delete
  const deleteMutation=useMutation({
    mutationFn:deleteTicket,
    onSuccess:() =>{
            queryClient.invalidateQueries(['tickets',cpage]);
      alert('Ticket deleted successfully!');
    },
    onError:()=>{
      alert('Failed to delete the ticket. Please try again.');
    },
  });

  const handlePageChange = (direction) => {
    if (direction === "prev" && cpage > 1) {
      setCpage(cpage - 1);
    } else if (direction === "next" && cpage < totalPages) {
      setCpage(cpage + 1);
    }
  };

  console.log(data);
  return (
    <div style={{ padding: "20px" }}>
      <h1>Ticket Management</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : isError ? (
        <p>Error: {error.message}</p>
      ) : (
        <>
          <table border="4" style={{ width: "100%" }}>
            <thead>
              <tr>
                <th>Ticket sID</th>
                
                <th>Title</th>
                <th>Description</th>
                <th>Priority</th>
                <th>Status</th>
                <th>Created At</th>
                <th>Requested By</th>
                <th>Assigned to</th>
                <th>Update</th>
                <th>Delete</th>
                <th>comments</th>
              </tr>
            </thead>
            <tbody>
              {data.data.map((ticket) => (
                <tr key={ticket.id}>
                
                  <td>{ticket.ticket_ref}</td>
                   {/* <td>{ticket.ticket_ref_id}</td> */}
                  <td>{ticket.title}</td>
                  <td>{ticket.description}</td>
                  <td>{ticket.priority}</td>
                  <td>{ticket.status || "Not Assigned"}</td>
                  <td>{new Date(ticket.created_at).toLocaleDateString()}</td>
                  <td>{ticket.requested_by}</td>
                 
                  <td>{ticket.assigned_to}</td>
                  <td><Link to={"/updateticket/" + ticket.id}>Update</Link></td>
                  <td>
                    <button
                      onClick={() => deleteMutation.mutate(ticket.id)}                      >
                      Delete
                    </button>
                    
                  </td>
                  <td>{/* <td><Link to={`/getallcomments/${ticket.id}`}>Comments</Link></td> */}
                  <Link to={`/getallcomments/${ticket.id}`} state={{ requestedBy:ticket.requested_by}}>    Comments  </Link>
                  </td>
                  <td><Link to={"/assigntickets/"+ticket.id}>Assign</Link></td>
                  <td><Link to={"/fileupload/"+ticket.id}>fileupload</Link></td>
                  <td><Link to={"/getfiles/"+ticket.id}>Get all files</Link></td>
                  <td><Link to={"/getsingleticket/"+ticket.id}><button>open</button></Link></td>
                </tr>
              ))}
            </tbody>
          </table>
          <div>
            <button
              onClick={() => handlePageChange("prev")}
              disabled={cpage === 1}>
              Previous
            </button>
            <span>
              Page {cpage} of {totalPages}
            </span>
            <button
              onClick={() => handlePageChange("next")}
              disabled={cpage === totalPages}>
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
}

