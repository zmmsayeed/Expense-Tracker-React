import * as React from 'react';

// importing antd components
import { List } from 'antd';

const data = [
    'Rs. 10,0034',
    'Rs. 500',
    'Rs. 3001',
    'Rs. 200',
    'Rs. 400',
];

class ExpenseList extends React.Component {
    render() {
        return(
            <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={item => (
          <List.Item
            actions={['Edit', 'Delete']}
          >
              <List.Item.Meta
                title={
                    <div className="row">
                        <div className="col-md-6">{item}</div>
                        <div className="col-md-6 text-right">10th Jan, 2020</div>
                    </div>
                }
                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
              />
          </List.Item>
        )}
      />
        )
    }
}

export default ExpenseList;