import './App.css'
import { Container, Row, Col } from 'react-bootstrap'
import Header from './components/header'
import Footer from './components/footer'
import Homescrean from './screens/Homescreen'
import Productscreen from './screens/Productscreen'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Page404 from './Page404'

const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Header />
      <main>
        <Container>
          <Switch>
            <Route exact path='/' component={Homescrean} />
            <Route path='/Product/:id' component={Productscreen} />
            <Route path='*' exact={true} component={Page404} />
          </Switch>
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
