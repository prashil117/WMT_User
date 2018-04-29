import { Component, OnInit } from '@angular/core';
import { ImageService } from './image.service';
import { NgProgress } from 'ngx-progressbar';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
images:any[];
imagesFound:boolean=false;
searching:boolean=false;
searchQuery1:string;

handleSucess(data)
{
  this.imagesFound=true;
    this.images=data.hits;
  console.log(data.hits);
  
}
handleError(error)
{
  console.log(error);
}
  constructor(private _imgservice:ImageService,public ngProgress: NgProgress) { }

  searchImages(query:string){
    this.ngProgress.start();
    this.searching=true
    this.ngProgress.done();
   return this._imgservice.getImage(query).subscribe(
     data =>this.handleSucess(data),
     error=>this.handleError(error),
     ()=>this.searching=false
   ) 
  }
  ngOnInit() {
  }

}
