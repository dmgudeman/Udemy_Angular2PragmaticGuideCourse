import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { AuthorComponent } from './author.component'
import { CourseService } from './course.service';
import { AuthorService } from './author.service';
import { AutoGrowDirective } from './auto-grow.directive';
import { FavoriteComponent } from './favorite.component';
import { VoterComponent } from './vote.component'
import { TweetComponent } from './tweet.component';
import { TweetService } from './tweet.service';
import { SummaryPipe } from './summary.pipe';
import { BootstrapPanel } from './bootstrap-panel.component';
import { ZippyComponent } from './zippy.component';
import { ContactFormComponent } from './contact-form.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule],
  declarations: [
    AppComponent,
    CoursesComponent,
    AuthorComponent,
    AutoGrowDirective,
    FavoriteComponent,
    VoterComponent,
    TweetComponent,
    SummaryPipe,
    BootstrapPanel,
    ZippyComponent,
    ContactFormComponent],
  bootstrap: [
    AppComponent],
  providers: [
    CourseService,
    AuthorService,
    TweetService]
})
export class AppModule { }
