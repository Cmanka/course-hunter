export const emailValidate = (email: string) =>
  /^\S+@\S+\.\S+$/.test(email.trim()) || 'email is incorrect';
