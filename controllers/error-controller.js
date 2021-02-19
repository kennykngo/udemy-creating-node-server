exports.get404 = (req, res, next) => {
  res.status(404).render("404", { path: null, pageTitle: "Page Not Found" });
};
