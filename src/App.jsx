import Chat from "./components/chat/Chat"
import List from "./components/list/List"
import Detail from "./components/detail/Detail"


const App = () => {
  return (
    <div className='container'>
   {/* <h1>Hello guys</h1> */}
   <List/>
   <Chat/>
   <Detail/>

    </div>
  )
}

export default App