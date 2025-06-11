import { Calendar, CreditCard, MapPinCheck, ShieldCheck, TrashIcon, TruckIcon } from 'lucide-react'

const ProgressSteps = () => {
  return (
    //Progress Steps - should be dynamic
    <div className="max-md:flex max-md:mx-auto max-md:w-full">
      <div className="flex md:flex-row flex-col max-md:items-start max-md:mx-auto max-md:gap-x-1 max-w-6xl md:justify-between mx-auto mb-12">
        <div className="flex items-center text-primary mx-1 mb-4">
          <span className="mr-1">
            <MapPinCheck className="size-5" />
          </span>
          <span>Postcode</span>
        </div>
        <div className="flex items-center text-primary mx-1 mb-4">
          <span className="mr-1">
            <TrashIcon className="size-5" />
          </span>
          <span>Waste Type</span>
        </div>

        {/* Current step set manually for the demo - this also should be dynamic */}
        <div className="flex items-center text-accent mx-1 mb-4">
          <span className="mr-1">
            <TruckIcon className="size-5" />
          </span>
          <span>Select Skip</span>
        </div>

        <div className="flex items-center text-primary mx-1 mb-4 cursor-not-allowed">
          <span className="mr-1">
            <ShieldCheck className="size-5" />
          </span>
          <span>Permit Check</span>
        </div>
        <div className="flex items-center text-primary mx-1 mb-4 cursor-not-allowed">
          <span className="mr-1">
            <Calendar className="size-5" />
          </span>
          <span>Choose Date</span>
        </div>
        <div className="flex items-center text-primary mx-1 mb-4 cursor-not-allowed">
          <span className="mr-1">
            <CreditCard className="size-5" />
          </span>
          <span>Payment</span>
        </div>
      </div>
    </div>
  )
}

export default ProgressSteps
