import mongoose, {Schema, Document} from "mongoose";
import bcrypt from 'bcrypt';

export interface IUser extends Document{
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

const userSchema: Schema = new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
});


userSchema.pre<IUser>('save', async function(next){
    if(!this.isModified('password')) return next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

export default mongoose.model<IUser>('User', userSchema);