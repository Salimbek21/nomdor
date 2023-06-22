import Head from 'next/head'
import { Inter } from 'next/font/google'
import Card from '@/components/Card'
import { data } from '@/shared/data'
import Product from '@/components/Product'
import ProductSecond from '@/components/ProductSecond'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Product data={data}/> 
      <ProductSecond data={data}/> 
    </>
  )
}
