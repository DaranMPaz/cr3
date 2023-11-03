import { Button, Modal, ModalBody, ModalContent } from '@nextui-org/react'
import { useRouter } from 'next/navigation'
import NavLink from './NavLink'

export default function ModalMenu(
  {
    isOpen,
    onOpen,
    onOpenChange
  }: {
    isOpen: any,
    onOpen: any,
    onOpenChange: any
  }) {

  const router = useRouter()

  return (
    <Modal isOpen={isOpen} placement='bottom' onOpenChange={onOpenChange} >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalBody className='p-6'>
              <ul className='flex flex-col gap-6'>
                <NavLink onClose={onClose} pathName="/" text="Inicio" />
                <NavLink onClose={onClose} pathName="/about" text="Sobre" />
                <NavLink onClose={onClose} pathName="/audit" text="Auditoria de Terceira Parte" />
                <NavLink onClose={onClose} pathName="/iso" text="Consultoria ISO" />
                <NavLink onClose={onClose} pathName="/news" text="Conteúdo" />
                <NavLink onClose={onClose} pathName="/faq" text="Perguntas Frequentes" />
                <Button
                  variant='bordered'
                  color='warning'
                  radius='sm'
                  size='lg'
                  className='w-full hover:text-red-400 hover:border-red-400'
                  onClick={() => router.push('/contact')}
                  onPress={onClose}
                >
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