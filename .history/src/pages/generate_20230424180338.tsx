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
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#393e46] to-[#444a53]">
        <h1>Type a prompt to generate</h1>
        <form action="">
          <label htmlFor="Prompt">Prompt </label>
          <input type="text" />
          <button> </button>
        </form>
      </main>
    </>
  )
}

export default GeneratePage
