import './App.css'
import { Container, Row, Col } from 'react-bootstrap'
import Header from './components/header'
import Footer from './components/footer'
import Homescrean from './screens/Homescreen'
import Productscreen from './screens/Productscreen'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Page404 from './Page404'

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Container>
          <Route exact path='ecommers/' component={Homescrean} />
          <Route path='ecommers/Product/:id' component={Productscreen} />
          <Route path='*' component={Page404} />
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
