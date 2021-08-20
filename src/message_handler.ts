import { time } from "console";
import * as oicq from "oicq"
import { PrivateReplier } from "./replier";
let privateReplier = new PrivateReplier
export function MessageHandler(event: oicq.MessageEventData): void {
    var time = new Date(event.time * 1000)
    console.log(time.getHours())

    if (event.message_type == "private") {
        console.log(event)
        if (event.sender.remark.indexOf("王天倚")) {
            event.reply("")
        }
        if (event.sender.user_id == 2507739806) {
            if (event.message[0]['type'] == "text") {
                privateReplier.reply(event)
            } else {
                event.reply(event.raw_message)
            }
        }
        if (event.sender.user_id == 3080289509) {
            //setTimeout(function () { event.reply("fuck") }, 1000)
            privateReplier.reply(event)
        }
    } else if (event.message_type == "group") {

    }
}