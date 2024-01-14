const baseUrl = "https://anbo-restcarswithmanager.azurewebsites.net/api/cars"
//"https://anbo-restbookquerystring.azurewebsites.net/api/books"
//const baseUrl = "http://jsonplaceholder.typicode.com/posts"
//const baseUrl = "http://jsonplaceholder.typicode.com/users" 

// Should work with any REST GET url that returns an array of objects

Vue.createApp({
    data() {
        return {
            data: [],
            message: null
        }
    },
    async created() {
        try {
            const response = await axios.get(baseUrl)
            this.data = await response.data
        } catch (error) {
            this.message = error.message
        }
    }
}).mount("#app")