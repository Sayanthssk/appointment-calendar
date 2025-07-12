// import { useEffect, useState } from "react";

// export default function DayAppointments({ date, compact }) {
//   const [appointments, setAppointments] = useState([]);

//   useEffect(() => {
//     const all = JSON.parse(localStorage.getItem("appointments")) || [];
//     const filtered = all.filter(
//       (appt) =>
//         new Date(appt.date).toDateString() === date.toDateString()
//     );
//     setAppointments(filtered);
//   }, [date]);

//   if (appointments.length === 0) return null;

//   return (
//     <div className={`appointments ${compact ? "compact" : "full"}`}>
//       {appointments.map((appt, i) => (
//         <div key={i} className="appointment-item">
//           <strong>{appt.time}</strong> – {appt.patient} ({appt.doctor})
//         </div>
//       ))}
//     </div>
//   );
// }


// import { useEffect, useState } from "react";

// export default function DayAppointments({ date, compact = false }) {
//   const [appointments, setAppointments] = useState([]);

//   useEffect(() => {
//     const all = JSON.parse(localStorage.getItem("appointments")) || [];

//     const filtered = all.filter(
//       (appt) =>
//         new Date(appt.date).toDateString() === date.toDateString()
//     );

//     setAppointments(filtered);
//   }, [date]);

//   if (appointments.length === 0) return null;

//   return (
//     <div className={`appointments ${compact ? "compact" : "full"}`}>
//       {appointments.map((appt, i) => (
//         <div key={i} className="appointment-item">
//           <strong>{appt.time}</strong> – {appt.patient} ({appt.doctor})
//         </div>
//       ))}
//     </div>
//   );
// }

// import { useEffect, useState } from "react";
// import { getAppointments, saveAppointments } from "../utils/storage";

// export default function DayAppointments({ date, compact = false }) {
//   const [appointments, setAppointments] = useState([]);

//   const refreshAppointments = () => {
//     const all = getAppointments();
//     const filtered = all.filter(
//       (appt) => new Date(appt.date).toDateString() === date.toDateString()
//     );
//     setAppointments(filtered);
//   };

//   useEffect(() => {
//     refreshAppointments();
//   }, [date]);

//   const handleDeleteAll = () => {
//     if (
//       window.confirm(
//         `Delete all ${appointments.length} appointment(s) for ${date.toDateString()}?`
//       )
//     ) {
//       const updated = getAppointments().filter(
//         (appt) =>
//           new Date(appt.date).toDateString() !== date.toDateString()
//       );
//       saveAppointments(updated);
//       refreshAppointments();
//     }
//   };

//   if (appointments.length === 0) return null;

//   return (
//   <div className={`appointments ${compact ? "compact" : "full"}`}>
//     {appointments.map((appt) => (
//       <div key={appt.timestamp} className="appointment-item" style={{
//         display: "flex",
//         justifyContent: "space-between",
//         alignItems: "center",
//         marginBottom: "8px"
//       }}>
//         <div>
//           <strong>{appt.time}</strong> – {appt.patient} ({appt.doctor})
//         </div>
//         <button
//           onClick={() => handleDelete(appt.timestamp)}
//           style={{
//             marginLeft: "0.5rem",
//             color: "white",
//             background: "red",
//             border: "none",
//             borderRadius: "4px",
//             padding: "2px 8px",
//             cursor: "pointer",
//             fontSize: "0.9rem",
//           }}
//           title="Delete"
//         >
//           🗑️
//         </button>
//       </div>
//     ))}
//   </div>
// )
// }


import { useEffect, useState } from "react";
import { getAppointments, deleteAppointment } from "../utils/storage";

export default function DayAppointments({ date, compact = false, onEdit }) {
  const [appointments, setAppointments] = useState([]);

  const refreshAppointments = () => {
    const all = getAppointments();
    const filtered = all.filter(
      (appt) =>
        new Date(appt.date).toDateString() === date.toDateString()
    );
    setAppointments(filtered);
  };

  useEffect(() => {
    refreshAppointments();
  }, [date]);

  const handleDelete = (timestamp) => {
    const confirm = window.confirm("Delete this appointment?");
    if (confirm) {
      deleteAppointment(timestamp);
      refreshAppointments();
    }
  };

  if (appointments.length === 0) return null;

  return (
    <div className={`appointments ${compact ? "compact" : "full"}`}>
      {appointments.map((appt) => (
        <div key={appt.timestamp} className="appointment-item" style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "8px"
        }}>
          <div>
            <strong>{appt.time}</strong> – {appt.patient} ({appt.doctor})
          </div>
          <div>
            <button
              onClick={() => handleDelete(appt.timestamp)}
              style={{
                color: "white",
                background: "red",
                border: "none",
                borderRadius: "4px",
                padding: "2px 8px",
                cursor: "pointer",
              }}
              title="Delete"
            >
              🗑️
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
