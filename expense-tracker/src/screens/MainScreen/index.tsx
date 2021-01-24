import * as React from 'react';
import axios from 'axios';
import { Props, State } from './interfaces';
import { apiUrl } from '../../config';

// importing components
import Navbar from '../../components/Navbar';
import ExpenseList from '../../components/ExpenseList';
import { Expense } from '../../interface/expense';

// importing antd components
import { message } from 'antd';


class MainScreen extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            expenses: []
        }
    }

    componentDidMount() {
        axios.get(apiUrl + 'api/expense/getAll')
            .then((response) => {
                console.log("Expenses: ", response)
                if(response.data.success) 
                    this.setState({ expenses: response.data.allExpenses })
            })
            .catch((error) => {
                console.log("Error in getting the expenses: ", error);
            })
    }

    deleteHandler = (id: string) => {
        console.log("Deleting: ", id);

        let filteredExpense: Expense[] = this.state.expenses.filter(item => item._id !== id);
        this.setState({ expenses: filteredExpense }, () => {
            axios.post(apiUrl + 'api/expense/delete', {
                toDelete: id
            })
            .then((response) => {
                if(response.data.deletedCount > 0) {
                    message.success("Expense Deleted Successfully!")
                }
            })
            .catch((error) => {
                console.log(error)
                message.error("Could not Delete!")
            })
        })
    }

    render() {
        return(
            <div>
                <Navbar />

                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-6">
                            <h2>Your Expenses:</h2>
                            <ExpenseList expenseList={this.state.expenses} deleteHandler={
                                (id: string) => this.deleteHandler(id)
                            } />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MainScreen;
