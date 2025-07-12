// import { useState } from "react";
// import CalendarView from "../components/CalendarView";
// import AppointmentForm from "../components/AppointmentForm";

// export default function CalendarPage() {
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [showForm, setShowForm] = useState(false);

//   const handleDateClick = (date) => {
//     setSelectedDate(date);
//     setShowForm(true);
//   };

//   const handleClose = () => {
//     setShowForm(false);
//     setSelectedDate(null);
//   };

//   const handleSave = (appointment) => {
//     const all = JSON.parse(localStorage.getItem("appointments")) || [];
//     all.push(appointment);
//     localStorage.setItem("appointments", JSON.stringify(all));
//   };

//   return (
//     <div>
//       <h2 style={{ textAlign: "center", margin: "1rem 0" }}>Appointment Calendar</h2>
//       <CalendarView onDateClick={handleDateClick} />
//       {showForm && (
//         <AppointmentForm
//           date={selectedDate}
//           onClose={handleClose}
//           onSave={handleSave}
//         />
//       )}
//     </div>
//   );
// }

// import { useState } from "react";
// import CalendarView from "../components/CalendarView";
// import AppointmentForm from "../components/AppointmentForm";

// export default function CalendarPage() {
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [showForm, setShowForm] = useState(false);
//   const [darkMode, setDarkMode] = useState(false); // ✅ dark mode toggle

//   const handleDateClick = (date) => {
//     setSelectedDate(date);
//     setShowForm(true);
//   };

//   const handleClose = () => {
//     setShowForm(false);
//     setSelectedDate(null);
//   };

//   const handleSave = (appointment) => {
//     const all = JSON.parse(localStorage.getItem("appointments")) || [];
//     all.push(appointment);
//     localStorage.setItem("appointments", JSON.stringify(all));
//   };

//   const toggleTheme = () => {
//     setDarkMode(!darkMode);
//   };

//   return (
//     <div className={darkMode ? "dark-theme" : "light-theme"}>
//       <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1rem 2rem" }}>
//         <h2>Appointment Calendar</h2>
//          <button
//           onClick={toggleTheme}
//           style={{
//             padding: "0.5rem 1rem",
//             backgroundColor: darkMode ? "#f4f4f4" : "#333",
//             color: darkMode ? "#000" : "#fff",
//             border: "none",
//             borderRadius: "6px",
//             cursor: "pointer",
//           }}
//         >
//           {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
//         </button>
//       </div>

//       <CalendarView onDateClick={handleDateClick} />

//       {showForm && (
//         <AppointmentForm
//           date={selectedDate}
//           onClose={handleClose}
//           onSave={handleSave}
//         />
//       )}
//     </div>
//   );
// }

// import { useState } from "react";
// import CalendarView from "../components/CalendarView";
// import AppointmentForm from "../components/AppointmentForm";
// import "../App.css"; // Import for theme + toggle CSS

// export default function CalendarPage() {
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [showForm, setShowForm] = useState(false);
//   const [darkMode, setDarkMode] = useState(false);

//   const handleDateClick = (date) => {
//     setSelectedDate(date);
//     setShowForm(true);
//   };

//   const handleClose = () => {
//     setShowForm(false);
//     setSelectedDate(null);
//   };

//   const handleSave = (appointment) => {
//     const all = JSON.parse(localStorage.getItem("appointments")) || [];
//     all.push(appointment);
//     localStorage.setItem("appointments", JSON.stringify(all));
//   };

//   const toggleTheme = () => {
//     setDarkMode(!darkMode);
//   };

//   return (
//     <div className={darkMode ? "dark-theme" : "light-theme"}>
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//           padding: "1rem 2rem",
//         }}
//       >
//         <h2>Appointment Calendar</h2>

//         {/* Dark Mode Toggle Switch */}
//         <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
//           <label className="switch">
//             <input
//               type="checkbox"
//               checked={darkMode}
//               onChange={toggleTheme}
//             />
//             <span className="slider"></span>
//           </label>
//           <span style={{ fontSize: "1rem" }}>
//             {darkMode ? "Dark Mode" : "Light Mode"}
//           </span>
//         </div>
//       </div>

//       <CalendarView onDateClick={handleDateClick} />

//       {showForm && (
//         <AppointmentForm
//           date={selectedDate}
//           onClose={handleClose}
//           onSave={handleSave}
//         />
//       )}
//     </div>
//   );
// }

import { useState } from "react";
import CalendarView from "../components/CalendarView";
import AppointmentForm from "../components/AppointmentForm";
import "../App.css"; 

export default function CalendarPage() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const handleDateClick = (date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const clicked = new Date(date);
    clicked.setHours(0, 0, 0, 0);

    if (clicked < today) {
      alert("❌ You cannot book an appointment on a past date.");
      return;
    }

    setSelectedDate(date);
    setShowForm(true);
  };

  const handleClose = () => {
    setShowForm(false);
    setSelectedDate(null);
  };

  const handleSave = (appointment) => {
    const all = JSON.parse(localStorage.getItem("appointments")) || [];
    all.push(appointment);
    localStorage.setItem("appointments", JSON.stringify(all));
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "dark-theme" : "light-theme"}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1rem 2rem",
        }}
      >
        <h2>Appointment Calendar</h2>

        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <label className="switch">
            <input
              type="checkbox"
              checked={darkMode}
              onChange={toggleTheme}
            />
            <span className="slider"></span>
          </label>
          <span style={{ fontSize: "1rem" }}>
            {darkMode ? "Dark Mode" : "Light Mode"}
          </span>
        </div>
      </div>

      <CalendarView
        onDateClick={handleDateClick}
        disablePastDates={true}
      />

      {showForm && (
        <AppointmentForm
          date={selectedDate}
          onClose={handleClose}
          onSave={handleSave}
        />
      )}
    </div>
  );
}
