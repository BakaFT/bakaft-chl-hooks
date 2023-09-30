const TICKER_MESSAGES = [
    {
        matcher: "/lol-service-status/v1/ticker-messages",
        preSend: (XhrRequestConfig) => { },
        postSend: (response) => {
            const myMessage = [
                {
                    "createdAt": "2020-03-28T19:51:24.080320+00:00",
                    "heading": "嗨",
                    "message": "您正在使用国服优化插件,如有不生效现象请尝试Ctrl+Shift+R刷新客户端",
                    "severity": "info",
                    "updatedAt": "2020-03-28T19:51:00+00:00"
                },
            ]
            const originalMessage = JSON.parse(response.response)
            const finalMessage= [
                ...originalMessage,
                ...myMessage
            ]
            response.response = JSON.stringify(finalMessage)
        }
    }
]

const MITM_FUNCTIONS = [
    {
        // 开启聊天小窗 打开个人状态
        matcher: "/lol-platform-config/v1/namespaces/LcuSocial",
        preSend: (XhrRequestConfig) => {},
        postSend: (response) => {
            const respJson = JSON.parse(response.response)
            respJson["ChatWindowPopoutEnabled"] = true
            respJson["StatusesDisabled"] = false
            response.response = JSON.stringify(respJson)
            
        }
    },
    {
        // 开启炫彩页面
        matcher: "/lol-platform-config/v1/namespaces/LCUCollections/LCUCollectiblesChromasEnabled",
        preSend: (XhrRequestConfig) => {},
        postSend: (response) => {
            response.response = true
        }
    },
    {
        // 无视生涯隐私
        matcher:"/lol-summoner/v1/profile-privacy-enabled",
        preSend: (XhrRequestConfig) => {},
        postSend: (response) => {
            response.response = "FUCK U TENCENT"
        }
    },
    {
        // 批量分解开关
        matcher: "/lol-loot/v1/mass-disenchant/configuration",
        preSend: (XhrRequestConfig) => {},
        postSend: (response) => {
            const respJson = JSON.parse(response.response)
            respJson["enabled"] = true
            response.response = JSON.stringify(respJson)
            
        }
    },
]

export default[
    ...MITM_FUNCTIONS,
    // ...TICKER_MESSAGES
]