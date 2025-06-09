import SkipSelector from './components/SkipSelector'

function App() {

  return (
    <div className="min-h-screen bg-black p-8">
      {/* Progress Steps */}
      <div className="flex justify-between mb-12">
        <div className="flex items-center text-blue-500">
          <span className="mr-2">✓</span>
          <span>Postcode</span>
        </div>
        <div className="flex items-center text-blue-500">
          <span className="mr-2">✓</span>
          <span>Waste Type</span>
        </div>
        <div className="flex items-center text-white">
          <span className="mr-2">→</span>
          <span>Select Skip</span>
        </div>
        {/* Add other steps... */}
      </div>

      {/* Main Content */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Choose Your Skip Size</h1>
        <p className="text-gray-400">Select the skip size that best suits your needs</p>
      </div>

  
     <SkipSelector />
    </div>
  )
}

export default App
