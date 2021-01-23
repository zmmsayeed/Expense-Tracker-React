import * as React from 'react';
import { Props, State } from './interfaces';

// importing components
import Navbar from '../../components/Navbar';
import ExpenseList from '../../components/ExpenseList';



class MainScreen extends React.Component<Props, State> {

    render() {
        return(
            <div>
                <Navbar />

                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-6">
                            <h2>Your Expenses:</h2>
                            <ExpenseList />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MainScreen;
