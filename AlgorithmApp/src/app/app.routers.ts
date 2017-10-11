import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from "./Components/home/home.component";
import { TestComponent} from "./Components/test/test.component";
import { ZipcodeComponent} from "./Components/zipcode/zipcode.component";

const MY_ROUTES: Routes = [

  //end user pages
  {path : '', component: HomeComponent},
  {path : 'test', component: TestComponent},
  {path : 'zipcode', component: ZipcodeComponent},

  //always has one for unidentifiable link
  {path: '**', redirectTo:'/error'}
];

export const myRoutes = RouterModule.forRoot(MY_ROUTES);
