import Carousel  from '../components/Carousel'
import {venueData} from "../VenuesData"

function Venue() {
    // const { event } = useContext(MyContext)
  return (
    <div className='venue'>
         
          <Carousel venueData={venueData} />
    </div>
  )
}

export default Venue
