import {Extension} from 'resource:///org/gnome/shell/extensions/extension.js';

import * as Main from 'resource:///org/gnome/shell/ui/main.js';

export default class HideStatusIndicatorsExtension extends Extension {
    enable() {
        this.quickSettings = Main.panel.statusArea["quickSettings"];
        this.networkIndicator = this.quickSettings._network;

        if (this.networkIndicator)
            this.quickSettings._indicators.remove_child(this.networkIndicator);
    }

    disable() {
        if (this.networkIndicator)
            this.quickSettings._indicators.add_child(this.networkIndicator);
    }
}
