import { createFileRoute } from '@tanstack/react-router'
import { useNavigate } from '@tanstack/react-router'
import { useQuery, useMutation } from '@tanstack/react-query'

// Define the interface for Agent
interface Agent {
  id: string
  full_name: string
  email: string
  status: string
}

export const Route = createFileRoute('/assigntickets/$ticket-id')({
  component: RouteComponent,
})

function RouteComponent() {
  const { 'ticket-id': ticketId } = Route.useParams()
  const token = localStorage.getItem('accessToken')
  const navigate = useNavigate()

  // Check if token is present, if not redirect to signIn
  if (!token) {
    alert(
      'No access token found in local storage. Please log in to view the tickets data.',
    )
    navigate({ to: '/signIn' })
  }

  // Fetch agents function
  const fetchAgents = async () => {
    const res = await fetch(
      `https://api-ticketmanagement.onrender.com/v1.0/tickets/${ticketId}/assign`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      },
    )
    if (!res.ok) {
      throw new Error('Failed to fetch agents data')
    }
    return await res.json()
  }

  // Query to fetch agents
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['Agents', ticketId],
    queryFn: fetchAgents,
  })

  // Mutation to assign ticket to agent
  const handleAssign = useMutation({
    mutationFn: async (agentId: string) => {
      const res = await fetch(
        `https://api-ticketmanagement.onrender.com/v1.0/tickets/${ticketId}/assign`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ agent_id: agentId }),
        },
      )
      if (!res.ok) {
        throw new Error('Failed to assign ticket')
      }
      return await res.json()
    },
    onSuccess: (data) => {
      if (data.success) {
        alert('Ticket assigned successfully')
        navigate({ to: '/users' })
      }
    },
    onError: (error) => {
      alert(`Error: ${error.message}`)
    },
  })

  return (
    <div>
      <h1>Assign Tickets to the Agents</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : isError ? (
        <p>Error: {error?.message}</p>
      ) : (
        <>
          <p>Ticket ID: {ticketId}</p>
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '50px' }}>
            {data?.data?.map((agent: Agent) => (
              <div
                style={{
                  border: '2px solid #ccc',
                  padding: '50px',
                  width: '300px',
                  background: '#f9f9f9',
                  borderRadius: '8px',
                }}
                key={agent.id}
              >
                <h3 style={{ textAlign: 'center' }}>{agent.full_name}</h3>
                <p>
                  <strong>Id:</strong> {agent.id}
                </p>
                <p>
                  <strong>Email:</strong> {agent.email}
                </p>
                <p>
                  <strong>Status:</strong> {agent.status}
                </p>
                <button onClick={() => handleAssign.mutate(agent.id)}>Assign</button>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
