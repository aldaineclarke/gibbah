import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Pages/home/home.component';
import { ObservedDirective } from './Directives/observed.directive';
import { ParalaxComponent } from './Components/paralax/paralax.component';
import { WebComponent } from './Components/web/web.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './Pages/login/login.component';
import { SignUpComponent } from './Pages/sign-up/sign-up.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { ChatPageComponent } from './Pages/chat-page/chat-page.component';
import { ChatBubbleComponent } from './Components/chat-bubble/chat-bubble.component';
import { ChatboardComponent } from './Components/chatboard/chatboard.component';
import { ConversationComponent } from './Components/conversation/conversation.component';
import { ConversationListingComponent } from './Components/conversation-listing/conversation-listing.component';
import { ContactsListingComponent } from './Components/contacts-listing/contacts-listing.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ProfileComponent } from './Pages/profile/profile.component';
import { ContactsComponent } from './Pages/contacts/contacts.component';
import { NotFoundComponent } from './Pages/not-found/not-found.component';
import {JwtModule} from "@auth0/angular-jwt";
import { LogoutComponent } from './Pages/logout/logout.component'
import { TokenInterceptorService } from './Services/token-interceptor.service';
import { FooterComponent } from './Components/footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ObservedDirective,
    ParalaxComponent,
    WebComponent,
    LoginComponent,
    SignUpComponent,
    NavbarComponent,
    ChatPageComponent,
    ChatBubbleComponent,
    ChatboardComponent,
    ConversationComponent,
    ConversationListingComponent,
    ContactsListingComponent,
    ProfileComponent,
    ContactsComponent,
    NotFoundComponent,
    LogoutComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        // ...
        allowedDomains: ["localhost:3000", "foo.com", "bar.com", "*"],
        tokenGetter: () => {
          return localStorage.getItem("access_token");
        },
      },
    })
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS, 
      useClass:TokenInterceptorService, 
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
