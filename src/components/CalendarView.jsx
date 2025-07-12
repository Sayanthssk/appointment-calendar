import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./styles/CalendarView.css";
import { useMediaQuery } from "react-responsive";
import DayAppointments from "./DayAppointments";

export default function CalendarView({ onDateClick }) {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const isMobile = useMediaQuery({ maxWidth: 768 });

  const handleDateChange = (date) => {
    setSelectedDate(date);
    onDateClick(date); 
  };

  return (
    <div className="calendar-wrapper">
      {isMobile ? (
        <>
          <input
            type="date"
            value={selectedDate.toISOString().split("T")[0]}
            onChange={(e) => handleDateChange(new Date(e.target.value))}
          />
          <DayAppointments date={selectedDate} />
        </>
      ) : (
        <>
          <Calendar
            onChange={handleDateChange}
            value={selectedDate}
            tileContent={({ date }) => (
              <DayAppointments date={date} compact />
            )}
          />
        </>
      )}
    </div>
  );
}
