import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatPageComponent } from './Pages/chat-page/chat-page.component';
import { HomeComponent } from './Pages/home/home.component';
import { LoginComponent } from './Pages/login/login.component';
import { SignUpComponent } from './Pages/sign-up/sign-up.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConversationListingComponent } from './Components/conversation-listing/conversation-listing.component';
import { ProfileComponent } from './Pages/profile/profile.component';
import { NotFoundComponent } from './Pages/not-found/not-found.component';
import { AuthGuardService  as AuthGuard} from './Services/auth-guard.service';
import { LogoutComponent } from './Pages/logout/logout.component';
// TODO: Set Routing Animations for the routes

const routes: Routes = [
  { path:'', 
    component:HomeComponent,
    data:{animations: 'openClosePage'}
  },
  { path:'join',
    component: SignUpComponent,
    data: {animations: 'statusPage'}
  },
  { path:'login',
    component: LoginComponent,
    
  },
  { path:'chat',
    component: ChatPageComponent,
    canActivate:[AuthGuard],
    children:[
      {path: "", component:ConversationListingComponent},
      {path:"profile", component: ProfileComponent}
    ]
  },
  { path:'notFound', component: NotFoundComponent},
  { path:'logout', component: LogoutComponent}
];

@NgModule({
  imports: [BrowserAnimationsModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
