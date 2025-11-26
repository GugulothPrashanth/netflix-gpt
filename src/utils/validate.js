export const checkValidData = (email, password, name) => {
  const isNameValid = /^[a-zA-Z]+(?:[ -'][a-zA-Z]+)*$/.test(name);

  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );

  const isPasswordValid =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
      password
    );

  if (!isNameValid) return "User Name is not Valid";

  if (!isEmailValid) return "Email ID is not Valid";

  if (!isPasswordValid) return "Password is not Valid";

  return null;
};
