
const STORAGE_KEY = "appointments";

export const getAppointments = () => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (err) {
    console.error("Failed to parse appointments:", err);
    return [];
  }
};


export const saveAppointments = (appointments) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(appointments));
};


export const addAppointment = (appointment) => {
  const existing = getAppointments();
  existing.push(appointment);
  saveAppointments(existing);
};


export const deleteAppointment = (timestamp) => {
  const updated = getAppointments().filter((a) => a.timestamp !== timestamp);
  saveAppointments(updated);
};

export const updateAppointment = (updatedAppointment) => {
  const all = getAppointments();
  const updated = all.map((appt) =>
    appt.timestamp === updatedAppointment.timestamp ? updatedAppointment : appt
  );
  saveAppointments(updated);
};
