import axios from "axios";

export default {
    getBaseBreedsList: function () {
        return axios.get("https://dog.ceo/api/breeds/list")
    },
    getDogsOfBreed: function (breed) {
        return axios.get("https://dog.ceo/api/breed/"+ breed +"/images")

    },
    getRandomDog: function () {
        return axios.get("https://dog.ceo/api/breeds/image/random")

    }
}