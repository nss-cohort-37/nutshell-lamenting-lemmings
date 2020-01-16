import { useEvents, deleteEvent } from "./EventDataProvider.js"
import { Event } from "./Event.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".events")

const EventList = () => {
  const events = useEvents()
  
  eventHub.addEventListener("newEventSaved", e => {
    render(useEvents())
  })

  eventHub.addEventListener("click", e => {
    if (e.target.id.startsWith("deleteEvent--")) {
      const [prefix, id] = e.target.id.split("--")
      deleteEvent(id).then(() => render(useEvents()))
    }
  })

  const render = (eve) => {
    contentTarget.innerHTML = ""
    contentTarget.innerHTML = 
    eve.map(event => Event(event)).join("")
  }
  render(events)
}

export default EventList