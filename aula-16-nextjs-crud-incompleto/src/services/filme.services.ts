import {Filme, CreateFilmeDTO, UpdateFilmeDTO} from "@/tipos/filme";

const API_URL =
  process.env.NEXT_PUBLIC_API_URL;

export async function getFilmes(): Promise<Filme[]>
{
  const response  = await fetch(`${API_URL}/filmes`);
  const dados = await response.json();
  return dados;
}

// export async function getFilme(id: string): Promise<Filme> {

// }

// export async function createFilmes(filme: CreateFilmeDTO): Promise<void>
// {
 
// }


// export async function updateFilme(id: number, filme: UpdateFilmeDTO): Promise<void>
// {
    
// }

export async function deleteFilme(id: number): Promise<void>
{

}