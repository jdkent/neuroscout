import * as React from 'react';

import { Link } from 'react-router-dom';
import { Row, Table } from 'antd';

import { api } from '../api';
import { MainCol } from '../HelperComponents';
import { User } from '../coretypes';

export class UserList extends React.Component<{}, {users: User[]}> {
  constructor(props) {
    super(props);
    this.state = {users: [] as User[]};
  }

  componentDidMount() {
    api.getUsers().then((response) => {
      this.setState({users: response});
    });
  }

  render() {
    let userTableColumns = [
        {
          title: 'Name',
          dataIndex: 'name',
          render: (text, record) => (
            <Link to={'/profile/' + record.id}>{record.name}</Link>
          )
        }
    ];
    return (
      <Row type="flex" justify="center" style={{ background: '#fff', padding: 0 }}>
        <MainCol>
          <Table
            columns={userTableColumns}
            dataSource={this.state.users}
            rowKey="id"
          />
        </MainCol>
      </Row>
    );
  }
}

export default UserList;
