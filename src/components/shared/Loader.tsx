import { cn } from '../../lib/utils/clsx'

const Loader = ({ sm = false }: { sm?: boolean }) => {
  return (
    <div className="f-center flex-col space-y-1 min-h-[40vh]">
      <img
        src="/images/recycle.svg"
        alt="Recycle"
        className={cn('animate-bounce duration-1000', sm ? 'size-6' : 'size-14 max-sm:size-10')}
      />
      <p className='text-neutral/70 animate-pulse'>Loading</p>
    </div>
  )
}

export default Loader
