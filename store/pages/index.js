import Head from 'next/head'
import Image from 'next/image'

import {usePreviewSubscription, urlFor, PortableText} from '../lib/sanity'
import {getClient} from '../lib/sanity.server'
import { productList } from '../lib/query/productList'

export default function Home({data}) {
  console.log(data)
  console.log(urlFor(data.products[0].images[0]).url())
  return (
    <div></div>
  )
}

export async function getStaticProps(){

  const products = await getClient(false).fetch(productList)
  return {props:{
    data:{products}

  }}

}