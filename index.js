// const express = require('express')
// const path = require('path')
// const PORT = process.env.PORT || 5000

// express()
//   .use(express.static(path.join(__dirname, 'public')))
//   .set('views', path.join(__dirname, 'views'))
//   .set('view engine', 'ejs')
//   .get('/', (req, res) => res.render('pages/index'))
//   .listen(PORT, () => console.log(`Listening on ${ PORT }`))


// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
const express = require("express");
const app = express();
const got = require("got");

// make all the files in 'public' available
// https://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});

app.get("/info", async (req, resp) => {
  const bot = await got("https://api.telegram.org/bot1500961059:AAGKH7a-RHTiBW-TlpbeClXC4PKeal61das/getMe");
  console.log(bot.body);
  resp.sendStatus(200);
});

app.get("/set", async (req, resp) => {
  const webhook = await got("https://api.telegram.org/bot1500961059:AAGKH7a-RHTiBW-TlpbeClXC4PKeal61das/setWebhook?url=https%3A%2F%2Fleaf-coral-newt.glitch.me%2Ftelegram");
  console.log(webhook.body);
  resp.sendStatus(200);
});

app.get("/test", async (req, resp) => {
  const webhookStatus = await got("https://api.telegram.org/bot1500961059:AAGKH7a-RHTiBW-TlpbeClXC4PKeal61das/getWebhookInfo");
  console.log(webhookStatus.body);
  resp.sendStatus(200);
});

var testCounter = 0;

app.post("/telegram", (req, resp) => {
  console.log("Messaggio in arrivo!");
  resp.status(200).send("Messaggio in arrivo!").end();
  testCounter++;
});

app.get("/telegramTest", (req, resp) => {
  resp.status(200).send(testCounter.toString()).end();
});

app.get("/", (req, resp) => {
  resp.status(200).type("text/html").send("<b>Good morning everyone :D</b>").end();
});
