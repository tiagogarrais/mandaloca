import Link from "next/link";
import CoordGps from "./CoordGps";

export default function CadastroForm() {
  return (
    <>
      <div>
        <form>
          <h2>Cadastre seu anúncio</h2>
          <article className="flex flex-col bg-gray-200">
            <label>
              <input
                className="w-11/12 m-1 text-center"
                type="text"
                placeholder="Título"
              />
            </label>
            <label>
              <input
                className="w-11/12 m-1 text-center"
                type="number"
                placeholder="Preço"
              />
            </label>
            <label>
              <textarea
                className="w-11/12 m-1 text-justify"
                rows={5}
                placeholder="Descrição"
              />
            </label>
            <label>
              Foto:
              <input type="file" />
            </label>
            <CoordGps />
            <div>
              <button type="submit">
                <Link href="/">Enviar anúncio</Link>
              </button>
            </div>
          </article>
        </form>
      </div>
    </>
  );
}
