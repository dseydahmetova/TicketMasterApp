import Carousel  from '../components/Carousel'
import { Route, Routes } from "react-router-dom";
import {venueData} from "../VenuesData"

function Venue() {
    // const { event } = useContext(MyContext)
  return (
    <div className='venue'>
  {/* <Routes> */}
         
      {/* <Route path="/venues/*" element={ */}
          <Carousel venueData={venueData} />
         {/* } />  </Routes> */}
    </div>
  )
}

export default Venue
