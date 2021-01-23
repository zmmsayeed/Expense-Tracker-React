import mongoose, {Schema} from 'mongoose';
import IExpense from '../interface/expense';

const expenseSchema: Schema = new Schema({
    _id: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    addedOn: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }

})

export default mongoose.model<IExpense>('Expense', expenseSchema);