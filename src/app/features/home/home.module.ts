import { SharedModule } from './../../shared/shared.module';
import { HomeService } from './shared/home.service';
import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { HomeViewComponent } from './home-view/home-view.component';

@NgModule({
  declarations: [HomeViewComponent],
  imports: [SharedModule, HomeRoutingModule],
  providers: [HomeService],
})
export class HomeModule {}
