import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroesComponent } from './heroes/heroes.component';

// 添加路由定义
const routes: Routes = [
  {path: 'heroes', component: HeroesComponent}
];


// 要在后面？
@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]   //初始化路由器，并监听浏览器中的地址变化
})

export class AppRoutingModule { }
