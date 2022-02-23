const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 5000;
const { toXML } = require("jstoxml");

express()
  .use(express.static(path.join(__dirname, "public")))
  .set("views", path.join(__dirname, "views"))
  .set("view engine", "ejs")
  .get("/", (req, res) => res.render("pages/index"))
  .get("/test", (req, res) => res.json({ test: "testmessage" }))
  .get("/testfeedfile", (req, res) => {
    res.sendFile(path.join(__dirname, 'example_feed_xml_rss.xml'));
  })
  .get("/testfeedjson", (req, res) => {
    // res.sendFile(path.join(__dirname, 'example_feed_xml_rss.xml'));
    const feedResult = require("./feedResult.json");
    const xmlOptions = {
      header: true,
      indent: "  ",
    };
    const sample = toXML(feedResult, xmlOptions);
    res.type('application/xml');
    res.send(sample);
  })
  .listen(PORT, () => console.log(`Listening on ${PORT}`));
