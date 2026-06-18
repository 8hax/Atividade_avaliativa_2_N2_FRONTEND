import styles from '@/app/page.module.css';
import FilmeGrid from '@/componentes/FilmesGrid/FilmesGrid';
import { getFilmes } from '@/services/filme.services';

export default async function Home() {

  const filmes = await getFilmes();

  return (
    <main className={styles.home}>
      <FilmeGrid filmes = {filmes}/>
    </main>
  );
}