import axios from 'axios'

const api = {
    buzzquizz: axios.create({
        baseURL: 'https://mock-api.driven.com.br/api/vs/buzzquizz/quizzes'
    })
}

export default api