import { Document } from 'mongoose';

export default interface IExpense extends Document {
    _id: String,
    amount: Number,
    addedOn: String,
    description: String
}