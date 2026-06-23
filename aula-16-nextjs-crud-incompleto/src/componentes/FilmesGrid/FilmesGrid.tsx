"use client";

import { deleteFilme } from "@/services/filme.services";
import { Filme } from "@/tipos/filme";
import { useRouter } from "next/navigation";
import FilmeCard from "../FilmeCard/FilmeCard";
import '@/componentes/FilmesGrid/FilmeGrid.css';


interface FilmeGridProps{
    filmes: Filme[];

}

export default function FilmeGrid({filmes}: FilmeGridProps){
    const router = useRouter();

    async function handleDelete(id: number){
        try {
            await deleteFilme(id);
            router.refresh();
            // A atualização do estado visual é tratada pelo router.refresh() 
            // assumindo que os dados vêm de um Server Component pai.
        } catch (error){
            console.error("Erro na operação de exclusão:", error)
            alert("Não foi possível excluir o filme. Tente novamente mais tarde.");
        }
    }

    const filmesMap = filmes.map((f) => {
        return <FilmeCard key={f.id}
         filme={f} 
         onDelete={handleDelete} />
    });

    return(
        <div className="grid">
            {filmesMap}
        </div>
    );
}