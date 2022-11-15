import { useState } from "react";
//Calendar
import { Calendar } from "react-big-calendar";

import "react-big-calendar/lib/css/react-big-calendar.css";
//date-fns: moment ya no es recomendable

import NavBar from "../components/NavBar";

import { addHours } from "date-fns/esm";
import { localizer } from "../../helpers/calendarLocalizer";
import { getMessages } from "../../helpers/getMessages";
import CalendarEvent from "../components/CalendarEvent";
import CalendarModal from "../components/CalendarModal";
import { useUiStore } from "../../hooks/useUiStore";
import { useCalendarStore } from "../../hooks/useCalendarStore";
import FabAddNew from "../components/FabAddNew";
import FabDelete from "../components/FabDelete";

export default function CalendarPage() {
  const { openDateModal, closeDateModal } = useUiStore();
  const { events, setActiveEvent } = useCalendarStore();

  const [lastView, setLastView] = useState(
    localStorage.getItem("lastView") || "week"
  );
  const eventStyleGetter = (event, start, end, isSelected) => {
    const style = {
      backgroundColor: "#347CF7",
      borderRadius: "0px",
      opacity: 0.8,
      color: "white",
    };

    return {
      style,
    };
  };

  const onDoubleClick = () => {
    openDateModal();
  };
  const onSelect = (e) => {
    setActiveEvent(e);
  };
  const onViewChange = (e) => {
    localStorage.setItem("lastView", e);
  };
  return (
    <>
      <NavBar />
      <Calendar
        culture="es"
        localizer={localizer}
        events={events}
        startAccessor="start"
        defaultView={lastView}
        endAccessor="end"
        style={{ height: "calc(100vh -  80px)" }}
        messages={getMessages()}
        eventPropGetter={eventStyleGetter}
        components={{
          event: CalendarEvent,
        }}
        onDoubleClickEvent={onDoubleClick}
        onView={onViewChange}
        onSelectEvent={onSelect}
      />
      <CalendarModal />
      <FabAddNew />
      <FabDelete />
    </>
  );
}
