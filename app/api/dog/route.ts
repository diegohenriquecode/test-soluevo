import { NextResponse } from "next/server";

export async function GET() {
    try {
        const res = await fetch("https://dog.ceo/api/breeds/image/random");
        const data = await res.json();
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ message: "Erro ao buscar imagem", error }, { status: 500 });
    }
}

