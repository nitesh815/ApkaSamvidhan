import "./App.css"
import Header from "./components/common/header/Header"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import About from "./components/about/About"
import CourseHome from "./components/allcourses/CourseHome"
import Team from "./components/team/Team"
import Blog from "./components/blog/Blog"
import Contact from "./components/contact/Contact" 
import Footer from "./components/common/footer/Footer"
import Home from "./components/home/Home"
import Module from "./components/module/Module"
function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/team' component={Team} />
          <Route exact path='/courses' component={CourseHome} />
          <Route exact path='/journal' component={Blog} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/module' component={Module} />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App
