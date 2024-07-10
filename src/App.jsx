import List from './List.jsx'

function App() {


  const fruits = [{ id: 1, name: "apple", calories: 95 },
  { id: 2, name: "banana", calories: 45 },
  { id: 3, name: "mango", calories: 105 },
  { id: 4, name: "grapes", calories: 75 },
  { id: 5, name: "strawberry", calories: 200 }];

  const vegetables = [{ id: 1, name: "potato", calories: 45 },
  { id: 2, name: "carrot", calories: 35 },
  { id: 3, name: "ginger", calories: 120 },
  { id: 4, name: "tomoto", calories: 79 },
  { id: 5, name: "brinjal", calories: 278 }];


  return (
    <>
      {fruits.length > 0 && <List item={fruits} category="fruits" />};
      {vegetables.length > 0 && <List item={vegetables} category="vegetables" />}
    </>
  )
}

export default App
