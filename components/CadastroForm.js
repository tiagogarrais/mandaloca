import { useState } from "react";
import { useForm } from "react-hook-form";
import CoordGps from "./CoordGps";

export default function CadastroForm() {
  const [output, setOutput] = useState("");
  const [file, setFile] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  const { register, handleSubmit } = useForm();

  const criarAnuncio = async (data) => {
    // Inclua latitude e longitude no objeto de dados
    const dadosComLocalizacao = { ...data, latitude, longitude };
    setOutput(JSON.stringify(dadosComLocalizacao, null, 2));

    try {
      // Envia os dados para o servidor (substitua pela URL do seu servidor)
      const response = await fetch("URL_DO_SEU_SERVIDOR", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dadosComLocalizacao),
      });

      if (response.ok) {
        // A resposta foi bem-sucedida, você pode lidar com isso aqui
        console.log("Dados enviados com sucesso!");
      } else {
        // A resposta não foi bem-sucedida, lida com isso aqui
        console.error("Erro ao enviar dados para o servidor.");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const onSubmit = async (data) => {
    try {
      if (!file) throw new Error("File not selected");

      await criarAnuncio(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleLocationChange = (newLocation) => {
    setLatitude(newLocation.latitude);
    setLongitude(newLocation.longitude);
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

            {/* Inputs hidden para armazenar latitude e longitude */}
            <input
              type="hidden"
              {...register("latitude", { value: latitude })}
            />
            <input
              type="hidden"
              {...register("longitude", { value: longitude })}
            />

            <CoordGps onLocationChange={handleLocationChange} />

            <button type="submit">Enviar anúncio</button>
          </article>
        </form>
        <pre>{output}</pre>
      </div>
    </>
  );
}
