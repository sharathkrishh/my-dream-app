import { Component, Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-dream-app';
  projectName = 'SCM';
  align_value = 'center';
  angular_image_src = 'https://github.com/angular/angular/blob/main/aio/src/assets/images/logos/angular/angular.png?raw=true';
  showAlert() : void{
    alert('Event binding works!');
  }
  sideLength = 10;
}
@Pipe({
  name : 'Area'
})
export class AreaPipe implements PipeTransform{
  transform(side: number): number {
    return side*side;
  }
}
