import * as oicq from "oicq"
class Replier {
    context: any
}

function removeQuestion(str: string) {
    ["?", "？", "吗"].forEach((item, index, arr) => {
        str.replace(item, "")
    })
}

export class PrivateReplier extends Replier {
    reply(event: oicq.MessageEventData): void{
        let message = event.raw_message
        removeQuestion(message)
        event.reply(message)
    }
}



