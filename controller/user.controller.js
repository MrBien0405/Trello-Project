module.exports.renderHomepage = (req, res) => {
  res.render("homepage.ejs");
};
module.exports.renderBoard = (req, res) => {
  res.render("workspaceBoard.ejs");
};