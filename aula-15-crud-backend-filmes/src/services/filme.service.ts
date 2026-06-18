import { prisma } from "../prisma/client";

export class FilmeService{

    async create(dados: {titulo: string; nota: number; imagem: string; })
    {
        await prisma.filme.create({
            data: dados,
        });
    }

    async delete(id: number)
    {
        await prisma.filme.delete({
            where: {id}
        });
    }

    async findAll()
    {
        return await prisma.filme.findMany();
    }

    async findById(id: number)
    {
        return await prisma.filme.findUnique({
            where: {id}
        });
    }

    async update(id:number, dados: {titulo: string; nota: number; imagem: string; })
    {
        await prisma.filme.update({
            where:{id},
            data: dados,
        });
    }

}