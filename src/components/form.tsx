'use client'

import { Input, Textarea } from "@nextui-org/react"
import { FormEvent, useState } from "react"
import { SuccessMessage } from "./successMessage"

export function Form(){

  const [isSubmited, setIsSubmited] = useState(false)
  const [name, setName] = useState('')
  const [company, setCompany] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')

  const onSubmit = async (e:FormEvent) => {
    e.preventDefault()
    
    try {
      const res = await fetch('/api/contact',{
        method: 'POST',
        body: JSON.stringify({ name, company, email, phone, message }),
        headers: { 'content-type': 'application/json' }
      })

      if (res.status === 200) {
        setIsSubmited(true)
      }

    } 
    catch (error) {
      console.error('Error: ', error)
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

      <input 
        className="flex cursor-pointer items-center px-4 py-3 font-bold rounded
        bg-theme-yellow-800 text-theme-gray-900 uppercase hover:bg-theme-red-500
        hover:text-theme-gray-50 w-full justify-center" 
        type="submit" 
        value="Enviar" />
    </form> )
}