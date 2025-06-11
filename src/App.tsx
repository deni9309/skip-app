import { Calendar, CreditCard, MapPinCheck, ShieldCheck, TrashIcon, TruckIcon } from 'lucide-react'
import SkipSelector from './components/SkipSelector'

function App() {
  return (
    <div className="min-h-screen bg-base-100 p-8" data-theme="lemonade">
      {/* Progress Steps - should be dynamic */}
      <div className="flex flex-wrap justify-center max-lg:gap-x-1 lg:justify-around mb-12">
        <div className="flex items-center text-primary mx-2 mb-4 md:mb-0">
          <span className="mr-2">
            <MapPinCheck className="size-5" />
          </span>
          <span>Postcode</span>
        </div>
        <div className="flex items-center text-primary mx-2 mb-4 md:mb-0">
          <span className="mr-2">
            <TrashIcon className="size-5" />
          </span>
          <span>Waste Type</span>
        </div>

        {/* Current step set manually for the demo - this also should be dynamic */}
        <div className="flex items-center text-accent mx-2 mb-4 md:mb-0">
          <span className="mr-2">
            <TruckIcon className="size-5" />
          </span>
          <span>Select Skip</span>
        </div>

        <div className="flex items-center text-primary mx-2 mb-4 md:mb-0 cursor-not-allowed">
          <span className="mr-2">
            <ShieldCheck className="size-5" />
          </span>
          <span>Permit Check</span>
        </div>
        <div className="flex items-center text-primary mx-2 mb-4 md:mb-0 cursor-not-allowed">
          <span className="mr-2">
            <Calendar className="size-5" />
          </span>
          <span>Choose Date</span>
        </div>
        <div className="flex items-center text-primary mx-2 mb-4 md:mb-0 cursor-not-allowed">
          <span className="mr-2">
            <CreditCard className="size-5" />
          </span>
          <span>Payment</span>
        </div>
      </div>

      <SkipSelector />
    </div>
  )
}

export default App
