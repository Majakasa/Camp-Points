import axios from 'axios';

const AjaxHelpers = {

  findCamper: function(name) {
    return axios.get('http://localhost:3000/campers/' + name);
  },
  listCampers: function(){
    return axios.get('http://localhost:3000/campers');
  },
  addCamper: function(camper){
    return axios.post('http://localhost:3000/add', camper);
  },

  deleteAuthor: function (author) {
    return axios.delete('http://localhost:3000/movies/' + author.author)
  },
  updateInfo: function (updateInfo) {
    return axios.put('http://localhost:3000/movies/' + updateInfo.author, updateInfo)
  }
}

export default AjaxHelpers;
