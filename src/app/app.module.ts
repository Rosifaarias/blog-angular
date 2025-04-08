import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BigCardComponent } from './componentes/big-card/big-card.component';
import { MenuBarComponent } from './componentes/menu-bar/menu-bar.component';
import { MenuTitleComponent } from './componentes/menu-title/menu-title.component';
import { SmallCardComponent } from './componentes/small-card/small-card.component';
import { HomeComponent } from './pages/home/home.component';
import { ContentComponent } from './pages/content/content.component';
import { EnvironmentsComponent } from './environments/environments.component';
import { FooterComponent } from './componentes/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    BigCardComponent,
    MenuBarComponent,
    MenuTitleComponent,
    SmallCardComponent,
    HomeComponent,
    ContentComponent,
    EnvironmentsComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
