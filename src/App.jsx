import { useState } from 'react'
import './app.css'

function App() {
  const [escolha, setEscolha] = useState('');
    
  return (
    <>
      <div className="titulo-container">
        <h1 className='azul'>Imobiliária Avenida</h1>
        <h2 className='azul'>Qual tipo de imóvel você procura?</h2>
      </div>

      <div className='linha'></div> {/* linha separadora */}

      <div className='imagens'>
        <img src="/ap.png" alt="Apartamento" onClick={() => setEscolha('Apartamento')} />
        <img src="/casa.png" alt="Casa" onClick={() => setEscolha('Casa')} />
        <img src="/terreno.png" alt="Terreno" onClick={() => setEscolha('Terreno')} />
      </div>

      {escolha && (
        <h2>Você selecionou: <span className='vermelho'>{escolha}</span></h2>
      )}
    </>
  )
}

export default App
