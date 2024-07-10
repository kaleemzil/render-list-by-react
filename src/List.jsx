







//fruits.sort((a,b) => a.name.localeCompare(b.name)); // alphabetical order
//fruits.sort((a,b) => b.name.localeCompare(a.name)); // reverse alphabetical order
// fruits.sort((a,b) => a.calories.localeCompare(b.calories)); // numeric
// fruits.sort((a,b) => b.calories - a.calories); // numeric
// fruits.sort((a,b) => a.calories - b.calories); // numeric

// const fruitItems = fruits.map(fruit => <li key={fruit.id}>
//     {fruit.name}: &nbsp;  
//     <b>{fruit.calories}</b> </li> );


//    return(<ol>{fruitItems}</ol>);


// const loCalFruits = fruits.filter(fruit => fruit.calories < 100) // highest calories
// const loCalFruits = fruits.filter(fruit => fruit.calories >= 100)  // lowest calories

// const fruitItems = loCalFruits.map(loCalFruits => <li key={loCalFruits.id}>
//                                             {loCalFruits.name}: &nbsp;  
//                                             <b>{loCalFruits.calories}</b> </li> );


//         return(<ol>{fruitItems}</ol>);

function List(props) {

    const itemList = props.item;
    const category = props.category;


    const fruitItems = itemList.map(item => <li key={item.id}>
        {item.name}: &nbsp;
        <b>{item.calories}</b> </li>);


    return (<>

        <h3>{category}</h3>
        <ol>{fruitItems}</ol>
    </>);





}

export default List