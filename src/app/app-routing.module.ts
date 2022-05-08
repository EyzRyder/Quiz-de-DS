import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'level',
    loadChildren: () => import('./page/level/level.module').then( m => m.LevelPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'etim',
    loadChildren: () => import('./page/questions/etim/etim.module').then( m => m.EtimPageModule)
  },
  {
    path: 'end',
    loadChildren: () => import('./page/ending/end/end.module').then( m => m.EndPageModule)
  },
  {
    path: 'adm',
    loadChildren: () => import('./page/questions/adm/adm.module').then( m => m.AdmPageModule)
  },
  {
    path: 'info',
    loadChildren: () => import('./page/questions/info/info.module').then( m => m.InfoPageModule)
  },
  {
    path: 'sj',
    loadChildren: () => import('./page/questions/sj/sj.module').then( m => m.SjPageModule)
  },
  {
    path: 'bio',
    loadChildren: () => import('./page/questions/bio/bio.module').then( m => m.BioPageModule)
  },
  {
    path: 'ev',
    loadChildren: () => import('./page/questions/ev/ev.module').then( m => m.EvPageModule)
  },
  {
    path: 'dg',
    loadChildren: () => import('./page/questions/dg/dg.module').then( m => m.DgPageModule)
  },
  {
    path: 'di',
    loadChildren: () => import('./page/questions/di/di.module').then( m => m.DiPageModule)
  },
  {
    path: 'sec',
    loadChildren: () => import('./page/questions/sec/sec.module').then( m => m.SecPageModule)
  },
  {
    path: 'hum',
    loadChildren: () => import('./page/questions/hum/hum.module').then( m => m.HumPageModule)
  },
  {
    path: 'end1',
    loadChildren: () => import('./page/ending/end1/end1.module').then( m => m.End1PageModule)
  },
  {
    path: 'end2',
    loadChildren: () => import('./page/ending/end2/end2.module').then( m => m.End2PageModule)
  },
  {
    path: 'end3',
    loadChildren: () => import('./page/ending/end3/end3.module').then( m => m.End3PageModule)
  },
  {
    path: 'end4',
    loadChildren: () => import('./page/ending/end4/end4.module').then( m => m.End4PageModule)
  },
  {
    path: 'end5',
    loadChildren: () => import('./page/ending/end5/end5.module').then( m => m.End5PageModule)
  },
  {
    path: 'end6',
    loadChildren: () => import('./page/ending/end6/end6.module').then( m => m.End6PageModule)
  },
  {
    path: 'end7',
    loadChildren: () => import('./page/ending/end7/end7.module').then( m => m.End7PageModule)
  },
  {
    path: 'end8',
    loadChildren: () => import('./page/ending/end8/end8.module').then( m => m.End8PageModule)
  },
  {
    path: 'end9',
    loadChildren: () => import('./page/ending/end9/end9.module').then( m => m.End9PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
