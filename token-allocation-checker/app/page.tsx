import { Suspense } from "react"
import ClientPage from "./client-page.tsx"

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ClientPage />
    </Suspense>
  )
}

