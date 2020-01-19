import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    admin: Boolean,
  },
  { collation: { locale: 'en', strength: 1 } }
)

userSchema.set('toJSON', { getters: true })

// @ts-ignore
userSchema.options.toJSON.transform = (doc, ret) => {
  const obj = { ...ret }
  delete obj._id
  delete obj.__v
  delete obj.password
  return obj
}

userSchema.pre('save', async function(next) {
  // @ts-ignore
  this.password = await bcrypt.hash(this.password, 10)
  next()
})

userSchema.methods.isValidPassword = async function(password) {
  // @ts-ignore
  return await bcrypt.compare(password, this.password)
}

const User = mongoose.model('User', userSchema)

export default User
