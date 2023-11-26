import { useState } from "react";
import { useForm } from "react-hook-form";
import CoordGps from "./CoordGps";

export default function CadastroForm() {
  const [output, setOutput] = useState("");
  const [file, setFile] = useState();
  const { register, handleSubmit } = useForm();

  async function criarAnuncio(data) {
    setOutput(JSON.stringify(data, null, 2));
  }

  const onSubmit = async (data) => {
    try {
      if (!file) throw new Error("File not selected");

      await criarAnuncio(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div>
        <form encType="multipart/form-data" onSubmit={handleSubmit(onSubmit)}>
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

            <button type="submit">Enviar anúncio</button>
          </article>
        </form>
        <pre>{output}</pre>
      </div>
    </>
  );
}
