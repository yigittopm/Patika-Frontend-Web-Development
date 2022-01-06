import axios from 'axios'

const getData = async (id) => {
    const userData = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    const postData = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)

    console.log("user:", userData.data)
    console.log("post:", postData.data)
}

export default getData;