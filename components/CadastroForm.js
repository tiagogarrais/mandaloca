import Link from "next/link";
import CoordGps from "./CoordGps";
import { UseForm, useForm } from "react-hook-form";
import { useState } from "react";

export default function CadastroForm() {
  const [output, setOutput] = useState("");
  const { register, handleSubmit } = useForm();

  function criarAnuncio(data) {
    setOutput(JSON.stringify(data, null, 2));
  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit(criarAnuncio)}>
          <h2>Cadastre seu anúncio</h2>
          <article className="flex flex-col bg-gray-200">
            <label>
              <input
                className="w-11/12 m-1 text-center"
                type="text"
                placeholder="Título"
                {...register("titulo")}
              />
            </label>
            <label>
              <input
                className="w-11/12 m-1 text-center"
                type="number"
                placeholder="Preço"
                {...register("preco")}
              />
            </label>
            <label>
              <textarea
                className="w-11/12 m-1 text-justify"
                rows={5}
                placeholder="Descrição"
                {...register("descricao")}
              />
            </label>
            <label>
              Foto:
              <input type="file" />
            </label>
            <CoordGps />
            <div>
              <button>Enviar anúncio</button>
            </div>
          </article>
        </form>
        <pre>{output}</pre>
      </div>
    </>
  );
}
