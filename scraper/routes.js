import { load } from "cheerio";
import axios from "axios";
const OkXXXPopularBase = "https://ok.xxx/popular/";
const OkxxxBase = "https://ok.xxx";
const XhamsterPopularPornstarsUrl = "https://xhamster18.desi/pornstars"; //use .com if youre outside india

export const GetPopularPornstar = async ({ list = [], page = 1 }) => {
  try {
    const res = await axios.get(XhamsterPopularPornstarsUrl + `/${page}`);
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
  } catch (error) {
    console.log(error.message);
  }
};
export const GetPopUlarVideosOkXXX = async ({ list = [], page = 1 }) => {
  try {
    const res = await axios.get(OkXXXPopularBase + `${page}/`);
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
  } catch (error) {
    console.log(error.message);
  }
};
export const GetTrendingVideosOkXXX = async ({ list = [], page = 1 }) => {
  try {
    const res = await axios.get(OkxxxBase + `/trending/${page}/`);
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
  } catch (error) {
    console.log(error.message);
  }
};
export const GetbyKeyword = async ({  list = [], page = 1 , keyw }) => {
  try {
    if (!keyw)
      return {
        error: "No keyword Specified",
      };
    const res = await axios.get(OkxxxBase + `/search/${keyw}/${page}/`);
    const $ = load(res.data);
    const cherdata = $("#list_videos_videos_list_search_result > .thumb-bl ").each(
      (div, el) => {
        list.push({
          VidTitle: $(el).find("a").attr("title"),
          VidWatch: OkxxxBase + $(el).find("a ").attr("href"),
          VidThumb: "https:" + $(el).find("a > img").attr("data-original"),
        });
      }
    );
    return list;
  } catch (error) {
    console.log(error.message);
  }
};