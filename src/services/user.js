import User from "../models/users.js";

export const CreateUser = async (userData) => {
  const user = await User.create(userData); // ✅ await
  const { password, ...userWithoutPassword } = user.toObject();
  return userWithoutPassword;
};
