import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import CadastroForm from "../components/CadastroForm";

export default function AcessoComLogin() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <CadastroForm />
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
