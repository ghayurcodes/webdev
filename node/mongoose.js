import mongoose from "mongoose";

try {
  await mongoose.connect("mongodb://localhost:27017/test");
  console.log("MongoDB connected");
} catch (err) {
  console.error("Connection error:", err);
}


// Define a schema
const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

// Create a model
const User = mongoose.model("users", userSchema);

const user=new User({
    "name":"gul khan",
    "age":33
})

user.save()


console.log( await User.find())

