import { IoArrowBackCircleSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";


export async function getAllEvents() {
  const key = 'paBdVONZfprSreofrQSnKo4iCkCYpRB6'

  const response = await fetch(
    `https://app.ticketmaster.com/discovery/v2/events.json?size=100&apikey=${key}`
    // Another option to use attractions from TicketMaster with next link
    // `https://app.ticketmaster.com/discovery/v2/attractions.json?size=30&countryCode=US&apikey=${key}`
  );
  const data = response.json();
  return data;
}

export async function getAllCategories(category) {
  const key = 'paBdVONZfprSreofrQSnKo4iCkCYpRB6'
  const response = await fetch(
    `https://app.ticketmaster.com/discovery/v2/events.json?segmentName=${category}&apikey=${key}`
  );
  const data = response.json();
  return data;

}


export function convertDate(dateString) {
  var date = new Date(dateString);
  return (
    date.toString()
  );
}


export default function BackArrowOverlay() {
  const navigate = useNavigate()
  return (
    <IoArrowBackCircleSharp
      className="cursor-pointer h-10 w-10 text-black dark:text-white duration-300"
      onClick={() => {
        navigate(-1);
      }}
    />
  );
}
