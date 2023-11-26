import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth].js";
import { writeFile } from "fs/promises";

export default async (req, res) => {
  const session = await getServerSession(req, res, authOptions);

  if (session) {
    try {
      const data = await req.formData();
      const file = data.get("file");

      if (!file) {
        return res.json({ success: false });
      }

      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);

      const path = `/tmp/${file.name}`;
      await writeFile(path, buffer);
      console.log(`abra ${path} para ver o arquivo`);

      res.send({
        content: "Você está logado e por isso tem acesso a este conteúdo.",
      });

      return res.json({ success: true });
    } catch (error) {
      console.error(error);
      res.status(500).send({ error: "Erro interno do servidor" });
    }
  } else {
    res.send({
      error: "Você precisa estar logado para ver o conteúdo desta página.",
    });
  }
};
