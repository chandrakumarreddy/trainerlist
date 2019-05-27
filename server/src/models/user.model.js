const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
	name: {
		type: String
	},
	age: {
		type: Number
	},
	email: {
		type: String
	},
	phone: {
		type: String
	},
	designation: {
		type: String
	},
	department: {
		type: String
	},
	certification: {
		type: [String]
	},
	location: {
		type: String
	},
	deleveries: {
		type: [String]
	},
	experience: {
		type: String
	},
	technologies: {
		type: [String]
	},
	photo: {
		type: String
	},
	dob: {
		type: String
	}
});

module.exports = mongoose.model("User", UserSchema);
