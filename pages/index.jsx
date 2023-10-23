import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Presente from '../components/Presente'
import Porta from '@/components/Porta'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Presente />
      <Porta selecionada/>
      <Porta />
    </div>
  )
}
