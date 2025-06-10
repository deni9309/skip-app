import { useEffect, useState } from 'react'
import api from '../lib/axios'
import type { ISkip } from '../interfaces/ISkip'
import { handleApiError } from '../lib/utils/handle-api-errors'
import { loadImage } from '../lib/utils/load-image'
import Error from './shared/Error'
import Loader from './shared/Loader'
import { ExclamationCircleIcon } from '@heroicons/react/16/solid'

const SkipSelector = () => {
  const [skipOptions, setSkipOptions] = useState<ISkip[]>([])
  const [selectedSkip, setSelectedSkip] = useState<number | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchSkipOptions = async () => {
      try {
        setIsLoading(true)
        const response = await api.get('/skips/by-location', {
          params: {
            postcode: 'NR32',
            area: 'Lowestoft',
          },
        })
        setSkipOptions(response.data)
      } catch (error) {
        console.error('Error fetching skips:', error)
        const message = handleApiError(error)
        setError(message)
      } finally {
        setIsLoading(false)
      }
    }

    fetchSkipOptions()
  }, [])

  const calculateTotalPrice = (price: number, vat: number) => {
    return price + price * (vat / 100)
  }

  if (isLoading) {
    return <Loader />
  }

  if (error) {
    return <Error errorMessage={error} />
  }

  return (
    <div className="mx-auto max-w-6xl">
      <div className="text-center mb-14">
        <h1 className="text-3xl font-bold text-primary mb-2">Choose Your Skip Size</h1>
        <p className="text-base-content text-lg">Select the skip size that best suits your needs</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:px-10">
        {skipOptions.map((skip) => (
          <div
            key={skip.id}
            className={`rounded-lg border-2 transition-all flex flex-col justify-between p-4 ${
              selectedSkip === skip.id
                ? 'border-accent shadow-lg shadow-current/5'
                : 'border-base-200'
            }`}
          >
            <div className="relative">
              <img
                src={loadImage(skip.size)}
                alt={`${skip.size} Yard Skip`}
                className="object-cover h-[250px] w-full overflow-hidden rounded-lg"
              />
              <span className="absolute top-2 right-2 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm">
                {skip.size} Yards
              </span>
            </div>

            <h3 className="text-xl text-white mt-4">{skip.size} Yard Skip</h3>
            <p className="text-base-content">{skip.hire_period_days} day hire period</p>
            <p className="text-secondary text-2xl font-bold mt-2">
              £{calculateTotalPrice(skip.price_before_vat, skip.vat).toFixed(2)}
            </p>

            {!skip.allowed_on_road && (
              <span className="flex justify-start items-center my-2 gap-1">
                <ExclamationCircleIcon className="w-6 h-6 text-yellow-500" />
                <p className="text-yellow-500 text-sm">Not allowed on road placement</p>
              </span>
            )}

            <button
              onClick={() => setSelectedSkip(skip.id)}
              className={`w-full mt-4 text-white py-2 rounded-lg transition-colors ${
                selectedSkip === skip.id ? 'bg-primary' : 'bg-base-content hover:bg-base-content/80'
              }`}
            >
              {selectedSkip === skip.id ? 'Selected' : 'Select This Skip'}
            </button>
          </div>
        ))}
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-accent p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-base-content">
            {selectedSkip && (
              <>
                <span>Selected: </span>
                <span className="font-bold">
                  {skipOptions.find((s) => s.id === selectedSkip)?.size} Yard Skip
                </span>
                <span className="font-extrabold text-lg ml-2">
                  £
                  {calculateTotalPrice(
                    skipOptions.find((s) => s.id === selectedSkip)?.price_before_vat || 0,
                    skipOptions.find((s) => s.id === selectedSkip)?.vat || 0,
                  ).toFixed(2)}
                </span>
              </>
            )}
          </div>
          <div className="flex font-semibold gap-4">
            <button className="px-6 py-2 bg-base-content transition text-base-100 hover:bg-base-content/80 rounded-lg">
              Back
            </button>
            <button
              className="px-6 py-2 bg-primary transition hover:bg-primary-content text-white rounded-lg disabled:opacity-50"
              disabled={!selectedSkip}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SkipSelector
