import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {Header} from './Header/Header';
import {HomePage} from './pages/HomePage/HomePage';
import {MasterPage} from './pages/MasterPage/MasterPage';
import ClientPage from './pages/ClientPage/ClientPage';
import { auth, createFirebaseMaster } from './firebase/firebase';
import './App.css';


export default class App extends React.Component {
    
    state = {
        currentMaster: null,
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
                        // consolez.log(this.state);
                    });
                });
            } else {
                this.setState({currentMaster: master});
                // console.log(this.state);
            }
        });   
    }

    componentWillUnmount () {
        this.unsubscribeAuth();
    }

    render () {

        return (
            <div className='App'>
                <div className='App-wrapper'>
                    <Header />
                    <Switch>
                        <Route path='/' exact>
                            <HomePage />
                        </Route> 
                        <Route path='/forclient' component={ClientPage} exact />
                        <Route path='/formaster' exact>
                            <MasterPage currentMaster={this.state.currentMaster} />
                        </Route> 
                    </Switch>
                </div>
            </div>
        )
    }
}

