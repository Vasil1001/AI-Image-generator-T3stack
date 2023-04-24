import { type NextPage } from 'next'
import Head from 'next/head'
import { FormGroup } from '~/components/FormGroup'
import { Input } from '~/components/input'

const GeneratePage: NextPage = () => {
  //   const hello = api.example.hello.useQuery({ text: 'from tRPC' })

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <form className="flex flex-col gap-4" action="">
          <FormGroup>
            <label htmlFor="Prompt">Type a prompt to generate image </label>
          <Input></Input>
          </FormGroup>
          
          <button className="rounded-md bg-blue-500 px-4 py-2 hover:bg-blue-600">Generate </button>
        </form>
      </main>
    </>
  )
}

export default GeneratePage
