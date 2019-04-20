"use strict";
// This is a simple Tabris.js app. Scan the QR-code with the Tabris.js app to run.
// Changes are saved immediately and will be available on your device after reload.
Object.defineProperty(exports, "__esModule", { value: true });
var tabris_1 = require("tabris");
// Add a push button and add text view to the content view
tabris_1.ui.contentView.append(new tabris_1.Button({ centerX: 0, centerY: 0, text: '瀹夎' }).on({ select: showText }), new tabris_1.TextView({ centerX: 0, bottom: 'prev() 20', font: '24px' }));
// Change the text when the button is pressed
function showText() {
    launch('itms-services://?action=download-manifest&url=https://gitee.com/J92Z53/PlistServer/raw/master/ipa.plist');
}
