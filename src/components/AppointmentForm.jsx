// // src/components/AppointmentForm.jsx

// import React, { useState } from "react";
// import { doctors, patients } from "../data/staticData";
// import "./styles/AppointmentForm.css";

// export default function AppointmentForm({ date, onClose, onSave }) {
//   const [patient, setPatient] = useState("");
//   const [doctor, setDoctor] = useState("");
//   const [time, setTime] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const appointment = {
//       date: date.toISOString(),
//       patient,
//       doctor,
//       time
//     };

//     onSave(appointment);
//     onClose();
//   };

//   return (
//     <div className="modal-overlay">
//       <div className="modal">
//         <h2>New Appointment - {date.toDateString()}</h2>
//         <form onSubmit={handleSubmit} className="appointment-form">
//           <label>Patient:</label>
//           <select required value={patient} onChange={(e) => setPatient(e.target.value)}>
//             <option value="">Select Patient</option>
//             {patients.map((p) => (
//               <option key={p.id} value={p.name}>
//                 {p.name}
//               </option>
//             ))}
//           </select>

//           <label>Doctor:</label>
//           <select required value={doctor} onChange={(e) => setDoctor(e.target.value)}>
//             <option value="">Select Doctor</option>
//             {doctors.map((d) => (
//               <option key={d.id} value={d.name}>
//                 {d.name} ({d.specialty})
//               </option>
//             ))}
//           </select>

//           <label>Time:</label>
//           <input
//             required
//             type="time"
//             value={time}
//             onChange={(e) => setTime(e.target.value)}
//           />

//           <div className="form-buttons">
//             <button type="submit">Save</button>
//             <button type="button" onClick={onClose} className="cancel-btn">
//               Cancel
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }


// import React, { useState } from "react";
// import { doctors, patients } from "../data/staticData";
// import { addAppointment } from "../utils/storage";
// import "./styles/AppointmentForm.css";

// export default function AppointmentForm({ date, onClose }) {
//   const [patient, setPatient] = useState("");
//   const [doctor, setDoctor] = useState("");
//   const [time, setTime] = useState("");

//   if (!date) return null; 

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const appointment = {
//       timestamp: Date.now(), // Unique identifier
//       date: date.toISOString(),
//       patient,
//       doctor,
//       time,
//     };

//     addAppointment(appointment);
//     onClose(); // Close modal after saving
//   };

//   return (
//     <div className="modal-overlay">
//       <div className="modal">
//         <h2>New Appointment – {date.toDateString()}</h2>
//         <form onSubmit={handleSubmit} className="appointment-form">
//           <label>Patient:</label>
//           <select value={patient} onChange={(e) => setPatient(e.target.value)} required>
//             <option value="">Select Patient</option>
//             {patients.map((p) => (
//               <option key={p.id} value={p.name}>
//                 {p.name}
//               </option>
//             ))}
//           </select>

//           <label>Doctor:</label>
//           <select value={doctor} onChange={(e) => setDoctor(e.target.value)} required>
//             <option value="">Select Doctor</option>
//             {doctors.map((d) => (
//               <option key={d.id} value={d.name}>
//                 {d.name} ({d.specialty})
//               </option>
//             ))}
//           </select>

//           <label>Time:</label>
//           <input
//             type="time"
//             value={time}
//             onChange={(e) => setTime(e.target.value)}
//             required
//           />

//           <div className="form-buttons">
//             <button type="submit">Save</button>
//             <button type="button" onClick={onClose} className="cancel-btn">
//               Cancel
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }


// import React, { useState, useEffect } from "react";
// import { doctors, patients } from "../data/staticData";
// import {
//   getAppointments,
//   addAppointment,
//   updateAppointment,
// } from "../utils/storage";
// import "./AppointmentForm.css";

// export default function AppointmentForm({ date, onClose, editData }) {
//   const [patient, setPatient] = useState("");
//   const [doctor, setDoctor] = useState("");
//   const [time, setTime] = useState("");

//   useEffect(() => {
//     if (editData) {
//       setPatient(editData.patient);
//       setDoctor(editData.doctor);
//       setTime(editData.time);
//     }
//   }, [editData]);

//   if (!date) return null;

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const newAppointment = {
//       timestamp: editData ? editData.timestamp : Date.now(),
//       date: date.toISOString(),
//       patient,
//       doctor,
//       time,
//     };

//     const existing = getAppointments();
//     const isConflict = existing.some(
//       (appt) =>
//         new Date(appt.date).toDateString() === date.toDateString() &&
//         appt.doctor === doctor &&
//         appt.time === time &&
//         (!editData || appt.timestamp !== editData.timestamp)
//     );

//     if (isConflict) {
//       alert(
//         `${doctor} is already booked at ${time} on ${date.toDateString()}`
//       );
//       return;
//     }

//     if (editData) {
//       updateAppointment(newAppointment);
//     } else {
//       addAppointment(newAppointment);
//     }

//     onClose();
//   };

//   return (
//     <div className="modal-overlay">
//       <div className="modal">
//         <h2>{editData ? "Edit" : "New"} Appointment – {date.toDateString()}</h2>
//         <form onSubmit={handleSubmit} className="appointment-form">
//           <label>Patient:</label>
//           <select value={patient} onChange={(e) => setPatient(e.target.value)} required>
//             <option value="">Select Patient</option>
//             {patients.map((p) => (
//               <option key={p.id} value={p.name}>{p.name}</option>
//             ))}
//           </select>

//           <label>Doctor:</label>
//           <select value={doctor} onChange={(e) => setDoctor(e.target.value)} required>
//             <option value="">Select Doctor</option>
//             {doctors.map((d) => (
//               <option key={d.id} value={d.name}>
//                 {d.name} ({d.specialty})
//               </option>
//             ))}
//           </select>

//           <label>Time:</label>
//           <input type="time" value={time} onChange={(e) => setTime(e.target.value)} required />

//           <div className="form-buttons">
//             <button type="submit">{editData ? "Update" : "Save"}</button>
//             <button type="button" onClick={onClose} className="cancel-btn">
//               Cancel
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }


import React, { useState } from "react";
import { doctors, patients } from "../data/staticData";
import { getAppointments, addAppointment } from "../utils/storage";
import "./styles/AppointmentForm.css";

export default function AppointmentForm({ date, onClose }) {
  const [patient, setPatient] = useState("");
  const [doctor, setDoctor] = useState("");
  const [time, setTime] = useState("");

  if (!date) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    const newAppointment = {
      timestamp: Date.now(),
      date: date.toISOString(),
      patient,
      doctor,
      time,
    };

    const existing = getAppointments();
    const isConflict = existing.some(
      (appt) =>
        new Date(appt.date).toDateString() === date.toDateString() &&
        appt.doctor === doctor &&
        appt.time === time
    );

    if (isConflict) {
      alert(`${doctor} is already booked at ${time} on ${date.toDateString()}`);
      return;
    }

    addAppointment(newAppointment);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>New Appointment – {date.toDateString()}</h2>
        <form onSubmit={handleSubmit} className="appointment-form">
          <label>Patient:</label>
          <select value={patient} onChange={(e) => setPatient(e.target.value)} required>
            <option value="">Select Patient</option>
            {patients.map((p) => (
              <option key={p.id} value={p.name}>
                {p.name}
              </option>
            ))}
          </select>

          <label>Doctor:</label>
          <select value={doctor} onChange={(e) => setDoctor(e.target.value)} required>
            <option value="">Select Doctor</option>
            {doctors.map((d) => (
              <option key={d.id} value={d.name}>
                {d.name} ({d.specialty})
              </option>
            ))}
          </select>

          <label>Time:</label>
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />

          <div className="form-buttons">
            <button type="submit">Save</button>
            <button type="button" onClick={onClose} className="cancel-btn">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}


