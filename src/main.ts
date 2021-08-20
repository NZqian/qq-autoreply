import * as oicq from "oicq"
import { MessageHandler } from "./message_handler";


let config: oicq.ConfBot = {
    log_level: "info",
    platform: 5
}
const account = 3080289509;
const client = oicq.createClient(account, config);

//监听上线事件
client.on("system.online", () => console.log("Logged in!"));

client.on("message", (event) => {
    MessageHandler(event)
})

client.on("system.login.slider", function (event) { //监听滑动验证码事件
    process.stdin.once("data", (input) => {
        this.sliderLogin(input.toString()); //输入ticket
    });
}).on("system.login.device", function (event) { //监听登录保护验证事件
    process.stdin.once("data", () => {
        this.login(); //验证完成后按回车登录
    });
}).login("aqswdefr"); //需要填写密码或md5后的密码
