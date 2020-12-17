//参考：https://qiita.com/pochman/items/64b34e9827866664d436
const { contextBridge, ipcRenderer} = require("electron");
contextBridge.exposeInMainWorld(
    "api", {
        send: (data) => {
            ipcRenderer.send("msg_render_to_main", data);
        }
    }
);