interface ErrorPageProps {
  errorMessage?: string | undefined
}

const Error = ({ errorMessage = undefined }: ErrorPageProps) => {
  return (
    <section className="f-center flex-col overflow-y-auto">
      <h5 className="text-2xl text-center font-bold">
        {errorMessage || 'Something went wrong...'}
      </h5>

      <img src="/images/error.svg" alt="Error" className="max-w-[400px]" />
    </section>
  )
}

export default Error
