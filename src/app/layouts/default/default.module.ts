import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { PostsComponent } from 'src/app/modules/posts/posts.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSidenavModule, MatDividerModule, MatCardModule, MatPaginatorModule, MatTableModule, MatButtonToggleModule, MatDatepickerModule, MatSelectModule, MatNativeDateModule, MatToolbarModule, MatTabsModule, MatButtonModule, MatCheckboxModule, MatInputModule, MatFormFieldModule, MatIconModule, MatSortModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DashboardService } from 'src/app/modules/dashboard.service';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { FicheRenseignementComponent } from 'src/app/modules/fiche-renseignement/fiche-renseignement.component';

@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    PostsComponent,
    FicheRenseignementComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    FlexLayoutModule,
    MatCardModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonToggleModule,
    MatSelectModule,           
    MatDatepickerModule,
    MatNativeDateModule,
    MatToolbarModule,
    MatTabsModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatPaginatorModule,
    MatSortModule,
  ],
  providers: [
    DashboardService
  ]
})
export class DefaultModule { }
