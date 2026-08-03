import { useUser } from '../hooks/useUser'

function UserInfo() {
  const user = useUser()

  return (
    <section className="user-info-card">
      <h3>Customer Details</h3>
      <p><strong>Name:</strong> {user?.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Location:</strong> {user.location}</p>

    </section>
  )
}

export default UserInfo
