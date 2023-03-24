import axios from 'axios';

const user = {
    name: 'hungnv0902'
}

async function getUserProfile() {
    try {
        const githubUser = await axios.get(`https://api.github.com/users/${user.name}`);
        console.log(githubUser.data)
    } catch (err: any) {
        console.log(err.message)
    }
}

getUserProfile();