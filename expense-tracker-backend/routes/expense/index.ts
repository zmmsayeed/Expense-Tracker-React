import express, { Request, Response } from 'express';
import { v4 as uuid } from 'uuid';
import moment from 'moment';
import Expense from '../../schema/expenseSchema';
import expense from '../../interface/expense';

const router = express.Router();

router.post('/add', async (req: Request, res: Response) => {
    let { amount, description } = req.body;

    const expense = new Expense({
        _id: uuid(),
        amount,
        description,
        addedOn: moment().utc().toISOString()
    })

    try {
        const savedExpense: expense = await expense.save();
        res.status(201).send({ savedExpense });
    } catch(err) {
        res.status(400).send(err);
    }

})

router.get('/getAll', async (req: Request, res: Response) => {
    try {
        const allExpenses: expense[] = await Expense.find();
        const count: number = allExpenses.length
        res.status(201).send({ 
            success: true,
            allExpenses, 
            count 
        });
    } catch(err) {
        res.status(400).send({
            success: false,
            error: err
        });
    }
})

export default router;