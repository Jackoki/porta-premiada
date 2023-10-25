import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Presente from '../components/Presente'
import Porta from '../components/Porta'
import PortaModel from '../model/porta'
import { useState } from 'react'
import { atualizarPortas, criarPortas } from '../functions/portas'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [p1, setP1] = useState(new PortaModel(1))

  const [portas, setPortas] = useState(criarPortas(3, 2))

  function renderizarPortas() {
    return portas.map(porta => {
      return <Porta key={porta.numero} value={porta} 
      onChange={novaPorta => setPortas(atualizarPortas(portas, novaPorta))}/>
    })
  }

  return (
    <div style={{display: "flex"}}>
      {renderizarPortas()}
    </div>
  )
}
