import express from "express";
import {
  GetTrendingVideosOkXXX,
  GetPopularPornstar,
  GetPopUlarVideosOkXXX,
} from "./scraper/routes.js";
const app = express();
import cors from "cors";
const port = process.env.PORT || 4000;
app.use(cors({ origin: "*", credentials: true }));
app.use(express.json());
app.get("/gambit/getTop", async (req, res) => {
  const data = await GetPopularPornstar({});
  res.send(data);
});
app.get("/gambit/popularxxx", async (req, res) => {
  const data = await GetPopUlarVideosOkXXX({});
  res.send(data);
});
app.get("/gambit/trendingxxx", async (req, res) => {
  const data = await GetTrendingVideosOkXXX({});
  res.send(data);
});
app.get("/", async (req, res) => {
  res.send("XDDDD");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port} `);
});
