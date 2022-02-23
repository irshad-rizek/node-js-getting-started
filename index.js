const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/test', (req, res) => res.json({"test":"testmessage"}))
  .get('/testfeed', (req, res) => 
  {
    // res.json({"test":"testmessage"})
    res.sendFile(path.join(__dirname, 'example_feed_xml_rss.xml'));
  })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
