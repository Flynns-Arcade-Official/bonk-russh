gdjs.Main_32MenuCode = {};
gdjs.Main_32MenuCode.GDPlayButtonObjects1= [];
gdjs.Main_32MenuCode.GDPlayButtonObjects2= [];
gdjs.Main_32MenuCode.GDPlayButtonObjects3= [];
gdjs.Main_32MenuCode.GDMenuTitleObjects1= [];
gdjs.Main_32MenuCode.GDMenuTitleObjects2= [];
gdjs.Main_32MenuCode.GDMenuTitleObjects3= [];
gdjs.Main_32MenuCode.GDBackGroundObjects1= [];
gdjs.Main_32MenuCode.GDBackGroundObjects2= [];
gdjs.Main_32MenuCode.GDBackGroundObjects3= [];
gdjs.Main_32MenuCode.GDSelectCarButtonObjects1= [];
gdjs.Main_32MenuCode.GDSelectCarButtonObjects2= [];
gdjs.Main_32MenuCode.GDSelectCarButtonObjects3= [];
gdjs.Main_32MenuCode.GDLeaderBoardButtonObjects1= [];
gdjs.Main_32MenuCode.GDLeaderBoardButtonObjects2= [];
gdjs.Main_32MenuCode.GDLeaderBoardButtonObjects3= [];
gdjs.Main_32MenuCode.GDConnectWalletObjects1= [];
gdjs.Main_32MenuCode.GDConnectWalletObjects2= [];
gdjs.Main_32MenuCode.GDConnectWalletObjects3= [];
gdjs.Main_32MenuCode.GDDisconectWalletObjects1= [];
gdjs.Main_32MenuCode.GDDisconectWalletObjects2= [];
gdjs.Main_32MenuCode.GDDisconectWalletObjects3= [];
gdjs.Main_32MenuCode.GDconnectButtonObjects1= [];
gdjs.Main_32MenuCode.GDconnectButtonObjects2= [];
gdjs.Main_32MenuCode.GDconnectButtonObjects3= [];
gdjs.Main_32MenuCode.GDNewTextObjects1= [];
gdjs.Main_32MenuCode.GDNewTextObjects2= [];
gdjs.Main_32MenuCode.GDNewTextObjects3= [];
gdjs.Main_32MenuCode.GDBonkBalanceObjects1= [];
gdjs.Main_32MenuCode.GDBonkBalanceObjects2= [];
gdjs.Main_32MenuCode.GDBonkBalanceObjects3= [];
gdjs.Main_32MenuCode.GDBonkIconObjects1= [];
gdjs.Main_32MenuCode.GDBonkIconObjects2= [];
gdjs.Main_32MenuCode.GDBonkIconObjects3= [];
gdjs.Main_32MenuCode.GDRed_9595CarObjects1= [];
gdjs.Main_32MenuCode.GDRed_9595CarObjects2= [];
gdjs.Main_32MenuCode.GDRed_9595CarObjects3= [];
gdjs.Main_32MenuCode.GDBlue_9595CarObjects1= [];
gdjs.Main_32MenuCode.GDBlue_9595CarObjects2= [];
gdjs.Main_32MenuCode.GDBlue_9595CarObjects3= [];
gdjs.Main_32MenuCode.GDGreen_9595CarObjects1= [];
gdjs.Main_32MenuCode.GDGreen_9595CarObjects2= [];
gdjs.Main_32MenuCode.GDGreen_9595CarObjects3= [];
gdjs.Main_32MenuCode.GDCatObjects1= [];
gdjs.Main_32MenuCode.GDCatObjects2= [];
gdjs.Main_32MenuCode.GDCatObjects3= [];
gdjs.Main_32MenuCode.GDBonkObjects1= [];
gdjs.Main_32MenuCode.GDBonkObjects2= [];
gdjs.Main_32MenuCode.GDBonkObjects3= [];
gdjs.Main_32MenuCode.GDDogeObjects1= [];
gdjs.Main_32MenuCode.GDDogeObjects2= [];
gdjs.Main_32MenuCode.GDDogeObjects3= [];
gdjs.Main_32MenuCode.GDPepeObjects1= [];
gdjs.Main_32MenuCode.GDPepeObjects2= [];
gdjs.Main_32MenuCode.GDPepeObjects3= [];
gdjs.Main_32MenuCode.GDShibaObjects1= [];
gdjs.Main_32MenuCode.GDShibaObjects2= [];
gdjs.Main_32MenuCode.GDShibaObjects3= [];


gdjs.Main_32MenuCode.userFunc0x9707d0 = function GDJSInlineCode(runtimeScene) {
"use strict";
window.addEventListener("Wallet Connected", function(event) {
    console.log('Wallet Connected: ' + event.detail.wallet_address)
    runtimeScene.getGame().getVariables().get("WalletAddress").setString(event.detail.wallet_address)
})
window.addEventListener("Wallet Disconnected", function(event) {
    runtimeScene.getGame().getVariables().get("WalletAddress").setString("empty")
})
window.addEventListener("Token Transfered", function(event) {
    console.log("Token Transfered");
    runtimeScene.getGame().getVariables().get("TokenTransfered").setBoolean(event.detail.success)
    runtimeScene.getGame().getVariables().get("IsInteractionPlay").setBoolean(true)
})

window.addEventListener("Update Bonk", function(event){
    console.log("Update Bonk")
    let bonk_balance_number = parseFloat(event.detail.bonk_balance);
    runtimeScene.getGame().getVariables().get("BonkBalance").setString(event.detail.bonk_balance)
    runtimeScene.getGame().getVariables().get("BonkBalanceNumber").setNumber(bonk_balance_number)
})

window.addEventListener("Update Pool", function (event) {
    console.log("Update Pool")
    runtimeScene.getGame().getVariables().get("PoolBalance").setString(event.detail.pool_balance)
})

};
gdjs.Main_32MenuCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("PlayButton"), gdjs.Main_32MenuCode.GDPlayButtonObjects2);
{for(var i = 0, len = gdjs.Main_32MenuCode.GDPlayButtonObjects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDPlayButtonObjects2[i].Activate(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(4), true);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.sound.isSoundOnChannelPlaying(runtimeScene, 0));
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "5bf6889c0b81a767e32df186cf8b43e85b322048528a39cdc33512c30b5336e5_26 - super scary cave dragon.aac", 1, false, 50, 1);
}}

}


{


gdjs.Main_32MenuCode.userFunc0x9707d0(runtimeScene);

}


};gdjs.Main_32MenuCode.userFunc0x970a50 = function GDJSInlineCode(runtimeScene) {
"use strict";
if(runtimeScene.getGame().getVariables().get("WalletAddress").getAsString() == "empty")
{
    document.getElementById("connectBtn").click();
}

};
gdjs.Main_32MenuCode.eventsList1 = function(runtimeScene) {

{


gdjs.Main_32MenuCode.userFunc0x970a50(runtimeScene);

}


};gdjs.Main_32MenuCode.userFunc0x970f78 = function GDJSInlineCode(runtimeScene) {
"use strict";
document.getElementById("sendTransaction").click();

};
gdjs.Main_32MenuCode.eventsList2 = function(runtimeScene) {

{


gdjs.Main_32MenuCode.userFunc0x970f78(runtimeScene);

}


};gdjs.Main_32MenuCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("PlayButton"), gdjs.Main_32MenuCode.GDPlayButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDPlayButtonObjects2.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDPlayButtonObjects2[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Main_32MenuCode.GDPlayButtonObjects2[k] = gdjs.Main_32MenuCode.GDPlayButtonObjects2[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDPlayButtonObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)) == "empty";
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16564100);
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Main_32MenuCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayButton"), gdjs.Main_32MenuCode.GDPlayButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDPlayButtonObjects1.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDPlayButtonObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Main_32MenuCode.GDPlayButtonObjects1[k] = gdjs.Main_32MenuCode.GDPlayButtonObjects1[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDPlayButtonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)) == "empty");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDPlayButtonObjects1.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDPlayButtonObjects1[i].IsActivated((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Main_32MenuCode.GDPlayButtonObjects1[k] = gdjs.Main_32MenuCode.GDPlayButtonObjects1[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDPlayButtonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16566996);
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Main_32MenuCode.GDPlayButtonObjects1 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDPlayButtonObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDPlayButtonObjects1[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(4), false);
}
{ //Subevents
gdjs.Main_32MenuCode.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.Main_32MenuCode.userFunc0xdabd98 = function GDJSInlineCode(runtimeScene) {
"use strict";
document.getElementById("getPoolBalance").click();

};
gdjs.Main_32MenuCode.eventsList4 = function(runtimeScene) {

{


gdjs.Main_32MenuCode.userFunc0xdabd98(runtimeScene);

}


};gdjs.Main_32MenuCode.userFunc0xa72ce8 = function GDJSInlineCode(runtimeScene, objects) {
"use strict";
// const walletAddress = localStorage.getItem('walletAddress')
// if (walletAddress) {
//     const result = runtimeScene.getVariables().get("walletAddress");
//     const address = runtimeScene.getObjects("connectButton")
//     console.log(address[0].name)
//     address.name = walletAddress
//     console.log(result)
//     runtimeScene.getGame().getVariables().get("WalletAddress").setStringsetString(address[0].name)
//     return true
// }
console.log(runtimeScene.getGame().getVariables().get("WalletAddress").getAsString())
if(runtimeScene.getGame().getVariables().get("WalletAddress").getAsString() == "empty")
{
    document.getElementById("connectBtn").click();
}
else
{
    document.getElementById("disconnectBtn").click();
}

setTimeout(() => { localStorage.getItem("walletAddress"); return true }, 1000)
};
gdjs.Main_32MenuCode.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Main_32MenuCode.GDconnectButtonObjects2, gdjs.Main_32MenuCode.GDconnectButtonObjects3);


var objects = [];
objects.push.apply(objects,gdjs.Main_32MenuCode.GDconnectButtonObjects3);
gdjs.Main_32MenuCode.userFunc0xa72ce8(runtimeScene, objects);

}


{


let isConditionTrue_0 = false;
{
}

}


};gdjs.Main_32MenuCode.eventsList6 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("connectButton"), gdjs.Main_32MenuCode.GDconnectButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDconnectButtonObjects2.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDconnectButtonObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Main_32MenuCode.GDconnectButtonObjects2[k] = gdjs.Main_32MenuCode.GDconnectButtonObjects2[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDconnectButtonObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16571964);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Main_32MenuCode.eventsList5(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)) == "empty");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)) == "undefined");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("connectButton"), gdjs.Main_32MenuCode.GDconnectButtonObjects2);
{for(var i = 0, len = gdjs.Main_32MenuCode.GDconnectButtonObjects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDconnectButtonObjects2[i].SetLabelText(gdjs.evtTools.string.subStr(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)), 0, 6) + "..." + gdjs.evtTools.string.subStr(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)), gdjs.evtTools.string.strLen(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2))) - 3, 3), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)) == "empty";
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)) == "undefined");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("connectButton"), gdjs.Main_32MenuCode.GDconnectButtonObjects1);
{for(var i = 0, len = gdjs.Main_32MenuCode.GDconnectButtonObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDconnectButtonObjects1[i].SetLabelText("Connect Wallet", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};gdjs.Main_32MenuCode.eventsList7 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, false, true);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(3), false);
}
{ //Subevents
gdjs.Main_32MenuCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.Main_32MenuCode.eventsList3(runtimeScene);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(3), false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(4), true);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PlayButton"), gdjs.Main_32MenuCode.GDPlayButtonObjects1);
{for(var i = 0, len = gdjs.Main_32MenuCode.GDPlayButtonObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDPlayButtonObjects1[i].Activate(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(3), true);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Playing", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SelectCarButton"), gdjs.Main_32MenuCode.GDSelectCarButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDSelectCarButtonObjects1.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDSelectCarButtonObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Main_32MenuCode.GDSelectCarButtonObjects1[k] = gdjs.Main_32MenuCode.GDSelectCarButtonObjects1[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDSelectCarButtonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16569804);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Select Car Menu", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("LeaderBoardButton"), gdjs.Main_32MenuCode.GDLeaderBoardButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDLeaderBoardButtonObjects1.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDLeaderBoardButtonObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Main_32MenuCode.GDLeaderBoardButtonObjects1[k] = gdjs.Main_32MenuCode.GDLeaderBoardButtonObjects1[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDLeaderBoardButtonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16570716);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "LeaderBoard", false);
}
{ //Subevents
gdjs.Main_32MenuCode.eventsList4(runtimeScene);} //End of subevents
}

}


{


gdjs.Main_32MenuCode.eventsList6(runtimeScene);
}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("BonkBalance"), gdjs.Main_32MenuCode.GDBonkBalanceObjects1);
{for(var i = 0, len = gdjs.Main_32MenuCode.GDBonkBalanceObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDBonkBalanceObjects1[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(5)));
}
}}

}


};

gdjs.Main_32MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Main_32MenuCode.GDPlayButtonObjects1.length = 0;
gdjs.Main_32MenuCode.GDPlayButtonObjects2.length = 0;
gdjs.Main_32MenuCode.GDPlayButtonObjects3.length = 0;
gdjs.Main_32MenuCode.GDMenuTitleObjects1.length = 0;
gdjs.Main_32MenuCode.GDMenuTitleObjects2.length = 0;
gdjs.Main_32MenuCode.GDMenuTitleObjects3.length = 0;
gdjs.Main_32MenuCode.GDBackGroundObjects1.length = 0;
gdjs.Main_32MenuCode.GDBackGroundObjects2.length = 0;
gdjs.Main_32MenuCode.GDBackGroundObjects3.length = 0;
gdjs.Main_32MenuCode.GDSelectCarButtonObjects1.length = 0;
gdjs.Main_32MenuCode.GDSelectCarButtonObjects2.length = 0;
gdjs.Main_32MenuCode.GDSelectCarButtonObjects3.length = 0;
gdjs.Main_32MenuCode.GDLeaderBoardButtonObjects1.length = 0;
gdjs.Main_32MenuCode.GDLeaderBoardButtonObjects2.length = 0;
gdjs.Main_32MenuCode.GDLeaderBoardButtonObjects3.length = 0;
gdjs.Main_32MenuCode.GDConnectWalletObjects1.length = 0;
gdjs.Main_32MenuCode.GDConnectWalletObjects2.length = 0;
gdjs.Main_32MenuCode.GDConnectWalletObjects3.length = 0;
gdjs.Main_32MenuCode.GDDisconectWalletObjects1.length = 0;
gdjs.Main_32MenuCode.GDDisconectWalletObjects2.length = 0;
gdjs.Main_32MenuCode.GDDisconectWalletObjects3.length = 0;
gdjs.Main_32MenuCode.GDconnectButtonObjects1.length = 0;
gdjs.Main_32MenuCode.GDconnectButtonObjects2.length = 0;
gdjs.Main_32MenuCode.GDconnectButtonObjects3.length = 0;
gdjs.Main_32MenuCode.GDNewTextObjects1.length = 0;
gdjs.Main_32MenuCode.GDNewTextObjects2.length = 0;
gdjs.Main_32MenuCode.GDNewTextObjects3.length = 0;
gdjs.Main_32MenuCode.GDBonkBalanceObjects1.length = 0;
gdjs.Main_32MenuCode.GDBonkBalanceObjects2.length = 0;
gdjs.Main_32MenuCode.GDBonkBalanceObjects3.length = 0;
gdjs.Main_32MenuCode.GDBonkIconObjects1.length = 0;
gdjs.Main_32MenuCode.GDBonkIconObjects2.length = 0;
gdjs.Main_32MenuCode.GDBonkIconObjects3.length = 0;
gdjs.Main_32MenuCode.GDRed_9595CarObjects1.length = 0;
gdjs.Main_32MenuCode.GDRed_9595CarObjects2.length = 0;
gdjs.Main_32MenuCode.GDRed_9595CarObjects3.length = 0;
gdjs.Main_32MenuCode.GDBlue_9595CarObjects1.length = 0;
gdjs.Main_32MenuCode.GDBlue_9595CarObjects2.length = 0;
gdjs.Main_32MenuCode.GDBlue_9595CarObjects3.length = 0;
gdjs.Main_32MenuCode.GDGreen_9595CarObjects1.length = 0;
gdjs.Main_32MenuCode.GDGreen_9595CarObjects2.length = 0;
gdjs.Main_32MenuCode.GDGreen_9595CarObjects3.length = 0;
gdjs.Main_32MenuCode.GDCatObjects1.length = 0;
gdjs.Main_32MenuCode.GDCatObjects2.length = 0;
gdjs.Main_32MenuCode.GDCatObjects3.length = 0;
gdjs.Main_32MenuCode.GDBonkObjects1.length = 0;
gdjs.Main_32MenuCode.GDBonkObjects2.length = 0;
gdjs.Main_32MenuCode.GDBonkObjects3.length = 0;
gdjs.Main_32MenuCode.GDDogeObjects1.length = 0;
gdjs.Main_32MenuCode.GDDogeObjects2.length = 0;
gdjs.Main_32MenuCode.GDDogeObjects3.length = 0;
gdjs.Main_32MenuCode.GDPepeObjects1.length = 0;
gdjs.Main_32MenuCode.GDPepeObjects2.length = 0;
gdjs.Main_32MenuCode.GDPepeObjects3.length = 0;
gdjs.Main_32MenuCode.GDShibaObjects1.length = 0;
gdjs.Main_32MenuCode.GDShibaObjects2.length = 0;
gdjs.Main_32MenuCode.GDShibaObjects3.length = 0;

gdjs.Main_32MenuCode.eventsList7(runtimeScene);

return;

}

gdjs['Main_32MenuCode'] = gdjs.Main_32MenuCode;
