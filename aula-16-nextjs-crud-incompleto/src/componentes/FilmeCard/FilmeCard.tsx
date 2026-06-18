"use client"

import { Filme } from "@/tipos/filme"
import Link from "next/link"
import '@/componentes/FilmeCard/FilmeCard.css'

interface FilmeCardProps{
    filme: Filme;
    onDelete: (id: number) => void;
}

export default function FilmeCard({filme, onDelete}: FilmeCardProps){
    return(
        <div className="card">
            <img src="{filme.imagem}" alt="filme.titulo" />

            <h2>{filme.titulo}</h2>

            <p>{filme.nota}</p>

            <div className="btn-acoes">
                <Link href={`/filmes/${filme.id}/editar`}>Editar</Link>
                <button onClick={() => onDelete?.(filme.id)}>Deletar</button>
            </div>


        </div>
    )
}