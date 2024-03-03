import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/products')({
  component: () => <div>Hello /products!</div>,
})
