const Newsletter: React.FC = () => {
  return (
    <section className="newsletter bg-primary py-10 transition-all duration-300">
      <div className="container">
        <h1 className="text-[28px] font-roboto font-bold text-white">Subscribe Our Newsletter</h1>
        <form className="flex items-center justify-end w-1/2" onSubmit={(e) => e.preventDefault()}>
          <input className="px-4 py-4 placeholder:text-grey placeholder:text-base w-full focus:border-0 focus:outline-none" type="text" placeholder="Enter Email Address" />
          <button className="text-base font-poppins bg-secondary_light px-9 py-4 text-white hover:bg-black transition-all duration-300">Subscribe</button>
        </form>
      </div>
    </section>
  )
}

export default Newsletter
