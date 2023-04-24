import { type NextPage } from 'next'
import { signIn, signOut, useSession } from 'next-auth/react'
import Head from 'next/head'
import { useState } from 'react'
import { Button } from '~/components/Button'
import { FormGroup } from '~/components/FormGroup'
import { Input } from '~/components/Input'
import { api } from '~/utils/api'

const GeneratePage: NextPage = () => {
  //   const hello = api.example.hello.useQuery({ text: 'from tRPC' })
  const [form, setForm] = useState({
    prompt: '',
  })

  const generateIcon = api.generate.generateIcon.useMutation({
    onSuccess(data) {
      console.log('first', data)
    },
  })

  function handleFormSubmit(e: React.FormEvent) {
    e.preventDefault()
    // TODO: submit the form data to the backend
    generateIcon.mutate({
      prompt: form.prompt,
    })
  }

  function updateForm(key: string) {
    return function (e: React.ChangeEvent<HTMLInputElement>) {
      setForm((prev) => ({ ...prev, [key]: e.target.value }))
    }
  }

  const session = useSession()
  const isLoggedIn = !!session.data

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center">
        {!isLoggedIn && (
          <Button
            onClick={() => {
              signIn().catch(console.error)
            }}
          >
            Login
          </Button>
        )}

        {isLoggedIn && (
          <Button
            onClick={() => {
              signOut().catch(console.error)
            }}
          >
            Logout
          </Button>
        )}

        {session.data?.user.name}
        
        <form className="flex flex-col gap-4" action="" onSubmit={handleFormSubmit}>
          <FormGroup>
            <label htmlFor="Prompt">Type a prompt to generate image </label>
            <Input value={form.prompt} onChange={updateForm('prompt')}></Input>
          </FormGroup>

          <Button>Generate </Button>
        </form>
      </main>
    </>
  )
}

export default GeneratePage
