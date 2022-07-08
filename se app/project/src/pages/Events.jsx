import React,{useState} from 'react'
import './events.css'
import { CreateEvent} from '../modals/CreateEvent'
const Events = () => {

    const [modal,setModal] = useState(false);
    const toggle = () => setModal(!modal);
  return (
      <>
    <div className="header text-center">
        <h3>Events</h3>
        <CreateEvent/>
        {/* <button className="btn btn-primary mt-3">Join Event</button>
        <button className="btn btn-secondary mt-3">Create Event</button> */}
    </div>
    <div className='body-event'>
        
    </div>
    {/* <CreateEvent toggle={toggle} modal ={modal}/> */}
    </>
  )
}

export default Events