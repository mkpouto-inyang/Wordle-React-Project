import './App.css'
import InputBox from './components/InputBox'
import Row from './components/Row'
import InputRow from './components/Row'

function App() {

  return (
    <>
      {/* Header section */}
      <section>
        <div className='text-red-400 h-[100px] flex justify-center items-center mb-[40px]'>
            <h1 className="text-3xl font-bold" title='Hello'>
              Wordle Game
            </h1>
        </div>
      </section>

      {/* Main Game section */}
      <section>
         <div className='flex items-center flex-col'>
            <Row></Row>
            <Row></Row>
            <Row></Row>
            <Row></Row>
            <Row></Row>
         </div>
         
      </section>

      {/* On-screen keyboard */}
      <section>
        
      </section>
    </>
  )
}

export default App
