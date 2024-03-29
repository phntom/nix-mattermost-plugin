import {Store, Action} from 'redux';

import {GlobalState} from 'mattermost-redux/types/store';

import manifest from './manifest';

// eslint-disable-next-line import/no-unresolved
import {PluginRegistry} from './types/mattermost-webapp';
import HelpContact from './components/contact';
import HelpCookies from './components/cookies';
import HelpPrivacy from './components/privacy';
import HelpTerms from './components/terms';

export default class Plugin {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function
    public async initialize(registry: PluginRegistry, store: Store<GlobalState, Action<Record<string, unknown>>>) {
        // @see https://developers.mattermost.com/extend/plugins/webapp/reference/
        registry.registerCustomRoute('/contact', HelpContact);
        registry.registerCustomRoute('/cookies', HelpCookies);
        registry.registerCustomRoute('/privacy', HelpPrivacy);
        registry.registerCustomRoute('/terms', HelpTerms);
    }
}

declare global {
    interface Window {
        registerPlugin(id: string, plugin: Plugin): void
    }
}

window.registerPlugin(manifest.id, new Plugin());
