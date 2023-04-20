import { Button } from "../../components/atoms/Button"
import './styles.css'

export const About = () => {
 return (
  <main className="content about">
   <div className="about_wrapper">
    <h1>&lt;/&gt; Start World Front-end</h1>
    <p>O mundo do front-end é uma verdadeira maravilha digital, onde a criatividade se encontra com a tecnologia. É um universo em constante evolução, repleto de oportunidades e desafios emocionantes. Como desenvolvedor front-end, você é o arquiteto das interfaces de usuário que milhões de pessoas interagem todos os dias na web.

     No front-end, você tem o poder de transformar conceitos de design em realidade, construindo websites e aplicativos que são visualmente atraentes, funcionais e envolventes. É um espaço onde você pode explorar sua paixão pela estética, pela usabilidade e pela experiência do usuário.
    </p>
    <Button text="Avançar na Jornada &rarr;" />
   </div>
   <figure className="container_img">
    <img src="https://images.unsplash.com/photo-1549082984-1323b94df9a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Imagem desenvolvedora Front-end - unsplash" />
   </figure>
  </main>
 )
}