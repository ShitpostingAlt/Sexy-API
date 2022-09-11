import { load } from "cheerio";
import axios from "axios";
import fs from "fs"
const XhamsterPopularPornstarsUrl = "https://xhamster18.desi/pornstars" //use .com if youre outside india
const OkXXXPopularBase = "https://ok.xxx/popular/";

// const main= async () => {
//     const res = await axios.get(XhamsterPopularPornstarsUrl)
//     // console.log(res.data)
//     const $ = cheerio.load(res.data)
//     const list  = []
//     const cherdata = $(".thumb-container > .pornstar-thumb-container > ").each((li, el) => {
//         list.push({
//             PornStarImage: $(el).find(".pornstar-thumb-container__original-image").attr("src"),
//             PornStarRank : $(el).find("span").text()
            
//         })
//     })
//     console.log(list)
//     // fs.writeFile("index", list, () => {
//     //     console.log("Success")
//     // } )
// }
// main()
const main= async () => {
    const res = await axios.get(OkXXXPopularBase)
    // console.log(res.data)
    const $ = load(res.data)
    const list  = []
    // const cherdata1 = $("#list_videos_common_videos_list > div").find("a").attr("title")
    const cherdata = $("#list_videos_common_videos_list > .thumb-bl ").each((div, el) => {
        list.push({
            VidTitle: $(el).find("a").attr("title"),
            VidWatch: $(el).find("a ").attr("href")
        })
    })
    console.log(list)
    fs.writeFile("index", res.data , () => {
        console.log("Success")
    } )
}
main()