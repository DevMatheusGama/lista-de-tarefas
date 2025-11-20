import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/route";
import { NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";

export async function PATCH(req: Request, { params }: any) {
    const data = await req.json();

    const updated = await prisma.todo.update({
        where: { id: Number(params.id) },
        data: {
            done: data.done,
        },
    });

    return NextResponse.json(updated);
}

export async function DELETE(
    req: Request,
    { params }: { params: { id: string } }
) {
    const session = await getServerSession(authOptions);

    if (!session || !session.user) {
        return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
    }

    await prisma.todo.delete({
        where: {
            id: Number(params.id),
            userId: Number(session.user.id),
        },
    });

    return NextResponse.json({ message: "Tarefa deletada" });
}