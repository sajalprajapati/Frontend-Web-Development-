import React from 'react';
import Item from './components/Item';
import ItemDate from './components/ItemDate';
import Cards from './components/Cards';
// import ChildComponent from './components/ChildComponent';
// import NewProduct from './components/NewProduct';
import ParentComponent from './components/ParentComponents';

const App = () => {
  // Demo API response
  const response = [
    {
      itemName: 'Nirma',
      itemDate: '20',
      itemMonth: 'June',
      itemYear: '1998',
    },
    {
      itemName: 'Tide',
      itemDate: '20',
      itemMonth: 'August',
      itemYear: '1999',
    },
    {
      itemName: 'Surf Excel',
      itemDate: '11',
      itemMonth: 'August',
      itemYear: '2002',
    },
  ];
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-5">
      
      {/* <NewProduct/> */}
      
      <Cards>
        <Item name={response[0].itemName}>
          {/* <h1>Hello ! I'm child 1</h1> */}
        </Item>
        <ItemDate
          day={response[0].itemDate}
          month={response[0].itemMonth}
          year={response[0].itemYear}
        />

        <Item name={response[1].itemName}></Item>
        <ItemDate
          day={response[1].itemDate}
          month={response[1].itemMonth}
          year={response[1].itemYear}
        />

        <Item name={response[2].itemName}></Item>
        <ItemDate
          day={response[2].itemDate}
          month={response[2].itemMonth}
          year={response[2].itemYear}
        />
      </Cards>


      {/* <ChildComponent/> */}
      <ParentComponent/>
    </div>
  );
};

export default App;
