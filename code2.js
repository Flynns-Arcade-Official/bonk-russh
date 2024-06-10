gdjs.Select_32Car_32MenuCode = {};
gdjs.Select_32Car_32MenuCode.GDMenuObjects1= [];
gdjs.Select_32Car_32MenuCode.GDMenuObjects2= [];
gdjs.Select_32Car_32MenuCode.GDMenuObjects3= [];
gdjs.Select_32Car_32MenuCode.GDDoge_9595NameObjects1= [];
gdjs.Select_32Car_32MenuCode.GDDoge_9595NameObjects2= [];
gdjs.Select_32Car_32MenuCode.GDDoge_9595NameObjects3= [];
gdjs.Select_32Car_32MenuCode.GDBonk_9595NameObjects1= [];
gdjs.Select_32Car_32MenuCode.GDBonk_9595NameObjects2= [];
gdjs.Select_32Car_32MenuCode.GDBonk_9595NameObjects3= [];
gdjs.Select_32Car_32MenuCode.GDSelectorObjects1= [];
gdjs.Select_32Car_32MenuCode.GDSelectorObjects2= [];
gdjs.Select_32Car_32MenuCode.GDSelectorObjects3= [];
gdjs.Select_32Car_32MenuCode.GDCenterPointObjects1= [];
gdjs.Select_32Car_32MenuCode.GDCenterPointObjects2= [];
gdjs.Select_32Car_32MenuCode.GDCenterPointObjects3= [];
gdjs.Select_32Car_32MenuCode.GDPepe_9595NameObjects1= [];
gdjs.Select_32Car_32MenuCode.GDPepe_9595NameObjects2= [];
gdjs.Select_32Car_32MenuCode.GDPepe_9595NameObjects3= [];
gdjs.Select_32Car_32MenuCode.GDBackgroundMountain1Objects1= [];
gdjs.Select_32Car_32MenuCode.GDBackgroundMountain1Objects2= [];
gdjs.Select_32Car_32MenuCode.GDBackgroundMountain1Objects3= [];
gdjs.Select_32Car_32MenuCode.GDBackButtonObjects1= [];
gdjs.Select_32Car_32MenuCode.GDBackButtonObjects2= [];
gdjs.Select_32Car_32MenuCode.GDBackButtonObjects3= [];
gdjs.Select_32Car_32MenuCode.GDShiba_9595NameObjects1= [];
gdjs.Select_32Car_32MenuCode.GDShiba_9595NameObjects2= [];
gdjs.Select_32Car_32MenuCode.GDShiba_9595NameObjects3= [];
gdjs.Select_32Car_32MenuCode.GDPreButtonObjects1= [];
gdjs.Select_32Car_32MenuCode.GDPreButtonObjects2= [];
gdjs.Select_32Car_32MenuCode.GDPreButtonObjects3= [];
gdjs.Select_32Car_32MenuCode.GDNextButtonObjects1= [];
gdjs.Select_32Car_32MenuCode.GDNextButtonObjects2= [];
gdjs.Select_32Car_32MenuCode.GDNextButtonObjects3= [];
gdjs.Select_32Car_32MenuCode.GDNewSpriteObjects1= [];
gdjs.Select_32Car_32MenuCode.GDNewSpriteObjects2= [];
gdjs.Select_32Car_32MenuCode.GDNewSpriteObjects3= [];
gdjs.Select_32Car_32MenuCode.GDNewSprite2Objects1= [];
gdjs.Select_32Car_32MenuCode.GDNewSprite2Objects2= [];
gdjs.Select_32Car_32MenuCode.GDNewSprite2Objects3= [];
gdjs.Select_32Car_32MenuCode.GDShibaChooseFrameObjects1= [];
gdjs.Select_32Car_32MenuCode.GDShibaChooseFrameObjects2= [];
gdjs.Select_32Car_32MenuCode.GDShibaChooseFrameObjects3= [];
gdjs.Select_32Car_32MenuCode.GDPepeChooseFrameObjects1= [];
gdjs.Select_32Car_32MenuCode.GDPepeChooseFrameObjects2= [];
gdjs.Select_32Car_32MenuCode.GDPepeChooseFrameObjects3= [];
gdjs.Select_32Car_32MenuCode.GDDogeChooseFrameObjects1= [];
gdjs.Select_32Car_32MenuCode.GDDogeChooseFrameObjects2= [];
gdjs.Select_32Car_32MenuCode.GDDogeChooseFrameObjects3= [];
gdjs.Select_32Car_32MenuCode.GDBonkChooseFrameObjects1= [];
gdjs.Select_32Car_32MenuCode.GDBonkChooseFrameObjects2= [];
gdjs.Select_32Car_32MenuCode.GDBonkChooseFrameObjects3= [];
gdjs.Select_32Car_32MenuCode.GDPlayButtonObjects1= [];
gdjs.Select_32Car_32MenuCode.GDPlayButtonObjects2= [];
gdjs.Select_32Car_32MenuCode.GDPlayButtonObjects3= [];
gdjs.Select_32Car_32MenuCode.GDRed_9595CarObjects1= [];
gdjs.Select_32Car_32MenuCode.GDRed_9595CarObjects2= [];
gdjs.Select_32Car_32MenuCode.GDRed_9595CarObjects3= [];
gdjs.Select_32Car_32MenuCode.GDBlue_9595CarObjects1= [];
gdjs.Select_32Car_32MenuCode.GDBlue_9595CarObjects2= [];
gdjs.Select_32Car_32MenuCode.GDBlue_9595CarObjects3= [];
gdjs.Select_32Car_32MenuCode.GDGreen_9595CarObjects1= [];
gdjs.Select_32Car_32MenuCode.GDGreen_9595CarObjects2= [];
gdjs.Select_32Car_32MenuCode.GDGreen_9595CarObjects3= [];
gdjs.Select_32Car_32MenuCode.GDCatObjects1= [];
gdjs.Select_32Car_32MenuCode.GDCatObjects2= [];
gdjs.Select_32Car_32MenuCode.GDCatObjects3= [];
gdjs.Select_32Car_32MenuCode.GDBonkObjects1= [];
gdjs.Select_32Car_32MenuCode.GDBonkObjects2= [];
gdjs.Select_32Car_32MenuCode.GDBonkObjects3= [];
gdjs.Select_32Car_32MenuCode.GDDogeObjects1= [];
gdjs.Select_32Car_32MenuCode.GDDogeObjects2= [];
gdjs.Select_32Car_32MenuCode.GDDogeObjects3= [];
gdjs.Select_32Car_32MenuCode.GDPepeObjects1= [];
gdjs.Select_32Car_32MenuCode.GDPepeObjects2= [];
gdjs.Select_32Car_32MenuCode.GDPepeObjects3= [];
gdjs.Select_32Car_32MenuCode.GDShibaObjects1= [];
gdjs.Select_32Car_32MenuCode.GDShibaObjects2= [];
gdjs.Select_32Car_32MenuCode.GDShibaObjects3= [];


gdjs.Select_32Car_32MenuCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 0;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BonkChooseFrame"), gdjs.Select_32Car_32MenuCode.GDBonkChooseFrameObjects2);
{for(var i = 0, len = gdjs.Select_32Car_32MenuCode.GDBonkChooseFrameObjects2.length ;i < len;++i) {
    gdjs.Select_32Car_32MenuCode.GDBonkChooseFrameObjects2[i].getBehavior("Animation").setAnimationName("Press");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 1;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("DogeChooseFrame"), gdjs.Select_32Car_32MenuCode.GDDogeChooseFrameObjects2);
{for(var i = 0, len = gdjs.Select_32Car_32MenuCode.GDDogeChooseFrameObjects2.length ;i < len;++i) {
    gdjs.Select_32Car_32MenuCode.GDDogeChooseFrameObjects2[i].getBehavior("Animation").setAnimationName("Press");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 2;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PepeChooseFrame"), gdjs.Select_32Car_32MenuCode.GDPepeChooseFrameObjects2);
{for(var i = 0, len = gdjs.Select_32Car_32MenuCode.GDPepeChooseFrameObjects2.length ;i < len;++i) {
    gdjs.Select_32Car_32MenuCode.GDPepeChooseFrameObjects2[i].getBehavior("Animation").setAnimationName("Press");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 3;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ShibaChooseFrame"), gdjs.Select_32Car_32MenuCode.GDShibaChooseFrameObjects1);
{for(var i = 0, len = gdjs.Select_32Car_32MenuCode.GDShibaChooseFrameObjects1.length ;i < len;++i) {
    gdjs.Select_32Car_32MenuCode.GDShibaChooseFrameObjects1[i].getBehavior("Animation").setAnimationName("Press");
}
}}

}


};gdjs.Select_32Car_32MenuCode.mapOfGDgdjs_9546Select_959532Car_959532MenuCode_9546GDBackButtonObjects1Objects = Hashtable.newFrom({"BackButton": gdjs.Select_32Car_32MenuCode.GDBackButtonObjects1});
gdjs.Select_32Car_32MenuCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("ShibaChooseFrame"), gdjs.Select_32Car_32MenuCode.GDShibaChooseFrameObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Select_32Car_32MenuCode.GDShibaChooseFrameObjects2.length;i<l;++i) {
    if ( gdjs.Select_32Car_32MenuCode.GDShibaChooseFrameObjects2[i].getBehavior("ButtonFSM").IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Select_32Car_32MenuCode.GDShibaChooseFrameObjects2[k] = gdjs.Select_32Car_32MenuCode.GDShibaChooseFrameObjects2[i];
        ++k;
    }
}
gdjs.Select_32Car_32MenuCode.GDShibaChooseFrameObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Select_32Car_32MenuCode.GDShibaChooseFrameObjects2.length;i<l;++i) {
    if ( !(gdjs.Select_32Car_32MenuCode.GDShibaChooseFrameObjects2[i].getBehavior("Animation").getAnimationName() == "Press") ) {
        isConditionTrue_0 = true;
        gdjs.Select_32Car_32MenuCode.GDShibaChooseFrameObjects2[k] = gdjs.Select_32Car_32MenuCode.GDShibaChooseFrameObjects2[i];
        ++k;
    }
}
gdjs.Select_32Car_32MenuCode.GDShibaChooseFrameObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Select_32Car_32MenuCode.GDShibaChooseFrameObjects2 */
{for(var i = 0, len = gdjs.Select_32Car_32MenuCode.GDShibaChooseFrameObjects2.length ;i < len;++i) {
    gdjs.Select_32Car_32MenuCode.GDShibaChooseFrameObjects2[i].getBehavior("Animation").setAnimationName("Hover");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ShibaChooseFrame"), gdjs.Select_32Car_32MenuCode.GDShibaChooseFrameObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Select_32Car_32MenuCode.GDShibaChooseFrameObjects2.length;i<l;++i) {
    if ( !(gdjs.Select_32Car_32MenuCode.GDShibaChooseFrameObjects2[i].getBehavior("ButtonFSM").IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.Select_32Car_32MenuCode.GDShibaChooseFrameObjects2[k] = gdjs.Select_32Car_32MenuCode.GDShibaChooseFrameObjects2[i];
        ++k;
    }
}
gdjs.Select_32Car_32MenuCode.GDShibaChooseFrameObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Select_32Car_32MenuCode.GDShibaChooseFrameObjects2.length;i<l;++i) {
    if ( !(gdjs.Select_32Car_32MenuCode.GDShibaChooseFrameObjects2[i].getBehavior("Animation").getAnimationName() == "Press") ) {
        isConditionTrue_0 = true;
        gdjs.Select_32Car_32MenuCode.GDShibaChooseFrameObjects2[k] = gdjs.Select_32Car_32MenuCode.GDShibaChooseFrameObjects2[i];
        ++k;
    }
}
gdjs.Select_32Car_32MenuCode.GDShibaChooseFrameObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Select_32Car_32MenuCode.GDShibaChooseFrameObjects2 */
{for(var i = 0, len = gdjs.Select_32Car_32MenuCode.GDShibaChooseFrameObjects2.length ;i < len;++i) {
    gdjs.Select_32Car_32MenuCode.GDShibaChooseFrameObjects2[i].getBehavior("Animation").setAnimationName("Idle");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ShibaChooseFrame"), gdjs.Select_32Car_32MenuCode.GDShibaChooseFrameObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Select_32Car_32MenuCode.GDShibaChooseFrameObjects1.length;i<l;++i) {
    if ( gdjs.Select_32Car_32MenuCode.GDShibaChooseFrameObjects1[i].getBehavior("ButtonFSM").IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Select_32Car_32MenuCode.GDShibaChooseFrameObjects1[k] = gdjs.Select_32Car_32MenuCode.GDShibaChooseFrameObjects1[i];
        ++k;
    }
}
gdjs.Select_32Car_32MenuCode.GDShibaChooseFrameObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BonkChooseFrame"), gdjs.Select_32Car_32MenuCode.GDBonkChooseFrameObjects1);
gdjs.copyArray(runtimeScene.getObjects("DogeChooseFrame"), gdjs.Select_32Car_32MenuCode.GDDogeChooseFrameObjects1);
gdjs.copyArray(runtimeScene.getObjects("PepeChooseFrame"), gdjs.Select_32Car_32MenuCode.GDPepeChooseFrameObjects1);
/* Reuse gdjs.Select_32Car_32MenuCode.GDShibaChooseFrameObjects1 */
{for(var i = 0, len = gdjs.Select_32Car_32MenuCode.GDShibaChooseFrameObjects1.length ;i < len;++i) {
    gdjs.Select_32Car_32MenuCode.GDShibaChooseFrameObjects1[i].getBehavior("Animation").setAnimationName("Press");
}
}{for(var i = 0, len = gdjs.Select_32Car_32MenuCode.GDPepeChooseFrameObjects1.length ;i < len;++i) {
    gdjs.Select_32Car_32MenuCode.GDPepeChooseFrameObjects1[i].getBehavior("Animation").setAnimationName("Idle");
}
}{for(var i = 0, len = gdjs.Select_32Car_32MenuCode.GDDogeChooseFrameObjects1.length ;i < len;++i) {
    gdjs.Select_32Car_32MenuCode.GDDogeChooseFrameObjects1[i].getBehavior("Animation").setAnimationName("Idle");
}
}{for(var i = 0, len = gdjs.Select_32Car_32MenuCode.GDBonkChooseFrameObjects1.length ;i < len;++i) {
    gdjs.Select_32Car_32MenuCode.GDBonkChooseFrameObjects1[i].getBehavior("Animation").setAnimationName("Idle");
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(3);
}}

}


};gdjs.Select_32Car_32MenuCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("PepeChooseFrame"), gdjs.Select_32Car_32MenuCode.GDPepeChooseFrameObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Select_32Car_32MenuCode.GDPepeChooseFrameObjects2.length;i<l;++i) {
    if ( gdjs.Select_32Car_32MenuCode.GDPepeChooseFrameObjects2[i].getBehavior("ButtonFSM").IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Select_32Car_32MenuCode.GDPepeChooseFrameObjects2[k] = gdjs.Select_32Car_32MenuCode.GDPepeChooseFrameObjects2[i];
        ++k;
    }
}
gdjs.Select_32Car_32MenuCode.GDPepeChooseFrameObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Select_32Car_32MenuCode.GDPepeChooseFrameObjects2.length;i<l;++i) {
    if ( !(gdjs.Select_32Car_32MenuCode.GDPepeChooseFrameObjects2[i].getBehavior("Animation").getAnimationName() == "Press") ) {
        isConditionTrue_0 = true;
        gdjs.Select_32Car_32MenuCode.GDPepeChooseFrameObjects2[k] = gdjs.Select_32Car_32MenuCode.GDPepeChooseFrameObjects2[i];
        ++k;
    }
}
gdjs.Select_32Car_32MenuCode.GDPepeChooseFrameObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Select_32Car_32MenuCode.GDPepeChooseFrameObjects2 */
{for(var i = 0, len = gdjs.Select_32Car_32MenuCode.GDPepeChooseFrameObjects2.length ;i < len;++i) {
    gdjs.Select_32Car_32MenuCode.GDPepeChooseFrameObjects2[i].getBehavior("Animation").setAnimationName("Hover");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PepeChooseFrame"), gdjs.Select_32Car_32MenuCode.GDPepeChooseFrameObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Select_32Car_32MenuCode.GDPepeChooseFrameObjects2.length;i<l;++i) {
    if ( !(gdjs.Select_32Car_32MenuCode.GDPepeChooseFrameObjects2[i].getBehavior("ButtonFSM").IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.Select_32Car_32MenuCode.GDPepeChooseFrameObjects2[k] = gdjs.Select_32Car_32MenuCode.GDPepeChooseFrameObjects2[i];
        ++k;
    }
}
gdjs.Select_32Car_32MenuCode.GDPepeChooseFrameObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Select_32Car_32MenuCode.GDPepeChooseFrameObjects2.length;i<l;++i) {
    if ( !(gdjs.Select_32Car_32MenuCode.GDPepeChooseFrameObjects2[i].getBehavior("Animation").getAnimationName() == "Press") ) {
        isConditionTrue_0 = true;
        gdjs.Select_32Car_32MenuCode.GDPepeChooseFrameObjects2[k] = gdjs.Select_32Car_32MenuCode.GDPepeChooseFrameObjects2[i];
        ++k;
    }
}
gdjs.Select_32Car_32MenuCode.GDPepeChooseFrameObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Select_32Car_32MenuCode.GDPepeChooseFrameObjects2 */
{for(var i = 0, len = gdjs.Select_32Car_32MenuCode.GDPepeChooseFrameObjects2.length ;i < len;++i) {
    gdjs.Select_32Car_32MenuCode.GDPepeChooseFrameObjects2[i].getBehavior("Animation").setAnimationName("Idle");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PepeChooseFrame"), gdjs.Select_32Car_32MenuCode.GDPepeChooseFrameObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Select_32Car_32MenuCode.GDPepeChooseFrameObjects1.length;i<l;++i) {
    if ( gdjs.Select_32Car_32MenuCode.GDPepeChooseFrameObjects1[i].getBehavior("ButtonFSM").IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Select_32Car_32MenuCode.GDPepeChooseFrameObjects1[k] = gdjs.Select_32Car_32MenuCode.GDPepeChooseFrameObjects1[i];
        ++k;
    }
}
gdjs.Select_32Car_32MenuCode.GDPepeChooseFrameObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BonkChooseFrame"), gdjs.Select_32Car_32MenuCode.GDBonkChooseFrameObjects1);
gdjs.copyArray(runtimeScene.getObjects("DogeChooseFrame"), gdjs.Select_32Car_32MenuCode.GDDogeChooseFrameObjects1);
/* Reuse gdjs.Select_32Car_32MenuCode.GDPepeChooseFrameObjects1 */
gdjs.copyArray(runtimeScene.getObjects("ShibaChooseFrame"), gdjs.Select_32Car_32MenuCode.GDShibaChooseFrameObjects1);
{for(var i = 0, len = gdjs.Select_32Car_32MenuCode.GDPepeChooseFrameObjects1.length ;i < len;++i) {
    gdjs.Select_32Car_32MenuCode.GDPepeChooseFrameObjects1[i].getBehavior("Animation").setAnimationName("Press");
}
}{for(var i = 0, len = gdjs.Select_32Car_32MenuCode.GDShibaChooseFrameObjects1.length ;i < len;++i) {
    gdjs.Select_32Car_32MenuCode.GDShibaChooseFrameObjects1[i].getBehavior("Animation").setAnimationName("Idle");
}
}{for(var i = 0, len = gdjs.Select_32Car_32MenuCode.GDDogeChooseFrameObjects1.length ;i < len;++i) {
    gdjs.Select_32Car_32MenuCode.GDDogeChooseFrameObjects1[i].getBehavior("Animation").setAnimationName("Idle");
}
}{for(var i = 0, len = gdjs.Select_32Car_32MenuCode.GDBonkChooseFrameObjects1.length ;i < len;++i) {
    gdjs.Select_32Car_32MenuCode.GDBonkChooseFrameObjects1[i].getBehavior("Animation").setAnimationName("Idle");
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(2);
}}

}


};gdjs.Select_32Car_32MenuCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("DogeChooseFrame"), gdjs.Select_32Car_32MenuCode.GDDogeChooseFrameObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Select_32Car_32MenuCode.GDDogeChooseFrameObjects2.length;i<l;++i) {
    if ( !(gdjs.Select_32Car_32MenuCode.GDDogeChooseFrameObjects2[i].getBehavior("ButtonFSM").IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.Select_32Car_32MenuCode.GDDogeChooseFrameObjects2[k] = gdjs.Select_32Car_32MenuCode.GDDogeChooseFrameObjects2[i];
        ++k;
    }
}
gdjs.Select_32Car_32MenuCode.GDDogeChooseFrameObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Select_32Car_32MenuCode.GDDogeChooseFrameObjects2.length;i<l;++i) {
    if ( !(gdjs.Select_32Car_32MenuCode.GDDogeChooseFrameObjects2[i].getBehavior("Animation").getAnimationName() == "Press") ) {
        isConditionTrue_0 = true;
        gdjs.Select_32Car_32MenuCode.GDDogeChooseFrameObjects2[k] = gdjs.Select_32Car_32MenuCode.GDDogeChooseFrameObjects2[i];
        ++k;
    }
}
gdjs.Select_32Car_32MenuCode.GDDogeChooseFrameObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Select_32Car_32MenuCode.GDDogeChooseFrameObjects2 */
{for(var i = 0, len = gdjs.Select_32Car_32MenuCode.GDDogeChooseFrameObjects2.length ;i < len;++i) {
    gdjs.Select_32Car_32MenuCode.GDDogeChooseFrameObjects2[i].getBehavior("Animation").setAnimationName("Idle");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("DogeChooseFrame"), gdjs.Select_32Car_32MenuCode.GDDogeChooseFrameObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Select_32Car_32MenuCode.GDDogeChooseFrameObjects2.length;i<l;++i) {
    if ( gdjs.Select_32Car_32MenuCode.GDDogeChooseFrameObjects2[i].getBehavior("ButtonFSM").IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Select_32Car_32MenuCode.GDDogeChooseFrameObjects2[k] = gdjs.Select_32Car_32MenuCode.GDDogeChooseFrameObjects2[i];
        ++k;
    }
}
gdjs.Select_32Car_32MenuCode.GDDogeChooseFrameObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Select_32Car_32MenuCode.GDDogeChooseFrameObjects2.length;i<l;++i) {
    if ( !(gdjs.Select_32Car_32MenuCode.GDDogeChooseFrameObjects2[i].getBehavior("Animation").getAnimationName() == "Press") ) {
        isConditionTrue_0 = true;
        gdjs.Select_32Car_32MenuCode.GDDogeChooseFrameObjects2[k] = gdjs.Select_32Car_32MenuCode.GDDogeChooseFrameObjects2[i];
        ++k;
    }
}
gdjs.Select_32Car_32MenuCode.GDDogeChooseFrameObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Select_32Car_32MenuCode.GDDogeChooseFrameObjects2 */
{for(var i = 0, len = gdjs.Select_32Car_32MenuCode.GDDogeChooseFrameObjects2.length ;i < len;++i) {
    gdjs.Select_32Car_32MenuCode.GDDogeChooseFrameObjects2[i].getBehavior("Animation").setAnimationName("Hover");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("DogeChooseFrame"), gdjs.Select_32Car_32MenuCode.GDDogeChooseFrameObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Select_32Car_32MenuCode.GDDogeChooseFrameObjects1.length;i<l;++i) {
    if ( gdjs.Select_32Car_32MenuCode.GDDogeChooseFrameObjects1[i].getBehavior("ButtonFSM").IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Select_32Car_32MenuCode.GDDogeChooseFrameObjects1[k] = gdjs.Select_32Car_32MenuCode.GDDogeChooseFrameObjects1[i];
        ++k;
    }
}
gdjs.Select_32Car_32MenuCode.GDDogeChooseFrameObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BonkChooseFrame"), gdjs.Select_32Car_32MenuCode.GDBonkChooseFrameObjects1);
/* Reuse gdjs.Select_32Car_32MenuCode.GDDogeChooseFrameObjects1 */
gdjs.copyArray(runtimeScene.getObjects("PepeChooseFrame"), gdjs.Select_32Car_32MenuCode.GDPepeChooseFrameObjects1);
gdjs.copyArray(runtimeScene.getObjects("ShibaChooseFrame"), gdjs.Select_32Car_32MenuCode.GDShibaChooseFrameObjects1);
{for(var i = 0, len = gdjs.Select_32Car_32MenuCode.GDDogeChooseFrameObjects1.length ;i < len;++i) {
    gdjs.Select_32Car_32MenuCode.GDDogeChooseFrameObjects1[i].getBehavior("Animation").setAnimationName("Press");
}
}{for(var i = 0, len = gdjs.Select_32Car_32MenuCode.GDShibaChooseFrameObjects1.length ;i < len;++i) {
    gdjs.Select_32Car_32MenuCode.GDShibaChooseFrameObjects1[i].getBehavior("Animation").setAnimationName("Idle");
}
}{for(var i = 0, len = gdjs.Select_32Car_32MenuCode.GDPepeChooseFrameObjects1.length ;i < len;++i) {
    gdjs.Select_32Car_32MenuCode.GDPepeChooseFrameObjects1[i].getBehavior("Animation").setAnimationName("Idle");
}
}{for(var i = 0, len = gdjs.Select_32Car_32MenuCode.GDBonkChooseFrameObjects1.length ;i < len;++i) {
    gdjs.Select_32Car_32MenuCode.GDBonkChooseFrameObjects1[i].getBehavior("Animation").setAnimationName("Idle");
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(1);
}}

}


};gdjs.Select_32Car_32MenuCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BonkChooseFrame"), gdjs.Select_32Car_32MenuCode.GDBonkChooseFrameObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Select_32Car_32MenuCode.GDBonkChooseFrameObjects2.length;i<l;++i) {
    if ( !(gdjs.Select_32Car_32MenuCode.GDBonkChooseFrameObjects2[i].getBehavior("ButtonFSM").IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.Select_32Car_32MenuCode.GDBonkChooseFrameObjects2[k] = gdjs.Select_32Car_32MenuCode.GDBonkChooseFrameObjects2[i];
        ++k;
    }
}
gdjs.Select_32Car_32MenuCode.GDBonkChooseFrameObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Select_32Car_32MenuCode.GDBonkChooseFrameObjects2.length;i<l;++i) {
    if ( !(gdjs.Select_32Car_32MenuCode.GDBonkChooseFrameObjects2[i].getBehavior("Animation").getAnimationName() == "Press") ) {
        isConditionTrue_0 = true;
        gdjs.Select_32Car_32MenuCode.GDBonkChooseFrameObjects2[k] = gdjs.Select_32Car_32MenuCode.GDBonkChooseFrameObjects2[i];
        ++k;
    }
}
gdjs.Select_32Car_32MenuCode.GDBonkChooseFrameObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Select_32Car_32MenuCode.GDBonkChooseFrameObjects2 */
{for(var i = 0, len = gdjs.Select_32Car_32MenuCode.GDBonkChooseFrameObjects2.length ;i < len;++i) {
    gdjs.Select_32Car_32MenuCode.GDBonkChooseFrameObjects2[i].getBehavior("Animation").setAnimationName("Idle");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BonkChooseFrame"), gdjs.Select_32Car_32MenuCode.GDBonkChooseFrameObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Select_32Car_32MenuCode.GDBonkChooseFrameObjects2.length;i<l;++i) {
    if ( gdjs.Select_32Car_32MenuCode.GDBonkChooseFrameObjects2[i].getBehavior("ButtonFSM").IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Select_32Car_32MenuCode.GDBonkChooseFrameObjects2[k] = gdjs.Select_32Car_32MenuCode.GDBonkChooseFrameObjects2[i];
        ++k;
    }
}
gdjs.Select_32Car_32MenuCode.GDBonkChooseFrameObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Select_32Car_32MenuCode.GDBonkChooseFrameObjects2.length;i<l;++i) {
    if ( !(gdjs.Select_32Car_32MenuCode.GDBonkChooseFrameObjects2[i].getBehavior("Animation").getAnimationName() == "Press") ) {
        isConditionTrue_0 = true;
        gdjs.Select_32Car_32MenuCode.GDBonkChooseFrameObjects2[k] = gdjs.Select_32Car_32MenuCode.GDBonkChooseFrameObjects2[i];
        ++k;
    }
}
gdjs.Select_32Car_32MenuCode.GDBonkChooseFrameObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Select_32Car_32MenuCode.GDBonkChooseFrameObjects2 */
{for(var i = 0, len = gdjs.Select_32Car_32MenuCode.GDBonkChooseFrameObjects2.length ;i < len;++i) {
    gdjs.Select_32Car_32MenuCode.GDBonkChooseFrameObjects2[i].getBehavior("Animation").setAnimationName("Hover");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BonkChooseFrame"), gdjs.Select_32Car_32MenuCode.GDBonkChooseFrameObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Select_32Car_32MenuCode.GDBonkChooseFrameObjects1.length;i<l;++i) {
    if ( gdjs.Select_32Car_32MenuCode.GDBonkChooseFrameObjects1[i].getBehavior("ButtonFSM").IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Select_32Car_32MenuCode.GDBonkChooseFrameObjects1[k] = gdjs.Select_32Car_32MenuCode.GDBonkChooseFrameObjects1[i];
        ++k;
    }
}
gdjs.Select_32Car_32MenuCode.GDBonkChooseFrameObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Select_32Car_32MenuCode.GDBonkChooseFrameObjects1 */
gdjs.copyArray(runtimeScene.getObjects("DogeChooseFrame"), gdjs.Select_32Car_32MenuCode.GDDogeChooseFrameObjects1);
gdjs.copyArray(runtimeScene.getObjects("PepeChooseFrame"), gdjs.Select_32Car_32MenuCode.GDPepeChooseFrameObjects1);
gdjs.copyArray(runtimeScene.getObjects("ShibaChooseFrame"), gdjs.Select_32Car_32MenuCode.GDShibaChooseFrameObjects1);
{for(var i = 0, len = gdjs.Select_32Car_32MenuCode.GDBonkChooseFrameObjects1.length ;i < len;++i) {
    gdjs.Select_32Car_32MenuCode.GDBonkChooseFrameObjects1[i].getBehavior("Animation").setAnimationName("Press");
}
}{for(var i = 0, len = gdjs.Select_32Car_32MenuCode.GDShibaChooseFrameObjects1.length ;i < len;++i) {
    gdjs.Select_32Car_32MenuCode.GDShibaChooseFrameObjects1[i].getBehavior("Animation").setAnimationName("Idle");
}
}{for(var i = 0, len = gdjs.Select_32Car_32MenuCode.GDPepeChooseFrameObjects1.length ;i < len;++i) {
    gdjs.Select_32Car_32MenuCode.GDPepeChooseFrameObjects1[i].getBehavior("Animation").setAnimationName("Idle");
}
}{for(var i = 0, len = gdjs.Select_32Car_32MenuCode.GDDogeChooseFrameObjects1.length ;i < len;++i) {
    gdjs.Select_32Car_32MenuCode.GDDogeChooseFrameObjects1[i].getBehavior("Animation").setAnimationName("Idle");
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}}

}


};gdjs.Select_32Car_32MenuCode.userFunc0x103a6b8 = function GDJSInlineCode(runtimeScene) {
"use strict";
document.getElementById("sendTransaction").click();

};
gdjs.Select_32Car_32MenuCode.eventsList5 = function(runtimeScene) {

{


gdjs.Select_32Car_32MenuCode.userFunc0x103a6b8(runtimeScene);

}


};gdjs.Select_32Car_32MenuCode.userFunc0x8afa70 = function GDJSInlineCode(runtimeScene) {
"use strict";
if(runtimeScene.getGame().getVariables().get("WalletAddress").getAsString() == "empty")
{
    document.getElementById("connectBtn").click();
}

};
gdjs.Select_32Car_32MenuCode.eventsList6 = function(runtimeScene) {

{


gdjs.Select_32Car_32MenuCode.userFunc0x8afa70(runtimeScene);

}


};gdjs.Select_32Car_32MenuCode.eventsList7 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("PlayButton"), gdjs.Select_32Car_32MenuCode.GDPlayButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Select_32Car_32MenuCode.GDPlayButtonObjects2.length;i<l;++i) {
    if ( gdjs.Select_32Car_32MenuCode.GDPlayButtonObjects2[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Select_32Car_32MenuCode.GDPlayButtonObjects2[k] = gdjs.Select_32Car_32MenuCode.GDPlayButtonObjects2[i];
        ++k;
    }
}
gdjs.Select_32Car_32MenuCode.GDPlayButtonObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)) == "empty");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Select_32Car_32MenuCode.GDPlayButtonObjects2.length;i<l;++i) {
    if ( gdjs.Select_32Car_32MenuCode.GDPlayButtonObjects2[i].IsActivated((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Select_32Car_32MenuCode.GDPlayButtonObjects2[k] = gdjs.Select_32Car_32MenuCode.GDPlayButtonObjects2[i];
        ++k;
    }
}
gdjs.Select_32Car_32MenuCode.GDPlayButtonObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16748132);
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Select_32Car_32MenuCode.GDPlayButtonObjects2 */
{for(var i = 0, len = gdjs.Select_32Car_32MenuCode.GDPlayButtonObjects2.length ;i < len;++i) {
    gdjs.Select_32Car_32MenuCode.GDPlayButtonObjects2[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(4), false);
}
{ //Subevents
gdjs.Select_32Car_32MenuCode.eventsList5(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayButton"), gdjs.Select_32Car_32MenuCode.GDPlayButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Select_32Car_32MenuCode.GDPlayButtonObjects1.length;i<l;++i) {
    if ( gdjs.Select_32Car_32MenuCode.GDPlayButtonObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Select_32Car_32MenuCode.GDPlayButtonObjects1[k] = gdjs.Select_32Car_32MenuCode.GDPlayButtonObjects1[i];
        ++k;
    }
}
gdjs.Select_32Car_32MenuCode.GDPlayButtonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)) == "empty";
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16749652);
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Select_32Car_32MenuCode.eventsList6(runtimeScene);} //End of subevents
}

}


};gdjs.Select_32Car_32MenuCode.eventsList8 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("CenterPoint"), gdjs.Select_32Car_32MenuCode.GDCenterPointObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.Select_32Car_32MenuCode.GDCenterPointObjects1.length !== 0 ? gdjs.Select_32Car_32MenuCode.GDCenterPointObjects1[0] : null), true, "", 0);
}
{ //Subevents
gdjs.Select_32Car_32MenuCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BackButton"), gdjs.Select_32Car_32MenuCode.GDBackButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Select_32Car_32MenuCode.mapOfGDgdjs_9546Select_959532Car_959532MenuCode_9546GDBackButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16726580);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Main Menu");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NextButton"), gdjs.Select_32Car_32MenuCode.GDNextButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Select_32Car_32MenuCode.GDNextButtonObjects1.length;i<l;++i) {
    if ( gdjs.Select_32Car_32MenuCode.GDNextButtonObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Select_32Car_32MenuCode.GDNextButtonObjects1[k] = gdjs.Select_32Car_32MenuCode.GDNextButtonObjects1[i];
        ++k;
    }
}
gdjs.Select_32Car_32MenuCode.GDNextButtonObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Bonk"), gdjs.Select_32Car_32MenuCode.GDBonkObjects1);
gdjs.copyArray(runtimeScene.getObjects("Bonk_Name"), gdjs.Select_32Car_32MenuCode.GDBonk_9595NameObjects1);
gdjs.copyArray(runtimeScene.getObjects("Doge"), gdjs.Select_32Car_32MenuCode.GDDogeObjects1);
gdjs.copyArray(runtimeScene.getObjects("Doge_Name"), gdjs.Select_32Car_32MenuCode.GDDoge_9595NameObjects1);
gdjs.copyArray(runtimeScene.getObjects("Pepe"), gdjs.Select_32Car_32MenuCode.GDPepeObjects1);
gdjs.copyArray(runtimeScene.getObjects("Pepe_Name"), gdjs.Select_32Car_32MenuCode.GDPepe_9595NameObjects1);
gdjs.copyArray(runtimeScene.getObjects("Selector"), gdjs.Select_32Car_32MenuCode.GDSelectorObjects1);
gdjs.copyArray(runtimeScene.getObjects("Shiba"), gdjs.Select_32Car_32MenuCode.GDShibaObjects1);
gdjs.copyArray(runtimeScene.getObjects("Shiba_Name"), gdjs.Select_32Car_32MenuCode.GDShiba_9595NameObjects1);
{for(var i = 0, len = gdjs.Select_32Car_32MenuCode.GDBonkObjects1.length ;i < len;++i) {
    gdjs.Select_32Car_32MenuCode.GDBonkObjects1[i].getBehavior("Tween").addObjectPositionXTween2("MoveCar", (gdjs.Select_32Car_32MenuCode.GDBonkObjects1[i].getPointX("")) - 440, "easeInOutQuart", 0.5, false);
}
for(var i = 0, len = gdjs.Select_32Car_32MenuCode.GDDogeObjects1.length ;i < len;++i) {
    gdjs.Select_32Car_32MenuCode.GDDogeObjects1[i].getBehavior("Tween").addObjectPositionXTween2("MoveCar", (gdjs.Select_32Car_32MenuCode.GDDogeObjects1[i].getPointX("")) - 440, "easeInOutQuart", 0.5, false);
}
for(var i = 0, len = gdjs.Select_32Car_32MenuCode.GDPepeObjects1.length ;i < len;++i) {
    gdjs.Select_32Car_32MenuCode.GDPepeObjects1[i].getBehavior("Tween").addObjectPositionXTween2("MoveCar", (gdjs.Select_32Car_32MenuCode.GDPepeObjects1[i].getPointX("")) - 440, "easeInOutQuart", 0.5, false);
}
for(var i = 0, len = gdjs.Select_32Car_32MenuCode.GDShibaObjects1.length ;i < len;++i) {
    gdjs.Select_32Car_32MenuCode.GDShibaObjects1[i].getBehavior("Tween").addObjectPositionXTween2("MoveCar", (gdjs.Select_32Car_32MenuCode.GDShibaObjects1[i].getPointX("")) - 440, "easeInOutQuart", 0.5, false);
}
}{for(var i = 0, len = gdjs.Select_32Car_32MenuCode.GDSelectorObjects1.length ;i < len;++i) {
    gdjs.Select_32Car_32MenuCode.GDSelectorObjects1[i].getBehavior("Tween").addObjectPositionXTween2("Selection", (gdjs.Select_32Car_32MenuCode.GDSelectorObjects1[i].getPointX("")) - 440, "easeInOutQuart", 0.5, false);
}
}{for(var i = 0, len = gdjs.Select_32Car_32MenuCode.GDBonk_9595NameObjects1.length ;i < len;++i) {
    gdjs.Select_32Car_32MenuCode.GDBonk_9595NameObjects1[i].getBehavior("Tween").addObjectPositionXTween2("MoveName", (gdjs.Select_32Car_32MenuCode.GDBonk_9595NameObjects1[i].getX()) - 440, "easeInOutQuart", 0.5, false);
}
for(var i = 0, len = gdjs.Select_32Car_32MenuCode.GDPepe_9595NameObjects1.length ;i < len;++i) {
    gdjs.Select_32Car_32MenuCode.GDPepe_9595NameObjects1[i].getBehavior("Tween").addObjectPositionXTween2("MoveName", (gdjs.Select_32Car_32MenuCode.GDPepe_9595NameObjects1[i].getX()) - 440, "easeInOutQuart", 0.5, false);
}
for(var i = 0, len = gdjs.Select_32Car_32MenuCode.GDDoge_9595NameObjects1.length ;i < len;++i) {
    gdjs.Select_32Car_32MenuCode.GDDoge_9595NameObjects1[i].getBehavior("Tween").addObjectPositionXTween2("MoveName", (gdjs.Select_32Car_32MenuCode.GDDoge_9595NameObjects1[i].getX()) - 440, "easeInOutQuart", 0.5, false);
}
for(var i = 0, len = gdjs.Select_32Car_32MenuCode.GDShiba_9595NameObjects1.length ;i < len;++i) {
    gdjs.Select_32Car_32MenuCode.GDShiba_9595NameObjects1[i].getBehavior("Tween").addObjectPositionXTween2("MoveName", (gdjs.Select_32Car_32MenuCode.GDShiba_9595NameObjects1[i].getX()) - 440, "easeInOutQuart", 0.5, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PreButton"), gdjs.Select_32Car_32MenuCode.GDPreButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Select_32Car_32MenuCode.GDPreButtonObjects1.length;i<l;++i) {
    if ( gdjs.Select_32Car_32MenuCode.GDPreButtonObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Select_32Car_32MenuCode.GDPreButtonObjects1[k] = gdjs.Select_32Car_32MenuCode.GDPreButtonObjects1[i];
        ++k;
    }
}
gdjs.Select_32Car_32MenuCode.GDPreButtonObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Bonk"), gdjs.Select_32Car_32MenuCode.GDBonkObjects1);
gdjs.copyArray(runtimeScene.getObjects("Bonk_Name"), gdjs.Select_32Car_32MenuCode.GDBonk_9595NameObjects1);
gdjs.copyArray(runtimeScene.getObjects("Doge"), gdjs.Select_32Car_32MenuCode.GDDogeObjects1);
gdjs.copyArray(runtimeScene.getObjects("Doge_Name"), gdjs.Select_32Car_32MenuCode.GDDoge_9595NameObjects1);
gdjs.copyArray(runtimeScene.getObjects("Pepe"), gdjs.Select_32Car_32MenuCode.GDPepeObjects1);
gdjs.copyArray(runtimeScene.getObjects("Pepe_Name"), gdjs.Select_32Car_32MenuCode.GDPepe_9595NameObjects1);
gdjs.copyArray(runtimeScene.getObjects("Selector"), gdjs.Select_32Car_32MenuCode.GDSelectorObjects1);
gdjs.copyArray(runtimeScene.getObjects("Shiba"), gdjs.Select_32Car_32MenuCode.GDShibaObjects1);
gdjs.copyArray(runtimeScene.getObjects("Shiba_Name"), gdjs.Select_32Car_32MenuCode.GDShiba_9595NameObjects1);
{for(var i = 0, len = gdjs.Select_32Car_32MenuCode.GDBonkObjects1.length ;i < len;++i) {
    gdjs.Select_32Car_32MenuCode.GDBonkObjects1[i].getBehavior("Tween").addObjectPositionXTween2("MoveCar", (gdjs.Select_32Car_32MenuCode.GDBonkObjects1[i].getPointX("")) + 440, "easeInOutQuart", 0.5, false);
}
for(var i = 0, len = gdjs.Select_32Car_32MenuCode.GDDogeObjects1.length ;i < len;++i) {
    gdjs.Select_32Car_32MenuCode.GDDogeObjects1[i].getBehavior("Tween").addObjectPositionXTween2("MoveCar", (gdjs.Select_32Car_32MenuCode.GDDogeObjects1[i].getPointX("")) + 440, "easeInOutQuart", 0.5, false);
}
for(var i = 0, len = gdjs.Select_32Car_32MenuCode.GDPepeObjects1.length ;i < len;++i) {
    gdjs.Select_32Car_32MenuCode.GDPepeObjects1[i].getBehavior("Tween").addObjectPositionXTween2("MoveCar", (gdjs.Select_32Car_32MenuCode.GDPepeObjects1[i].getPointX("")) + 440, "easeInOutQuart", 0.5, false);
}
for(var i = 0, len = gdjs.Select_32Car_32MenuCode.GDShibaObjects1.length ;i < len;++i) {
    gdjs.Select_32Car_32MenuCode.GDShibaObjects1[i].getBehavior("Tween").addObjectPositionXTween2("MoveCar", (gdjs.Select_32Car_32MenuCode.GDShibaObjects1[i].getPointX("")) + 440, "easeInOutQuart", 0.5, false);
}
}{for(var i = 0, len = gdjs.Select_32Car_32MenuCode.GDSelectorObjects1.length ;i < len;++i) {
    gdjs.Select_32Car_32MenuCode.GDSelectorObjects1[i].getBehavior("Tween").addObjectPositionXTween2("Selection", (gdjs.Select_32Car_32MenuCode.GDSelectorObjects1[i].getPointX("")) + 440, "easeInOutQuart", 0.5, false);
}
}{for(var i = 0, len = gdjs.Select_32Car_32MenuCode.GDBonk_9595NameObjects1.length ;i < len;++i) {
    gdjs.Select_32Car_32MenuCode.GDBonk_9595NameObjects1[i].getBehavior("Tween").addObjectPositionXTween2("MoveCar", (gdjs.Select_32Car_32MenuCode.GDBonk_9595NameObjects1[i].getX()) + 440, "easeInOutQuart", 0.5, false);
}
for(var i = 0, len = gdjs.Select_32Car_32MenuCode.GDPepe_9595NameObjects1.length ;i < len;++i) {
    gdjs.Select_32Car_32MenuCode.GDPepe_9595NameObjects1[i].getBehavior("Tween").addObjectPositionXTween2("MoveCar", (gdjs.Select_32Car_32MenuCode.GDPepe_9595NameObjects1[i].getX()) + 440, "easeInOutQuart", 0.5, false);
}
for(var i = 0, len = gdjs.Select_32Car_32MenuCode.GDDoge_9595NameObjects1.length ;i < len;++i) {
    gdjs.Select_32Car_32MenuCode.GDDoge_9595NameObjects1[i].getBehavior("Tween").addObjectPositionXTween2("MoveCar", (gdjs.Select_32Car_32MenuCode.GDDoge_9595NameObjects1[i].getX()) + 440, "easeInOutQuart", 0.5, false);
}
for(var i = 0, len = gdjs.Select_32Car_32MenuCode.GDShiba_9595NameObjects1.length ;i < len;++i) {
    gdjs.Select_32Car_32MenuCode.GDShiba_9595NameObjects1[i].getBehavior("Tween").addObjectPositionXTween2("MoveCar", (gdjs.Select_32Car_32MenuCode.GDShiba_9595NameObjects1[i].getX()) + 440, "easeInOutQuart", 0.5, false);
}
}}

}


{


gdjs.Select_32Car_32MenuCode.eventsList1(runtimeScene);
}


{


gdjs.Select_32Car_32MenuCode.eventsList2(runtimeScene);
}


{


gdjs.Select_32Car_32MenuCode.eventsList3(runtimeScene);
}


{


gdjs.Select_32Car_32MenuCode.eventsList4(runtimeScene);
}


{


gdjs.Select_32Car_32MenuCode.eventsList7(runtimeScene);
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


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(3), false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(4), true);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PlayButton"), gdjs.Select_32Car_32MenuCode.GDPlayButtonObjects1);
{for(var i = 0, len = gdjs.Select_32Car_32MenuCode.GDPlayButtonObjects1.length ;i < len;++i) {
    gdjs.Select_32Car_32MenuCode.GDPlayButtonObjects1[i].Activate(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.Select_32Car_32MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Select_32Car_32MenuCode.GDMenuObjects1.length = 0;
gdjs.Select_32Car_32MenuCode.GDMenuObjects2.length = 0;
gdjs.Select_32Car_32MenuCode.GDMenuObjects3.length = 0;
gdjs.Select_32Car_32MenuCode.GDDoge_9595NameObjects1.length = 0;
gdjs.Select_32Car_32MenuCode.GDDoge_9595NameObjects2.length = 0;
gdjs.Select_32Car_32MenuCode.GDDoge_9595NameObjects3.length = 0;
gdjs.Select_32Car_32MenuCode.GDBonk_9595NameObjects1.length = 0;
gdjs.Select_32Car_32MenuCode.GDBonk_9595NameObjects2.length = 0;
gdjs.Select_32Car_32MenuCode.GDBonk_9595NameObjects3.length = 0;
gdjs.Select_32Car_32MenuCode.GDSelectorObjects1.length = 0;
gdjs.Select_32Car_32MenuCode.GDSelectorObjects2.length = 0;
gdjs.Select_32Car_32MenuCode.GDSelectorObjects3.length = 0;
gdjs.Select_32Car_32MenuCode.GDCenterPointObjects1.length = 0;
gdjs.Select_32Car_32MenuCode.GDCenterPointObjects2.length = 0;
gdjs.Select_32Car_32MenuCode.GDCenterPointObjects3.length = 0;
gdjs.Select_32Car_32MenuCode.GDPepe_9595NameObjects1.length = 0;
gdjs.Select_32Car_32MenuCode.GDPepe_9595NameObjects2.length = 0;
gdjs.Select_32Car_32MenuCode.GDPepe_9595NameObjects3.length = 0;
gdjs.Select_32Car_32MenuCode.GDBackgroundMountain1Objects1.length = 0;
gdjs.Select_32Car_32MenuCode.GDBackgroundMountain1Objects2.length = 0;
gdjs.Select_32Car_32MenuCode.GDBackgroundMountain1Objects3.length = 0;
gdjs.Select_32Car_32MenuCode.GDBackButtonObjects1.length = 0;
gdjs.Select_32Car_32MenuCode.GDBackButtonObjects2.length = 0;
gdjs.Select_32Car_32MenuCode.GDBackButtonObjects3.length = 0;
gdjs.Select_32Car_32MenuCode.GDShiba_9595NameObjects1.length = 0;
gdjs.Select_32Car_32MenuCode.GDShiba_9595NameObjects2.length = 0;
gdjs.Select_32Car_32MenuCode.GDShiba_9595NameObjects3.length = 0;
gdjs.Select_32Car_32MenuCode.GDPreButtonObjects1.length = 0;
gdjs.Select_32Car_32MenuCode.GDPreButtonObjects2.length = 0;
gdjs.Select_32Car_32MenuCode.GDPreButtonObjects3.length = 0;
gdjs.Select_32Car_32MenuCode.GDNextButtonObjects1.length = 0;
gdjs.Select_32Car_32MenuCode.GDNextButtonObjects2.length = 0;
gdjs.Select_32Car_32MenuCode.GDNextButtonObjects3.length = 0;
gdjs.Select_32Car_32MenuCode.GDNewSpriteObjects1.length = 0;
gdjs.Select_32Car_32MenuCode.GDNewSpriteObjects2.length = 0;
gdjs.Select_32Car_32MenuCode.GDNewSpriteObjects3.length = 0;
gdjs.Select_32Car_32MenuCode.GDNewSprite2Objects1.length = 0;
gdjs.Select_32Car_32MenuCode.GDNewSprite2Objects2.length = 0;
gdjs.Select_32Car_32MenuCode.GDNewSprite2Objects3.length = 0;
gdjs.Select_32Car_32MenuCode.GDShibaChooseFrameObjects1.length = 0;
gdjs.Select_32Car_32MenuCode.GDShibaChooseFrameObjects2.length = 0;
gdjs.Select_32Car_32MenuCode.GDShibaChooseFrameObjects3.length = 0;
gdjs.Select_32Car_32MenuCode.GDPepeChooseFrameObjects1.length = 0;
gdjs.Select_32Car_32MenuCode.GDPepeChooseFrameObjects2.length = 0;
gdjs.Select_32Car_32MenuCode.GDPepeChooseFrameObjects3.length = 0;
gdjs.Select_32Car_32MenuCode.GDDogeChooseFrameObjects1.length = 0;
gdjs.Select_32Car_32MenuCode.GDDogeChooseFrameObjects2.length = 0;
gdjs.Select_32Car_32MenuCode.GDDogeChooseFrameObjects3.length = 0;
gdjs.Select_32Car_32MenuCode.GDBonkChooseFrameObjects1.length = 0;
gdjs.Select_32Car_32MenuCode.GDBonkChooseFrameObjects2.length = 0;
gdjs.Select_32Car_32MenuCode.GDBonkChooseFrameObjects3.length = 0;
gdjs.Select_32Car_32MenuCode.GDPlayButtonObjects1.length = 0;
gdjs.Select_32Car_32MenuCode.GDPlayButtonObjects2.length = 0;
gdjs.Select_32Car_32MenuCode.GDPlayButtonObjects3.length = 0;
gdjs.Select_32Car_32MenuCode.GDRed_9595CarObjects1.length = 0;
gdjs.Select_32Car_32MenuCode.GDRed_9595CarObjects2.length = 0;
gdjs.Select_32Car_32MenuCode.GDRed_9595CarObjects3.length = 0;
gdjs.Select_32Car_32MenuCode.GDBlue_9595CarObjects1.length = 0;
gdjs.Select_32Car_32MenuCode.GDBlue_9595CarObjects2.length = 0;
gdjs.Select_32Car_32MenuCode.GDBlue_9595CarObjects3.length = 0;
gdjs.Select_32Car_32MenuCode.GDGreen_9595CarObjects1.length = 0;
gdjs.Select_32Car_32MenuCode.GDGreen_9595CarObjects2.length = 0;
gdjs.Select_32Car_32MenuCode.GDGreen_9595CarObjects3.length = 0;
gdjs.Select_32Car_32MenuCode.GDCatObjects1.length = 0;
gdjs.Select_32Car_32MenuCode.GDCatObjects2.length = 0;
gdjs.Select_32Car_32MenuCode.GDCatObjects3.length = 0;
gdjs.Select_32Car_32MenuCode.GDBonkObjects1.length = 0;
gdjs.Select_32Car_32MenuCode.GDBonkObjects2.length = 0;
gdjs.Select_32Car_32MenuCode.GDBonkObjects3.length = 0;
gdjs.Select_32Car_32MenuCode.GDDogeObjects1.length = 0;
gdjs.Select_32Car_32MenuCode.GDDogeObjects2.length = 0;
gdjs.Select_32Car_32MenuCode.GDDogeObjects3.length = 0;
gdjs.Select_32Car_32MenuCode.GDPepeObjects1.length = 0;
gdjs.Select_32Car_32MenuCode.GDPepeObjects2.length = 0;
gdjs.Select_32Car_32MenuCode.GDPepeObjects3.length = 0;
gdjs.Select_32Car_32MenuCode.GDShibaObjects1.length = 0;
gdjs.Select_32Car_32MenuCode.GDShibaObjects2.length = 0;
gdjs.Select_32Car_32MenuCode.GDShibaObjects3.length = 0;

gdjs.Select_32Car_32MenuCode.eventsList8(runtimeScene);

return;

}

gdjs['Select_32Car_32MenuCode'] = gdjs.Select_32Car_32MenuCode;
