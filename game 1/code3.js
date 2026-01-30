gdjs.logoCode = {};
gdjs.logoCode.localVariables = [];
gdjs.logoCode.idToCallbackMap = new Map();
gdjs.logoCode.GDNewPanelSprite3Objects1= [];
gdjs.logoCode.GDNewPanelSprite3Objects2= [];
gdjs.logoCode.GDNewPanelSprite4Objects1= [];
gdjs.logoCode.GDNewPanelSprite4Objects2= [];
gdjs.logoCode.GDNewPanelSprite5Objects1= [];
gdjs.logoCode.GDNewPanelSprite5Objects2= [];
gdjs.logoCode.GDNewTextObjects1= [];
gdjs.logoCode.GDNewTextObjects2= [];
gdjs.logoCode.GDRedButtonWithMetalFrameObjects1= [];
gdjs.logoCode.GDRedButtonWithMetalFrameObjects2= [];
gdjs.logoCode.GDNewPanelSprite6Objects1= [];
gdjs.logoCode.GDNewPanelSprite6Objects2= [];
gdjs.logoCode.GDNewPanelSprite7Objects1= [];
gdjs.logoCode.GDNewPanelSprite7Objects2= [];
gdjs.logoCode.GDLevelTilesObjects1= [];
gdjs.logoCode.GDLevelTilesObjects2= [];
gdjs.logoCode.GDNewPanelSpriteObjects1= [];
gdjs.logoCode.GDNewPanelSpriteObjects2= [];
gdjs.logoCode.GDNewPanelSprite2Objects1= [];
gdjs.logoCode.GDNewPanelSprite2Objects2= [];
gdjs.logoCode.GDPlayerObjects1= [];
gdjs.logoCode.GDPlayerObjects2= [];
gdjs.logoCode.GDBotObjects1= [];
gdjs.logoCode.GDBotObjects2= [];
gdjs.logoCode.GDArrowObjects1= [];
gdjs.logoCode.GDArrowObjects2= [];
gdjs.logoCode.GDArrowBarObjects1= [];
gdjs.logoCode.GDArrowBarObjects2= [];
gdjs.logoCode.GDNewSpriteObjects1= [];
gdjs.logoCode.GDNewSpriteObjects2= [];


gdjs.logoCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("RedButtonWithMetalFrame"), gdjs.logoCode.GDRedButtonWithMetalFrameObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.logoCode.GDRedButtonWithMetalFrameObjects1.length;i<l;++i) {
    if ( gdjs.logoCode.GDRedButtonWithMetalFrameObjects1[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.logoCode.GDRedButtonWithMetalFrameObjects1[k] = gdjs.logoCode.GDRedButtonWithMetalFrameObjects1[i];
        ++k;
    }
}
gdjs.logoCode.GDRedButtonWithMetalFrameObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.multiplayer.authenticateAndQuickJoinLobby(runtimeScene, true, false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.multiplayer.hasLobbyGameJustStarted();
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game Scene", false);
}
}

}


};

gdjs.logoCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.logoCode.GDNewPanelSprite3Objects1.length = 0;
gdjs.logoCode.GDNewPanelSprite3Objects2.length = 0;
gdjs.logoCode.GDNewPanelSprite4Objects1.length = 0;
gdjs.logoCode.GDNewPanelSprite4Objects2.length = 0;
gdjs.logoCode.GDNewPanelSprite5Objects1.length = 0;
gdjs.logoCode.GDNewPanelSprite5Objects2.length = 0;
gdjs.logoCode.GDNewTextObjects1.length = 0;
gdjs.logoCode.GDNewTextObjects2.length = 0;
gdjs.logoCode.GDRedButtonWithMetalFrameObjects1.length = 0;
gdjs.logoCode.GDRedButtonWithMetalFrameObjects2.length = 0;
gdjs.logoCode.GDNewPanelSprite6Objects1.length = 0;
gdjs.logoCode.GDNewPanelSprite6Objects2.length = 0;
gdjs.logoCode.GDNewPanelSprite7Objects1.length = 0;
gdjs.logoCode.GDNewPanelSprite7Objects2.length = 0;
gdjs.logoCode.GDLevelTilesObjects1.length = 0;
gdjs.logoCode.GDLevelTilesObjects2.length = 0;
gdjs.logoCode.GDNewPanelSpriteObjects1.length = 0;
gdjs.logoCode.GDNewPanelSpriteObjects2.length = 0;
gdjs.logoCode.GDNewPanelSprite2Objects1.length = 0;
gdjs.logoCode.GDNewPanelSprite2Objects2.length = 0;
gdjs.logoCode.GDPlayerObjects1.length = 0;
gdjs.logoCode.GDPlayerObjects2.length = 0;
gdjs.logoCode.GDBotObjects1.length = 0;
gdjs.logoCode.GDBotObjects2.length = 0;
gdjs.logoCode.GDArrowObjects1.length = 0;
gdjs.logoCode.GDArrowObjects2.length = 0;
gdjs.logoCode.GDArrowBarObjects1.length = 0;
gdjs.logoCode.GDArrowBarObjects2.length = 0;
gdjs.logoCode.GDNewSpriteObjects1.length = 0;
gdjs.logoCode.GDNewSpriteObjects2.length = 0;

gdjs.logoCode.eventsList0(runtimeScene);
gdjs.logoCode.GDNewPanelSprite3Objects1.length = 0;
gdjs.logoCode.GDNewPanelSprite3Objects2.length = 0;
gdjs.logoCode.GDNewPanelSprite4Objects1.length = 0;
gdjs.logoCode.GDNewPanelSprite4Objects2.length = 0;
gdjs.logoCode.GDNewPanelSprite5Objects1.length = 0;
gdjs.logoCode.GDNewPanelSprite5Objects2.length = 0;
gdjs.logoCode.GDNewTextObjects1.length = 0;
gdjs.logoCode.GDNewTextObjects2.length = 0;
gdjs.logoCode.GDRedButtonWithMetalFrameObjects1.length = 0;
gdjs.logoCode.GDRedButtonWithMetalFrameObjects2.length = 0;
gdjs.logoCode.GDNewPanelSprite6Objects1.length = 0;
gdjs.logoCode.GDNewPanelSprite6Objects2.length = 0;
gdjs.logoCode.GDNewPanelSprite7Objects1.length = 0;
gdjs.logoCode.GDNewPanelSprite7Objects2.length = 0;
gdjs.logoCode.GDLevelTilesObjects1.length = 0;
gdjs.logoCode.GDLevelTilesObjects2.length = 0;
gdjs.logoCode.GDNewPanelSpriteObjects1.length = 0;
gdjs.logoCode.GDNewPanelSpriteObjects2.length = 0;
gdjs.logoCode.GDNewPanelSprite2Objects1.length = 0;
gdjs.logoCode.GDNewPanelSprite2Objects2.length = 0;
gdjs.logoCode.GDPlayerObjects1.length = 0;
gdjs.logoCode.GDPlayerObjects2.length = 0;
gdjs.logoCode.GDBotObjects1.length = 0;
gdjs.logoCode.GDBotObjects2.length = 0;
gdjs.logoCode.GDArrowObjects1.length = 0;
gdjs.logoCode.GDArrowObjects2.length = 0;
gdjs.logoCode.GDArrowBarObjects1.length = 0;
gdjs.logoCode.GDArrowBarObjects2.length = 0;
gdjs.logoCode.GDNewSpriteObjects1.length = 0;
gdjs.logoCode.GDNewSpriteObjects2.length = 0;


return;

}

gdjs['logoCode'] = gdjs.logoCode;
