import Navbar from './Navbar'
import CartContainer from './CartContainer'
import { useGlobalContext } from './context'
function App() {
  const { loading } = useGlobalContext()
  if (loading) {
    return (
      <div className='loading'>
        <h2>Loading...</h2>
      </div>
    )
  }
  return (
    <>
      <Navbar />
      <CartContainer />
    </>
  )
}

export default App
