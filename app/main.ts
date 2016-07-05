import {bootstrap}    from '@angular/platform-browser-dynamic';
import {APP_ROUTER_PROVIDERS} from "./app.routes";
import {AppComponent} from './app.component';
import {BrowserXhr, HTTP_PROVIDERS} from "@angular/http";
import {Injectable, provide} from "@angular/core";
import 'rxjs/Rx';

@Injectable()
class CORSBrowserXHR extends BrowserXhr {
    build(): any {
        var xhr: any = super.build();
        // xhr.withCredentials = true;
        return xhr;
    }
}


bootstrap(AppComponent, [APP_ROUTER_PROVIDERS, HTTP_PROVIDERS, provide(BrowserXhr, { useClass: CORSBrowserXHR }),
]);