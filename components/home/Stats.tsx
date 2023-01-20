export default function Example() {
  return (
    <div className="bg-blue-800">
      <div className="px-6 py-12 mx-auto max-w-7xl sm:py-16 lg:px-8 lg:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Backed by professionals and Right & Home! 
          </h2>
          <p className="mt-3 text-xl text-blue-200 sm:mt-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus repellat laudantium.
          </p>
        </div>
        <dl className="mt-10 text-center sm:mx-auto sm:grid sm:max-w-3xl sm:grid-cols-3 sm:gap-8">
          <div className="flex flex-col">
            <dt className="order-2 mt-2 text-lg font-medium leading-6 text-blue-200">Pepperoni</dt>
            <dd className="order-1 text-5xl font-bold tracking-tight text-white">100%</dd>
          </div>
          <div className="flex flex-col mt-10 sm:mt-0">
            <dt className="order-2 mt-2 text-lg font-medium leading-6 text-blue-200">Delivery</dt>
            <dd className="order-1 text-5xl font-bold tracking-tight text-white">24/7</dd>
          </div>
          <div className="flex flex-col mt-10 sm:mt-0">
            <dt className="order-2 mt-2 text-lg font-medium leading-6 text-blue-200">Viewers</dt>
            <dd className="order-1 text-5xl font-bold tracking-tight text-white">100k+</dd>
          </div>
        </dl>
      </div>
    </div>
  )
}