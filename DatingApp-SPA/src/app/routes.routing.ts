import { MemberEditComponent } from './members/member-edit/member-edit.component';
import { AuthGuard } from './_guards/auth.guard';
import { ListsComponent } from './lists/lists.component';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MessagesComponent } from './messages/messages.component';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { MemberDetailResolver } from './_resolver/member-detail.resolver';
import { MemberListResolver } from './_resolver/member-list.resolver';
import { MemberEditResolver } from './_resolver/member-edit.resolver';
import { PreventUnsavedChanges } from './_guards/prevent-unsaved-changes.guard';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
  // tslint:disable-next-line:max-line-length
  { path: 'members', component: MemberListComponent, resolve: {users: MemberListResolver} /*canActivate: [AuthGuard]*//*protege links de forma individual*/ },
  { path: 'members/:id', component: MemberDetailComponent, resolve: {user: MemberDetailResolver} },
  { path: 'member/edit', component: MemberEditComponent, resolve: {user: MemberEditResolver}, canDeactivate: [PreventUnsavedChanges]},
  { path: 'messages', component: MessagesComponent },
  { path: 'lists', component: ListsComponent },
    ]
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

/*export const RoutesRoutes = RouterModule.forChild(routes);*/
