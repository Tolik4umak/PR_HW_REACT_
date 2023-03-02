import axios from "axios"

const URL ='http://localhost:3002/courses'

const getAllCourses = () => {
    return axios.get(URL)
            .then(resp => resp)
            .catch(err => console.log(err))
}

const deleteOneCourse = (id) => {
    return axios.delete(`${URL}/${id}`)
            .then(resp => resp)
            .catch(err => console.log(err))
}

const addOneCourse = (course) => {
    return axios.post(URL, course)
            .then(resp => resp)
            .catch(err => console.log(err))
}

const changeOneCourse = (id, data) => {
    return axios.patch(`${URL}/${id}`, data)
            .then(resp => resp)
            .catch(err => console.log(err))
}



export default {
    getAllCourses,
    deleteOneCourse,
    addOneCourse,
    changeOneCourse
} 