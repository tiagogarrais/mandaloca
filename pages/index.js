import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'
import Anuncios from "/components/Anuncios"


export default function Home() {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        Bem vindo(a) {session.user.email} -
        <a>
          <span onClick={() => signOut()}> Desconectar</span>
        </a>
        <div className="button">
          <Link href="/cadastro">Cadastrar anúncio</Link>
        </div>
        <Anuncios />
      </>
    );
  }
  return (
    <>
      Você não está conectado <br />
      <div className="button" onClick={() => signIn()}>
        Entrar
      </div>
      <br />
    </>
  );
}
