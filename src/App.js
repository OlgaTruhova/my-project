import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {Header} from './Header/Header';
import {HomePage} from './pages/HomePage/HomePage';
import {MasterPage} from './pages/MasterPage/MasterPage';
import {ClientPage} from './pages/ClientPage/ClientPage';
import {auth, createFirebaseMaster} from './firebase/firebase';
import './App.css';


export default class App extends React.Component {

    state = {
        currentMaster: null
    };

    unsubscribeAuth = null;

    componentDidMount () {
        
        this.unsubscribeAuth = auth.onAuthStateChanged( async (master) => {
            console.log(master);

            if (master) {
                const masterRef = await createFirebaseMaster(master);

                masterRef.onSnapshot(snapshot => {
                    this.setState({
                        currentMaster: {
                            id: snapshot.id,
                            ...snapshot.data()
                        }
                    },
                    () => {
                        console.log(this.state);
                    });
                }); //усл. snapShot меняется запускается эта функция
                // this.setState({currentUser: user});
            } else {
                this.setState({currentMaster: master});
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
                            {/* <HomePage /> */}
                            <HomePage currentMaster={this.state.currentMaster} />
                        </Route>
                        <Route path='/forclient' component={ClientPage} exact />
                        <Route path='/formaster' exact> 
                            {/* <MasterPage /> */}
                            <MasterPage currentMaster={this.state.currentMaster} />
                        </Route>
                    </Switch>
                </div>
            </div>
        )
    }
}

