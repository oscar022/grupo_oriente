const res = require("express/lib/response");
const chatCtrl={};

//ver mensajes
chatCtrl.leerchat =  (req, res) => {
      res.render("esp/mensajes/chat");
    };

    module.exports = chatCtrl;
