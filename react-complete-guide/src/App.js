import React, { Component } from 'react';

import classes from './App.css';
import Person from './Person/Person';


class App extends Component {
  state = {
    persons: [
      { id: 'abc', name: 'Max', age: 28 },
      { id: 'def', name: 'Manu', age: 29 },
      { id: 'ghi', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  };

  nameChangedHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex( p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]    // spread operator
    };

    // const person = Object.assign({}, this.state.persons[personIndex])

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( {persons: persons} );

    console.log('Change Name');
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});

    console.log('Delete Person')
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState( { showPersons: !doesShow } );

    console.log('Toggle Person');
  }

  render() {
    let persons = null;
    let btnClass = '';

    if(this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return ( <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                change={(event) => this.nameChangedHandler(event, person.id)} 
              />
            );
          })}
        </div>
      );

      btnClass = classes.Red;
    }

    const assignedClasses = [];
    if(this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);                        // classes = ['red']
    }
    if(this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);                       // classes = ['red', 'bold']
    }

    return (
      <div className={classes.App}>
        <h1>Hi, I'm a React app</h1>
        <p className={assignedClasses.join(' ')}>This is really working!</p>
        <button className={btnClass} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App}, React.)
  }
}


export default App;  








/* 
in return
   {personsState.persons.map(person => {
              return <Person 
                name={person.name} 
                age={person.age}
                click={switchNameHandler}
                changed={nameChangedHandler} />
        })}


  let persons = null;
    if( showPersons ) {
      persons = (
        <div>
        <Person 
          name={personsState.persons[0].name} 
          age={personsState.persons[0].age}
          click={switchNameHandler}
          changed={nameChangedHandler}>
            My Hobbies: Racing
        </Person>
        <Person
          name={personsState.persons[1].name} 
          age={personsState.persons[1].age}>
        </Person>
      </div>
      )
    }
    */


  /* 

     <div>
          {personsState.persons.map(person => {
            return <Person 
              name={person.name} 
              age={person.age} />
          })}
        </div>


  <div>
    <Person 
    name={personsState.persons[0].name} 
    age={personsState.persons[0].age}
    click={switchNameHandler}
    changed={nameChangedHandler}>
      My Hobbies: Racing
    </Person>
    <Person
      name={personsState.persons[1].name} 
      age={personsState.persons[1].age}>
    </Person>
  </div>
  
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App'));



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/
