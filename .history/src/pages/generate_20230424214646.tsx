import { type NextPage } from 'next'
import Head from 'next/head'

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
        <h1>Type a prompt to generate</h1>
        <form action="">
          <label htmlFor="Prompt">Prompt </label>
          <Input type="text" />
          <button className='px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-xl'>Generate </button>
        </form>
      </main>
    </>
  )
}

export default GeneratePage
