import React from 'react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'

const page = () => {
  return (
    <main className='flex justify-center items-center h-screen'>
          <Button asChild size={"lg"}>
                <Link href="/employee">Sign as an employee</Link>
          </Button>
    </main>
  )
}

export default page