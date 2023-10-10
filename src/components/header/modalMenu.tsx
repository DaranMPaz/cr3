import { Modal, ModalBody, ModalContent, useDisclosure, Button } from '@nextui-org/react'
import NavLink from './navLink'
import { useRouter } from 'next/navigation'

export default function ModalMenu(
  {
    isOpen, 
    onOpen, 
    onOpenChange
  }:{
    isOpen:any, 
    onOpen:any, 
    onOpenChange:any
  }) {

  const router = useRouter()

  return(
    <Modal isOpen={isOpen} placement='top' onOpenChange={onOpenChange} >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalBody className='p-6'>
              <ul className='flex flex-col gap-6'>
                  <NavLink pathName="/" text="Inicio" />
                  <NavLink pathName="/about" text="Sobre" />
                  <NavLink pathName="/services/audit" text="Auditoria de Terceira Parte" />
                  <NavLink pathName="/services/iso" text="Auditoria ISO" />
                  <NavLink pathName="/news" text="Conteúdo" />
                  <Button 
                    variant='bordered' 
                    color='warning' 
                    radius='sm' 
                    size='lg' 
                    className='w-full hover:text-red-400 hover:border-red-400' 
                    onClick={() => router.push('/contact')}>
                    Entre em contato
                  </Button>
              </ul>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  )
}