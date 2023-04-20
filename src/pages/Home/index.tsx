import { Button } from '../../components/atoms/Button';
import './styles.css';
export const Home = () => {
  return (
    <div className="content home">
      <h3>Hello World</h3>
      <p>&lt;/&gt; Uma jornada de programador &lt;/&gt;</p>
      <Button text="Iniciar Jornada &rarr;" />
    </div>
  )
}