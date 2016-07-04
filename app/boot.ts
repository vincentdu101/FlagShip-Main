import {bootstrap}    from 'angular2/platform/browser';
import {ROUTER_PROVIDERS} from "angular2/router";
import {AppComponent} from './app.component';
import {BrowserXhr, HTTP_PROVIDERS} from "angular2/http";
import {Injectable, provide} from "angular2/core";
import 'rxjs/Rx';

@Injectable()
class CORSBrowserXHR extends BrowserXhr {
    build(): any {
        var xhr: any = super.build();
        xhr.withCredentials = true;
        return xhr;
    }
}


bootstrap(AppComponent, [ROUTER_PROVIDERS, HTTP_PROVIDERS, provide(BrowserXhr, { useClass: CORSBrowserXHR }),
]);