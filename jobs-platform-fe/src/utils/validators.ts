export const emailValidator = (email: string) => {
    if(!email) {
        return 'Email is required'
    } else if (!new RegExp(/\S+@\S+\.\S+/).test(email)) {
        return "Incorrect email format";
      }
      return "";
}

export const passwordValidator = (password: string) => {
    if(!password) {
        return "Password is required"
    } else if (password.length < 8) {
        return "Password must be at least 8 characters longs"
    }
}

export const passwordConfirmationValidator = (password: string, confirmPassword: string) => {
    if(!confirmPassword) {
        return "Confirm password field is required"
    } else if (confirmPassword !== password) {
        return "Paswords do not match"
    }
}