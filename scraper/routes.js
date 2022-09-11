import { load } from "cheerio";
import axios from "axios";
const OkXXXPopularBase = "https://ok.xxx/popular/";
const OkxxxBase = "https://ok.xxx";
const XhamsterPopularPornstarsUrl = "https://xhamster18.desi/pornstars"; //use .com if youre outside india

export const GetPopularPornstar = async ({ list = [] }) => {
  const res = await axios.get(XhamsterPopularPornstarsUrl);
  const $ = load(res.data);
  const cherdata = $(".thumb-container > .pornstar-thumb-container").each(
    (a, el) => {
      list.push({
        PornStarImage: $(el)
          .find(".pornstar-thumb-container__original-image")
          .attr("src"),
        PornStarRank: $(el).find("a > span").text().replace(/\s\s+/g, ""),
        PornStarName: $(el)
          .find(".pornstar-thumb-container__info > div > a")
          .text(),
        PornStarViews: $(el)
          .find(
            ".pornstar-thumb-container__info > .pornstar-thumb-container__info-videos > div"
          )
          .first()
          .text(),
        PornStarVideos: $(el)
          .find(
            ".pornstar-thumb-container__info > .pornstar-thumb-container__info-videos > div:nth-child(2)"
          )
          .first()
          .text()
          .replace(/\s\s+/g, ""),
      });
    }
  );
  return list;
};
export const GetPopUlarVideosOkXXX = async ({ list = [] }) => {
  const res = await axios.get(OkXXXPopularBase);
  const $ = load(res.data);
  const cherdata = $("#list_videos_common_videos_list > .thumb-bl ").each(
    (div, el) => {
      list.push({
        VidTitle: $(el).find("a").attr("title"),
        VidWatch: OkxxxBase + $(el).find("a ").attr("href"),
        VidThumb: "https:" + $(el).find("a > img").attr("data-original"),
      });
    }
  );
  return list;
};
export const GetTrendingVideosOkXXX = async ({ list = [] }) => {
  const res = await axios.get(OkxxxBase + "/trending/");
  const $ = load(res.data);
  const cherdata = $("#list_videos_common_videos_list > .thumb-bl ").each(
    (div, el) => {
      list.push({
        VidTitle: $(el).find("a").attr("title"),
        VidWatch: OkxxxBase + $(el).find("a ").attr("href"),
        VidThumb: "https:" + $(el).find("a > img").attr("data-original"),
      });
    }
  );
  return list;
};
