import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {Header} from './Header/Header';
import {HomePage} from './pages/HomePage/HomePage';
import {MasterPage} from './pages/MasterPage/MasterPage';
import ClientPage from './pages/ClientPage/ClientPage';
import {NotFound} from './pages/NotFound/NotFound';
import { auth, createFirebaseMaster } from './firebase/firebase';
import './App.css';


export default class App extends React.Component {
    
    state = {
        currentMaster: null,
        currentDate: new Date,
        currentHours: 0,
        currentGreeting: 'Здравствуйте!'
    };

    unsubscribeAuth = null;

    componentDidMount () {
        
        this.unsubscribeAuth = auth.onAuthStateChanged( async (master) => {

            if (master) {
                const userRef = await createFirebaseMaster(master);

                userRef.onSnapshot(snapshot => {
                    this.setState({
                        currentMaster: {
                            id: snapshot.id,
                            ...snapshot.data()
                        }
                    },
                    () => {
                        // console.log(this.state);
                    });
                });
            } else {
                this.setState({currentMaster: master});
            }
        });   
        // this.greeting()
        this.clock();
    }

    componentWillUnmount () {
        this.unsubscribeAuth();
    }

    clock () {
        const hours = this.state.currentDate.getHours();
        this.setState({currentHours: hours},
        (this.greeting));
    }

    greeting () {
        const {currentHours} = this.state;

        if(currentHours <= 4) {
            this.setState({currentGreeting: 'Доброй ночи!'}) 
        } else if (currentHours <= 11) {
            this.setState({currentGreeting: 'Доброе утро!'}) 
        } else if (currentHours <= 16) {
            this.setState({currentGreeting: 'Добрый день!'}) 
        } else if (currentHours <= 23 ) {
            this.setState({currentGreeting: 'Добрый вечер!'}) 
        } else if (currentHours === 24 ) {
            this.setState({currentGreeting: 'Доброй ночи!'}) 
        } else {
            return this.state.currentGreeting;
        }
    }


    render () {

        return (
            <div className='App'>
                <div className='App-wrapper'>
                    <Header />
                    <Switch>
                        <Route path='/' exact>
                            <HomePage currentDate={this.state.currentDate} currentGreeting={this.state.currentGreeting} />
                        </Route> 
                        <Route path='/forclient' component={ClientPage} exact />
                        <Route path='/formaster' exact>
                            <MasterPage currentMaster={this.state.currentMaster} />
                        </Route> 
                        <Route path='*' component={NotFound} />
                    </Switch>
                </div>
            </div>
        )
    }
}

