import { useSession, signIn, signOut } from "next-auth/react"

export default function Component() {
  const { data: session } = useSession()

  if (session) {
    return <>
      <p>Signed in as <span className='font-bold'>{session!.user!.email}</span></p>
      <button onClick={() => signOut()} className='bg-blue-500 py-1 px-3 text-white rounded'>Sign out</button>
    </>
  }

  return <>
    <p>Not signed in</p>
    <button onClick={() => signIn()} className='bg-blue-500 py-1 px-3 text-white rounded'>Sign in</button>
  </>
}