import mongoose from "mongoose";
const { Schema } = mongoose;

const contactSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  phoneNo: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});
export default mongoose.models.Contact ||
  mongoose.model("Contact", contactSchema);
