import {Container, Row, Col} from "react-bootstrap"
import "./App.css"
import NavigationBar from "./components/NavigationBar"
import Intro from "./components/Intro"
import Trending from "./components/Trending"
import Series from "./components/Series"
import "./style/style.css"

function App() {
  return (
    <div>
      {/* intro section */}
      <div className="myBg">
        <NavigationBar />
        <Intro />
      </div>
      {/* end of intro */}
      <div className="trending">
        <Trending />
      </div>

      <div className="potrait">
        <Series />
      </div>
    </div>
  )
}

export default App
