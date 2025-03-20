import mongoose, { Schema, Document } from 'mongoose';

interface IAppointment extends Document {
  name: string;
  email: string;
  mobile: string;
  date: Date;
  timeSlot: string;
  createdAt: Date;
}

const AppointmentSchema = new Schema<IAppointment>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  mobile: { type: String, required: true },
  date: { type: Date, required: true },
  timeSlot: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.models.Appointment || mongoose.model<IAppointment>("Appointment", AppointmentSchema);
