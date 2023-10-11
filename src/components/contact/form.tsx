'use client'

import { Input, Textarea } from "@nextui-org/react"
import { FormEvent, useState } from "react"
import { SuccessMessage } from "./successMessage"
import { Button } from '@nextui-org/react'

export function Form(){

  const [isSubmited, setIsSubmited] = useState(false)
  const [submiting, setSubmiting] = useState(false)
  const [name, setName] = useState('')
  const [company, setCompany] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')

  const onSubmit = async (e:FormEvent) => {
    e.preventDefault()

    setSubmiting(true)
    console.log(submiting)
    
    try {
      const res = await fetch('/api/contact',{
        method: 'POST',
        body: JSON.stringify({ name, company, email, phone, message }),
        headers: { 'content-type': 'application/json' },
        mode: 'no-cors'
      })

      if (res.status === 200) {
        setIsSubmited(true)
      }

    } 
    catch (error) {
      console.error('Error: ', error)
    }
    finally {
      setSubmiting(false)
    }
  }

  return isSubmited ? ( <SuccessMessage /> ) : 
    ( <form onSubmit={onSubmit} className="flex flex-col w-full gap-6 max-w-[500px]">

      <Input 
        type="text"
        label="Nome"
        placeholder="Seu nome e sobrenome"
        radius="none" 
        labelPlacement="outside" 
        size="lg" 
        variant="bordered"
        value={name} 
        onChange={ e => { setName(e.target.value) } }
        required />

      <Input 
        type="text" 
        radius="none" 
        labelPlacement="outside" 
        size="lg" 
        variant="bordered" 
        label="Empresa" 
        placeholder="Nome da sua empresa"
        value={company}
        onChange={ e => { setCompany(e.target.value) } }
        required />
      <div className="flex gap-6">

        <Input 
          type="email" 
          radius="none" 
          labelPlacement="outside" 
          size="lg" 
          variant="bordered" 
          label="E-mail" 
          placeholder="Seu melhor e-mail"
          value={email}
          onChange={ e => { setEmail(e.target.value) } }
          required />

        <Input 
          type="tel" 
          radius="none" 
          labelPlacement="outside" 
          size="lg" 
          variant="bordered" 
          label="Telefone (Opcional)"
          placeholder="(DDD) 0 0000-0000"
          value={phone}
          onChange={ e => { setPhone(e.target.value) } } />

      </div>

      <Textarea 
        radius="none" 
        labelPlacement="outside" 
        size="lg" variant="bordered" 
        label="Mensagem (Opcional)" 
        placeholder="Digite sua mensagem" 
        value={message}
        onChange={ e => { setMessage(e.target.value) } }/>

      <Button
        type="submit" 
        variant="solid" 
        color="warning" 
        className={`hover:bg-red-400 font-bold`} 
        radius="sm" 
        size="lg" 
        isLoading={submiting} 
        disabled={submiting}
      >
        {submiting ? 'Enviando mensagem' : 'Enviar'}
      </Button>
    </form> )
}