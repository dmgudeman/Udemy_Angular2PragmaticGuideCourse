import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
    templateUrl: '/app/albums.component.html'
})
export class AlbumsComponent {
    // onSubmit(form:any){
    //     console.log(form);
    // }
}
// import {Component, OnInit} from '@angular/core';
// import {HttpModule} from '@angular/http';
// import {PhotoService} from './photo.service';
// import {Observable} from 'rxjs/Observable';
// import {Album} from './album';
// import { Router, ActivatedRoute, Params } from '@angular/router';


// @Component({
//     template: `
//         <h1>Albums</h1>
//         <p>get your albums here</p>
//        <!-- <div *ngIf="isLoading">
//             <i class="fa fa-spinner fa-spin fa-3x"></i>
//         </div>
//         <ul>
//             <li *ngFor="#album of albums">
//                 {{ album.title }}
//             </li> 
//         </ul>
//         -->
//         <button routerLink="/contact"> Got to Contact</button>
//     `
// })
// export class AlbumsComponent implements OnInit {
//     // isLoading = true;
//     // albums: Observable<Album[]>;

//     // constructor(private _photoService: PhotoService,
//     //     private route: ActivatedRouter,
//     //     private router: Router){}
    
//     ngOnInit(){
//         // this._photoService.getAlbums()
//         //     .subscribe(albums => {
//         //         this.isLoading = false;
//         //         this.albums = albums;
//         //     });
//     }
// }