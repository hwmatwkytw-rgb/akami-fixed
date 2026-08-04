module.exports.config = {
  name: "فاميلي",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "S H A D O W",
  description: "اكتشف بنفسك",
  prefix: false,
    category: "الــتــرفــيــه والــالــعــاب",
  usages: "",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
  var link = [
 "https://i.ibb.co/bwtXDMB/Gmv-PEJEb-UAAk-W-T-format-jpg-name-large.jpg",
  ];
	  var callback = () => api.sendMessage({body:`💖 سوي صورة لكل أعضاء كروبك ، مثال :
⚠️العائلة <الحجم> <كود اللون> <العنوان>
✴️ توضيح :
• الحجم: حجم صورة الشخص
• رمز اللون: رمز اللون السداسي
• العنوان: عنوان الصورة ، اذا محطيت عنوان البوت راح يحط اسم الكروب 
✨مثال: (   العائلة 200 #ffffff )`,attachment: fs.createReadStream(__dirname + "/cache/5.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.jpg")).on("close",() => callback());
   };