import { useScrollLeft } from '../../hooks/useScrollLeft';
import './styles.css';
export const Home = () => {
  return (
    <div className="content home">
      <h1>Hello World</h1>
      <p>&lt;/&gt; O retorno do programador &lt;/&gt;</p>
      <button onClick={useScrollLeft}>Iniciar Jornada &rarr;</button>
    </div>
  )
}