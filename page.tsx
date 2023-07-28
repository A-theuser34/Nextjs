import Image from 'next/image'

export interface Products{
  Product:string,
  Price:number,
  id:number
}

export default async function Home() {
  const res = await fetch('https://64bf045b5ee688b6250d179f.mockapi.io/Products',{
    cache:'no-cache'
  })

  const products:Products[] = await res.json()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
      <h1>products and Price</h1>
      <form>
        <input type='text' placeholder='enter product' name='Product' />
        <input type='text' placeholder='enter price' name="Price" />
        <button>
          add Product
        </button>
      </form>

      {products.map(product =>{
        return(
          <section>
            <div key={product.id}>
            <h2>{product.Product}</h2>
            <h2>{product.Price}</h2>
            </div>
          </section>
        )
      })}

      </div>
    </main>
  )
}
