import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MovementsComponent } from './movements/movements.component';
import { DepositComponent } from './deposit/deposit.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { LandPageComponent } from './land-page/land-page.component';

const routes: Routes = [
  { path: '', component: LandPageComponent },
  { path: 'movements', component: MovementsComponent },
  { path: 'deposit', component: DepositComponent },
  { path: 'withdraw', component: WithdrawComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
