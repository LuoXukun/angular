import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroChildComponent } from './hero-child/hero-child.component';
import { HeroParentComponent } from './hero-parent/hero-parent.component';
import { AdDirective } from './ad.directive';
import { AdBannerComponent } from './ad-banner/ad-banner.component';
import { HeroJobAdComponent } from "./hero-job-ad.component";
import { HeroProfileComponent } from "./hero-profile.component";
import { AdService } from './ad.service';
import { UnlessDirective } from './unless.directive';
import { ExponentialStrengthPipe } from './exponential-strength.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeroChildComponent,
    HeroParentComponent,
    AdDirective,
    AdBannerComponent,
    HeroJobAdComponent,
    HeroProfileComponent,
    UnlessDirective,
    ExponentialStrengthPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [AdService],
  entryComponents: [HeroJobAdComponent, HeroProfileComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
