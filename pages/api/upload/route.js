const fs = require("fs").promises;
const { NextRequest, NextResponse } = require("next/server");

export async function POST(request) {
  const data = await request.formData();
  const file = data.get("file");

  if (!file) {
    return NextResponse.json({ sucess: false });
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const path = `/tmp/${file.name}`;
  await fs.writeFile(path, buffer);
  console.log(`abra ${path} para ver o arquivo`);

  return NextResponse.json({ sucess: true });
}
