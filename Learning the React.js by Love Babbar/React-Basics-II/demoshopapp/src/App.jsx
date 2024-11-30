import React from 'react'
import Item from './components/Item'
import ItemDate from './components/ItemDate'
import Cards from './components/Cards'

const App = () => {
  //we are applying demo of API response here:
  const response=[
    {
      itemName:"Nirma",
      itemDate:"20",
      itemMonth:"June",
      itemYear:"1998"
    },
    {
      itemName:"Nirma2",
      itemDate:"202",
      itemMonth:"June2",
      itemYear:"19982"
    },
    {
      itemName:"Nirma3",
      itemDate:"203",
      itemMonth:"June3",
      itemYear:"19983"
    }
  ]
  return (
  // <div>
  //   <Item name="Nirma" ></Item>
  //   <div className='flex bg-red-500 flex justify-center items-center'>Hello Ji</div>
  //   <ItemDate day="20" month="June" year="1998"></ItemDate>


  //   <Item name="Tide" ></Item>
  //   <div className='flex bg-red-500 flex justify-center items-center'>Hello Ji</div>
  //   <ItemDate day="21" month="July" year="1991"></ItemDate>


  //   <Item name="SurfExcel" ></Item>
  //   <div className='flex bg-red-500 flex justify-center items-center'>Hello Ji</div>
  //   <ItemDate day="22" month="August" year="1993"></ItemDate>
  // </div>
  <div>
      <Cards>
      <Item name={response[0].itemName}>
        <h1>Hello ! I'm child 1</h1>
      </Item>
      <ItemDate day={response[0].itemDate} month={response[0].itemMonth} year={response[0].itemYear}></ItemDate>
  
  
      <Item name={response[1].itemName}></Item>
      <ItemDate day={response[1].itemDate} month={response[1].itemMonth} year={response[1].itemYear}></ItemDate>
 
  
      <Item name={response[2].itemName}></Item>
      <ItemDate day={response[2].itemDate} month={response[2].itemMonth} year={response[2].itemYear}></ItemDate>
  
      </Cards>
  </div>
  )
}

export default App