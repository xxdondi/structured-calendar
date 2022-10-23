import { DayView } from './components/DayView'
import { TodoList } from './components/TodoList'
import './App.css'


function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <TodoList
        items={[
          {
            text: 'test',
            completed: false
          }
        ]}
      />
      <DayView
        periods={[
          {
            label: 'Work',
            color: '#F4D35E',
            time: {
              start: 9,
              end: 12
            }
          },
          {
            label: 'Work',
            color: '#F4D35E',
            time: {
              start: 14,
              end: 17
            }
          }
        ]}
        events={[
          {
            label: 'test event rendering 1',
            time: {
              start: 14,
              end: 17
            }
          }
        ]}
      />
    </div>
  );
}

export default App;
