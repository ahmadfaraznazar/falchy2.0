
import './App.css'

function App() {
  

  return (
    <>
      <section className='header w-screen bg-black-500 flex justify-around items-center '>
        
        <div className=''>
          <h5 className='text-xl font-bold'>Logo</h5>  
        </div>

        <div className='flex gap-5'>
          <a>Home</a>
          <a>Transfer Service</a>
          <a>Privacy Policy</a>
          <a>Cookie Policy</a>
        </div>

        <div>
          <button className='bg-[#1e1e1e] px-4 py-2 rounded text-[#fff]'>Contact Us</button>
        </div>

      </section>
    </>
  )
}

export default App
