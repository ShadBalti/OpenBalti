export default function Home() {
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold text-center">OpenBalti Dictionary</h1>
      <p className="text-center mt-4">Explore and contribute to the digital preservation of the Balti language</p>
      <div className="text-center mt-8">
        <a href="/words" className="inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          Browse Dictionary
        </a>
      </div>
    </div>
  )
}
