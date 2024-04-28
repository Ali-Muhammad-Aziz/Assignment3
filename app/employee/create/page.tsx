import { EmployeeForm } from '@/components/ui/employee-form'
import { FormWrapper } from '@/components/ui/form-wrapper'
import React from 'react'

const page = () => {
  return (
    <div className='flex justify-center items-center h-screen w-screen'>
        <FormWrapper title='create a new employee' >
      <EmployeeForm />
    </FormWrapper>
    </div>
  )
}

export default page