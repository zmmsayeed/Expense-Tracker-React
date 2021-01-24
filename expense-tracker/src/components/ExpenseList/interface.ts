import {Expense} from '../../interface/expense';

export interface Props {
    expenseList: Expense[],
    deleteHandler: (id: string) => void
}

export interface State {

}
