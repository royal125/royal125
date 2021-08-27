import React from 'react';
import New from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Services from './components/Services';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



function App() {
    return (
        <>

            <Router>
                <New/>
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/about' exact component={About} />
                    <Route path='/contact' exact component={Contact} />
                    <Route path='/services' exact component={Services} />
                    <Route path='/head' exact component={Home} />
                </Switch>
            <Footer/>
            </Router>
        </>
    );
}

export default App;
