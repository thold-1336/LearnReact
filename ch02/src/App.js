import React, { Component } from 'react';
import Title from './components/Title';
import Control from './components/Control';
import Form from './components/Form';
import List from './components/List';
import tasks from './mocks/task';
import { filter, includes, remove, orderBy as funcOrderBy } from 'lodash';
import './App.css';

class App extends Component {
  constructor(props) {

    super(props);
    this.state = {
      items: tasks,
      isShowForm: false,
      strSearch: '',
      orderBy: 'name',
      orderDir: 'asc',
    };

    this.handleToggleForm = this.handleToggleForm.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSort = this.handleSort.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.closeForm = this.closeForm.bind(this);
  }

  handleToggleForm() {
    this.setState({
      isShowForm: !this.state.isShowForm
    });
  }

  handleSort(orderBy, orderDir) {
    this.setState({
      orderBy: orderBy,
      orderDir: orderDir
    })
  }

  closeForm() {
    this.setState({
      isShowForm: false
    });
  }

  handleSearch(value) {
    this.setState({
      strSearch: value
    });
  }

  handleDelete(id) {
    console.log(id);
    let items = this.state.items;

    remove(items, (item) => {
      return item.id === id;
    });

    this.setState({
      items: items
    })
  }

  render() {
    let itemsOrigin = [...this.state.items];
    let items = [];
    let elementForm = null;
    let { orderBy, orderDir, isShowForm, strSearch }  = this.state;

    if ( isShowForm === true ) {
      elementForm = <Form onClickCancel={ this.closeForm }></Form>
    }

    // Search
    items = filter(itemsOrigin, (item) => {
      return includes(item.name.toLowerCase(), strSearch);
    } );

    // Soft
    items = funcOrderBy(items, [orderBy], [orderDir]);

    return (
      <div>
        {/* TITLE : START */}
        <Title></Title>
        {/* TITLE : END */}
        {/* CONTROL (SEARCH + SORT + ADD) : START */}
        <Control
          orderBy={ orderBy }
          orderDir={ orderDir }
          onClickAdd={ this.handleToggleForm }
          isShowForm={ isShowForm }
          onClickSearchGo={ this.handleSearch }
          onClickSort={ this.handleSort }
          >
          </Control>
        {/* CONTROL (SEARCH + SORT + ADD) : END */}
        {/* FORM : START */}
        { elementForm }
        {/* FORM : END */}
        {/* LIST : START */}
        <List items={ items } onClickDelete={ this.handleDelete }></List>
        {/* LIST : END */}
      </div>
    );
  }
}

export default App;
