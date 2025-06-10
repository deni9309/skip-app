import SkipSelector from './components/SkipSelector'

function App() {
  return (
    <div className="min-h-screen bg-base-100 p-8" data-theme="lemonade">
      {/* Progress Steps */}
      <div className="flex justify-between mb-12">
        <div className="flex items-center text-primary">
          <span className="mr-2">✓</span>
          <span>Postcode</span>
        </div>
        <div className="flex items-center text-primary">
          <span className="mr-2">✓</span>
          <span>Waste Type</span>
        </div>
        <div className="flex items-center text-accent">
          <span className="mr-2">→</span>
          <span>Select Skip</span>
        </div>
      </div>

      <SkipSelector />
    </div>
  )
}

export default App
