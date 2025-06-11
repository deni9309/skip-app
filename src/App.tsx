import ProgressSteps from './components/ProgressSteps'
import SkipSelector from './components/SkipSelector'

function App() {
  return (
    <div className="min-h-screen bg-base-100 p-8" data-theme="lemonade">
      <ProgressSteps />
      <SkipSelector />
    </div>
  )
}

export default App
