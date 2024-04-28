import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
   <main className='flex justify-center items-center h-screen flex-col gap-y-8'>

<h1 className='flex text-4xl text-red-950'>
    CRUD operation in NEXT.js 
</h1>

<Button asChild size={"lg"}>
                <Link href="/employee/create">Create</Link>
          </Button>


    
   </main>
  )
}

export default page