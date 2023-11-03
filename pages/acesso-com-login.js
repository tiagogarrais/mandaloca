import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'

export default function AcessoComLogin() {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
        <p><Link href='/'>Voltar para a página inicial</Link></p>
      </>
    )
  }
  return (
    <>
      Você não está logado <br />
      <button onClick={() => signIn()}>Entrar</button><br/>
      <p><Link href='/'>Voltar para a página inicial</Link></p>

    </>
  )
}