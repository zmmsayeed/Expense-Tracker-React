import * as React from 'react';
import moment from 'moment';
import { State, Props } from './interface';

// importing antd components
import { List } from 'antd'

class ExpenseList extends React.Component<Props, State> {

    render() {

      let { expenseList } = this.props;

      if(expenseList.length) {
        return(
          <List
            itemLayout="horizontal"
            dataSource={expenseList}
            renderItem={item => (
              <List.Item
                actions={['Edit', 'Delete']}
              >
                  <List.Item.Meta
                    title={
                      <div className="row">
                          <div className="col-md-6">{item.amount}</div>
                          <div className="col-md-6 text-right">{moment(item.addedOn).format('DD MMM, YYYY')}</div>
                      </div>
                    }
                    description={item.description}
                  />
              </List.Item>
            )}
          />
        )
      }
      else {
        return(
          <p>No expenses recorded.</p>
        )
      }

      
    }
}

export default ExpenseList;