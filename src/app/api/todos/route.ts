import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";
import { authOptions } from "@/app/lib/auth";

export async function GET() {
    const session = await getServerSession(authOptions);

    if (!session || !session.user) {
        return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
    }

    const todos = await prisma.todo.findMany({
        where: { userId: Number(session.user.id) },
        orderBy: { id: "desc" },
    });

    return NextResponse.json(todos);
}

export async function POST(req: Request) {
    const session = await getServerSession(authOptions);

    if (!session || !session.user) {
        return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
    }

    const { title } = await req.json();

    const todo = await prisma.todo.create({
        data: {
            title,
            userId: Number(session.user.id),
        },
    });

    return NextResponse.json(todo);
}
