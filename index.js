const axios = require('axios').default;
const Links = require('./Links');

module.exports = {

    async getUser(byID, Param) {
        if (byID == true) {
         const AxiosResponse = await axios.get(Links.userByID + Param);
         return AxiosResponse.data;
        } else {
            const AxiosResponse = await axios.get(Links.userByName + Param);
            return AxiosResponse.data;
        }
    }

}