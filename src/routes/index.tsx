import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useEffect } from 'react'
import Navbar from '@/components/Navbar'
import { useAdmin } from '@/stores/admin'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  const admin = useAdmin(state => state.credentials)
  const navigate = useNavigate({ from: '/' })

  useEffect(() => {
    if (!admin)
      navigate({ to: '/login' })
  }, [admin])
  return (
    <>
      <Navbar />
    </>
  )
}
