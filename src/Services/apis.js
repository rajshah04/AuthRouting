const BASE_URL = process.env.REACT_APP_BASE_URL ;

// Auth Endpoints
export const authEndpoints = {
    LOGIN_API: BASE_URL + "/auth/login",
    SIGNUP_API: BASE_URL + "/auth/signup",
}