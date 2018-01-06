import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ItemService } from './item.service';
import { CategoryService } from './category.service';
import { DropService } from './drop.service';

import { AppComponent } from './app.component';
import { CategoryComponent } from './category/category.component';
import { ItemComponent } from './item/item.component';
import { NavigationComponent } from './navigation/navigation.component';
import { TrashComponent } from './trash/trash.component';
import { LoadingComponent } from './loading/loading.component';
import { FocusDirective } from './focus.directive';


@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    ItemComponent,
    NavigationComponent,
    TrashComponent,
    LoadingComponent,
    FocusDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [
    ItemService,
    CategoryService,
    DropService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
