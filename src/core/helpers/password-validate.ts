export const passwordValidate = (password: string) =>
  /^.{8,}$/.test(password.trim()) || 'password is incorrect';
