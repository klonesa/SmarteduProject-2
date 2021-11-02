exports.getAboutPage = (req, res) => {
  res.status(200).render("about", {
    page_name: "about",
  });
};
exports.getIndexPage=(req, res) => {
    console.log(req.session.userIN)
    res.status(200).render("index", {
      page_name: "index",
    });
  }
  exports.getRegisterPage=(req, res) => {
    res.status(200).render("register", {
      page_name: "register",
    });
  }
  exports.getLoginPage=(req, res) => {
    res.status(200).render("login", {
      page_name: "login",
    });
  }