import axios from "axios";
const getData = async () => {
    try {
        const listPost = await axios.get('http://jsonplaceholder.typicode.com/posts')
        console.log(listPost.data[0])
        const dataDetail = await axios.get('http://jsonplaceholder.typicode.com/posts/1')
        console.log(dataDetail.data)
    } catch (error) {
        console.log(error)
    }
}
getData()