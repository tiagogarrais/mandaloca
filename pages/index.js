import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import Anuncios from "/components/Anuncios";

export default function Home() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        Bem vindo(a) {session.user.email} -
        <a>
          <button onClick={() => signOut()}> Desconectar</button>
        </a>
        <button>
          <Link href="/cadastro">Cadastrar anúncio</Link>
        </button>
        <div class="container my-4 mx-auto md:px-12">
          <div class="flex flex-wrap">
            <Anuncios />
            <Anuncios />
            <Anuncios />
            <Anuncios />
            <Anuncios />
            <Anuncios />
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      Você não está conectado <br />
      <button onClick={() => signIn()}>Entrar</button>
      <br />
    </>
  );
}
