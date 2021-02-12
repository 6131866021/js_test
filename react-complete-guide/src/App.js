import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';


const App = props => {
  const [personsState, setPersonsState] = useState({                // React useState hook
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 31 }
    ]
  });

  const [otherState, setOtherState] = useState('some other value');
  const [showPersons, setShowPersons] = useState(false);

  console.log(personsState, otherState, showPersons);

  const switchNameHandler = ( newName ) => {
    console.log('Was clicked!');
    setPersonsState({
      persons: [
        { name: newName, age: 90 },
        { name: 'Nat', age: 25 }
      ],
      otherState: personsState.setotherState,
      showPersons: personsState.setShowPersons
    });

    // DON'T DO: this.state.personsp[0].name = 'Maximum';
  };

  const nameChangedHandler = ( event ) => {
    console.log('Name Changed');
    setPersonsState({
      persons: [
        { name: event.target.value, age: 90 },
        { name: 'Nani', age: 25 }
      ]
    });
  }

  const togglePersonsHandler = () => {
    console.log('toggle');
    const doesShow = showPersons;
    setPersonsState({
      showPersons: !doesShow
    });
    let persons = null;
    if( showPersons ) {
      console.log("showPersons");
      {personsState.persons.map(person => {
            return <Person 
              name={person.name} 
              age={person.age} />
      })}
    }
  }

  const style = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer'
  }

  /* 
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

  const deletePersonHandler = (personIndex) => {

  }

  render() {

  return (                                      // JSX not html

    <div className="app">
      <h1>Hi, I'm a React app</h1>
      <button
        style={style}
        onClick={() => switchNameHandler.bind(this, 'Maximilian')}>Switch Name
      </button>
      <button 
        style={style} 
        onClick={togglePersonsHandler}>Toggle
      </button>
      {personsState.persons.map(person => {
            return <Person 
              name={person.name} 
              age={person.age}
              click={switchNameHandler}
              changed={nameChangedHandler} />
      })}
    </div>

  )
  };
}

export default App;                                 // ES6 JS

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
