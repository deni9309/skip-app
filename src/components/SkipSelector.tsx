import { useEffect, useState } from 'react'
import api from '../lib/axios'
import type { ISkip } from '../interfaces/ISkip'



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
        console.error('Error fetching skip options:', error)
        setError('Failed to load skip options')
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
    return <div className="text-white">Loading...</div>
  }

  if (error) {
    return <div className="text-red-500">{error}</div>
  }

  return (
    <div className="bg-black p-8">

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skipOptions.map((skip) => (
          <div
            key={skip.id}
            className={`rounded-lg p-4 ${
              selectedSkip === skip.id ? 'border-2 border-blue-500' : 'border border-gray-700'
            }`}
          >
            <div className="relative">
              <img
                src={`/images/${skip.size}yard-skip.png`} // You'll need to add these images
                alt={`${skip.size} Yard Skip`}
                className="w-full rounded-lg"
              />
              <span className="absolute top-2 right-2 bg-blue-600 text-white px-3 py-1 rounded-full">
                {skip.size} Yards
              </span>
            </div>

            <h3 className="text-xl text-white mt-4">{skip.size} Yard Skip</h3>
            <p className="text-gray-400">{skip.hire_period_days} day hire period</p>
            <p className="text-blue-500 text-2xl font-bold mt-2">
              £{calculateTotalPrice(skip.price_before_vat, skip.vat).toFixed(2)}
            </p>

            {!skip.allowed_on_road && (
              <p className="text-yellow-500 text-sm mt-2">Not allowed on road placement</p>
            )}

            <button
              onClick={() => setSelectedSkip(skip.id)}
              className={`w-full mt-4 py-2 rounded-lg ${
                selectedSkip === skip.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-800 text-white hover:bg-gray-700'
              }`}
            >
              {selectedSkip === skip.id ? 'Selected' : 'Select This Skip'}
            </button>
          </div>
        ))}
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-black border-t border-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white">
            {selectedSkip && (
              <>
                <span className="text-gray-400">Selected: </span>
                <span>{skipOptions.find((s) => s.id === selectedSkip)?.size} Yard Skip</span>
                <span className="text-blue-500 ml-2">
                  £
                  {calculateTotalPrice(
                    skipOptions.find((s) => s.id === selectedSkip)?.price_before_vat || 0,
                    skipOptions.find((s) => s.id === selectedSkip)?.vat || 0,
                  ).toFixed(2)}
                </span>
              </>
            )}
          </div>
          <div className="flex gap-4">
            <button className="px-6 py-2 bg-gray-800 text-white rounded-lg">Back</button>
            <button
              className="px-6 py-2 bg-blue-600 text-white rounded-lg disabled:opacity-50"
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
