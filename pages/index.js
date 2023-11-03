import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'


export default function Home() {
  const { data: session } = useSession()
    return (
      <>
        <h1>Esta é a página inicial</h1>
        <p><Link href='/acesso-com-login'>Clique aqui para acessar a área protegida</Link></p>
        <p><Link href='/api/restrito'>Clique aqui para acessar a API protegida</Link></p>        
      </>
    )

}