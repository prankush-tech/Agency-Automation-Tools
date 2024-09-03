'use client'
import WorkFLowForm from '@/components/forms/workflowForms'
import CustomModal from '@/components/global/custom-modal'
import { Button } from '@/components/ui/button'
import { useBilling } from '../../../../../providers/billing-providers'
import { useModal } from '@/providers/modal-providers'
import { Plus } from 'lucide-react'
import React from 'react'

type Props = {}

const WorkFLowButton = (props: Props) => {

  const {setOpen,setClose} = useModal()
  const { credits } = useBilling()


    const handleClick = ()=>{
        
      setOpen(
        <CustomModal
          title="Create a workflow automation"
          subheading = "Workflows are tools to automate your agency work"
        >
          <WorkFLowForm/>
        </CustomModal>
      )
    }

  return (
        <Button size={'icon'}  {...(credits !== '0'
        ? {
            onClick: handleClick,
          }
        : {
            disabled: true,
          })}
          className='bg-[#e2f24b] 
        text-neutral-900'>
            <Plus size={16} />
        </Button>
  )
}

export default WorkFLowButton