// import { useState } from 'react'
// import logo from './logo.svg'
import "./App.css";
import Testimonial from "./Components/Testimonial";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <h1>Academlo</h1>
      </header>
      <main className="App-main">
        <Testimonial
          nombre="Andrea Tozcano Fuerte"
          pais="México"
          cargo="Desarrollador de software"
          empresa="Slack"
          testimonio="Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de los cientos de horas de lecciones gratuitas en Academlo. Dentro de un año tuve un trabajo de seis cifras como ingeniero de software. Academlo cambió mi vida."
        />

        <Testimonial
          nombre="Karla Cazares Lopez"
          pais="Perú"
          cargo="Backend Developer"
          empresa="Academlo"
          testimonio="Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de Academlo fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en Academlo me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como Backend Developer en Academlo."
        />
      </main>
    </div>
  );
}

export default App;
