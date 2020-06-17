require("dotenv").config();
const axios = require("axios");

module.exports = {
  search: async (req, res) => {
    console.log(req.body);
    const result = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${req.body.search}&key=${process.env.GOOGLE_BOOKS}`
    ).catch(err =>{
        console.log(err)
    })
    res.json(result);
  },
};
