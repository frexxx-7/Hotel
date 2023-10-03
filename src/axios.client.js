import axios from "axios";

const axiosCLient = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL
})

axiosCLient.interceptors.request.use((config) => {
    const token = localStorage.getItem('ACCESS_TOKEN')

    config.headers.Authorization = `Bearer ${token}`
    return config
})

axiosCLient.interceptors.response.use((response) => {
    return response
}, (error) => {
    try {
        const { response } = error
        if (response.status == 401) {
            localStorage.removeItem('ACCESS_TOKEN')
        }

    } catch (error) {
        console.log(error);
    }

})

export default axiosCLient