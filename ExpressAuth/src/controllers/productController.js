const getHomePage = (req, res) => {
  //   res.send("<div>Home page</div>");
  //   res.sendFile(
  //     "/Users/abhinav/Desktop/Linux/BE/NodeBasics/ExpressAuth/src/views/home.html"
  //   );

  // res.sendFile('/src/views/home.html', {root: process.env.BASE_PATH});

    const productData = {
      mobile: 'Iphone 14 pro max',
      cloth: "Jeans",
      appliances: "Fridge",
      product: [{},{}]
    }
  res.render('home/homeWP.pug', productData)

};

const getAboutPage = (req, res) => {
  // res.sendFile(
  //   "/Users/abhinav/Desktop/Linux/BE/NodeBasics/ExpressAuth/src/views/about.html"
  // );

  res.render('home/about.pug')
};

module.exports = { getHomePage, getAboutPage };
