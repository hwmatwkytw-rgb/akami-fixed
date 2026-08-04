module.exports.config = {
  name: "اياكا",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "S H A D O W",
  description: "يجيبلك صور شخصيه اياكا",
  prefix: false,
     category: "الــتــرفــيــه والــالــعــاب",
  usages: "صور اياكا من لعبة جينشن انباكت ب 100$",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }

};

module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
  var link = [
"https://static.zerochan.net/Kamisato.Ayaka.full.4412341.png",
"https://static.zerochan.net/Kamisato.Ayaka.full.3356485.jpg",
"https://i.ibb.co/bwtXDMB/Gmv-PEJEb-UAAk-W-T-format-jpg-name-large.jpg",
"https://i.ibb.co/X2BnyJR/Angel-Shiva-Recommendations-anime.png",
"https://i.ibb.co/pjKmqX5/chloe-by-imaginative-ai-dhobd5i-414w-2x.jpg",
"https://i.ibb.co/2PfswtN/art-by-iacediai-2.png",
"https://i.ibb.co/wLpymy2/Ghost-of-Tsushima-20210314215620.jpg",
"https://files.catbox.moe/wpphai.jpg",
"https://files.catbox.moe/r19umn.jpg",
"https://files.catbox.moe/foc9v2.jpg",
"https://files.catbox.moe/sdp1hu.png",
"https://i.ibb.co/mc9KNm1/1619885987-21-pibig-info-p-anime-romantika-svadba-anime-krasivo-24.jpg",
"https://i.ibb.co/cc7brCrJ/D5-POGrd-U8-AERL9-H.jpg",
"https://i.ibb.co/fz3MZTC4/D5-POL5n-UYAAJCTb.jpg",
"https://i.ibb.co/whs3CrPJ/Dut71q-FVAAA7-Jbo.jpg",
"https://i.ibb.co/DpsYNWs/20230422224740.png",
"https://i.ibb.co/CnvKkn3/20230422224735.png",
"https://i.ibb.co/vZzKkFM/lrg2.png",
"https://i.ibb.co/wsgmRK5/31.jpg",
"https://i.ibb.co/XWv0mF9/Q.png",
"https://i.ibb.co/CzyWL4V/r3.jpg",
"https://i.ibb.co/Myw0ns2S/15.jpg",
"https://i.ibb.co/pQDSBkh/P1.jpg",
"https://i.ibb.co/zNGn3SN/18.png",
"https://i.ibb.co/hWvLHYb/E2.jpg",
"https://i.ibb.co/1RbX4k5/erinturner.jpg",
"https://i.ibb.co/94Z4Nmj/test.jpg",
"https://i.ibb.co/KpdynR6N/bbf3de09123c.png",
"https://i.ibb.co/DH1h40Wc/4d1c3ca94244.png",
"https://i.ibb.co/0YSdzjy/IMG-1745.jpg",
"https://i.ibb.co/kycq9Hq/IMG-1745.jpg",
"https://i.ibb.co/p489kvj",
"https://ik.imagekit.io/3njnkmvef/animefeet",
"https://files.catbox.moe/n9yob1.mp4",
"https://files.catbox.moe/us8ulr.png",
"https://files.catbox.moe/qoqoku.mp4",
"https://files.catbox.moe/834wl6.txt",
"https://files.catbox.moe/pose1.png",
"https://files.catbox.moe/pose2.png",
"https://files.catbox.moe/pose3.png",
"https://files.catbox.moe/sarah-door.jpg",
"https://files.catbox.moe/174bac.jpg",
"https://files.catbox.moe/8ce67f.jpg",
"https://files.catbox.moe/f51d7d.jpg",
"https://files.catbox.moe/65ea43.jpg",
"https://files.catbox.moe/eh871k.png",
"https://files.catbox.moe/d9pove.gif",
"https://files.catbox.moe/t817mr",
"https://files.catbox.moe/w85vin.png",
"https://files.catbox.moe/rewd80.png",
"https://files.catbox.moe/1fws9z.jpg",
"https://files.catbox.moe/982iis.gif",
"https://files.catbox.moe/ndkkka.txt"
   ];
  var max = Math.floor(Math.random() * 6);  
var min = Math.floor(Math.random() * 2);
  var data = await Currencies.getData(event.senderID);
  var exp =  data.exp;
  var money = data.money
      if(money < 0) api.sendMessage("تحتاج الى 100$ لرؤيه صور اياكا 🌝🌝 ?",event.threadID,event.messageID)
          else {
   Currencies.setData(event.senderID, options = {money: money - 100})
   var callback = () => api.sendMessage({body:`صور اياكا من لعبه جينشن امباكت\nعدد الصور : ${link.length}\n-100$ !`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"), event.messageID); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)] + (max - min))).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback());
     }
   };
