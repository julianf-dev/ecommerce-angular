import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http'
import { ApplicationConfig} from '@angular/core'
import { provideAnimations } from '@angular/platform-browser/animations'
import { provideRouter } from '@angular/router'
import { routes } from './app.routes'
import { TokenInterceptor } from './interceptors/token.interceptor'

export const appConfig: ApplicationConfig ={
  providers: [
    provideRouter(routes),
    //importProvidersFrom(BrowserModule, ReactiveFormsModule, NgOptimizedImage),
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    provideHttpClient(withInterceptorsFromDi()),
    provideAnimations()
]
}
