import { Component, OnInit } from '@angular/core';
import { ImageService } from './image.service';

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
  constructor(private _imgservice:ImageService) { }

  searchImages(query:string){
    this.searching=true
   return this._imgservice.getImage(query).subscribe(
     data =>this.handleSucess(data),
     error=>this.handleError(error),
     ()=>this.searching=false
   ) 
  }
  ngOnInit() {
  }

}
