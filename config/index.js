export const API_BASE_URL = 'http://192.168.86.107' //update this with your local IP address
export const PORT = process.env.NODE_ENV === 'production' ? 3000 : 8080
export const API_URL = `${API_BASE_URL}:${PORT}/api`
