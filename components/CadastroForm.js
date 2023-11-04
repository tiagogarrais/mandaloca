import Link from "next/link";
import CoordGps from "./CoordGps";

export default function CadastroForm() {
  return (
    <>
      <div>
        <form>
          <h2>Cadastre seu anúncio</h2>
          <article>
            <label>
              <input type="text" placeholder="Título" />
            </label>
            <label>
              <input type="number" placeholder="Preço" />
            </label>
            <label>
              <textarea rows={5} placeholder="Descrição" />
            </label>
            <label>
              Foto:
              <input type="file" />
            </label>
            <div className="inboxgroup">
              <label>
                <input type="checkbox" />
                Casa para venda
              </label>
              <label>
                <input type="checkbox" />
                Casa para aluguel
              </label>
              <label>
                <input type="checkbox" />
                Terreno para venda
              </label>
              <label>
                <input type="checkbox" />
                Terreno para aluguel
              </label>
            </div>
            <CoordGps />

            <div>
              <div className="button">
                <Link href="/">Enviar anúncio</Link>
              </div>
            </div>
          </article>
        </form>
      </div>
    </>
  );
}
