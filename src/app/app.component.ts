import { style } from '@angular/animations';
import { Component, Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles:[`
  .Large{ color: purple;
}`]
})
export class AppComponent {
  title = 'my-dream-app';
  projectName = 'SCM';
  align_value = 'center';
  angular_image_src = 'https://github.com/angular/angular/blob/main/aio/src/assets/images/logos/angular/angular.png?raw=true';
  showAlert() : void{
    alert('Event binding works!');
  }
  sideLength = 5;
  perimeter = 0;
  getColor(){
    return this.sideLength >= 50 ? 'green' : 'yellow';
  }
  size = 'Small';
  getPerimeter(){
    this.perimeter = 4*this.sideLength;
    if(this.perimeter > 100){
      this.size = 'Large';
    }else{
      this.size = 'Small'
    }
    return this.perimeter;
  }
}
@Pipe({
  name : 'Area'
})
export class AreaPipe implements PipeTransform{
  transform(sideLength: number): number {
    return sideLength*sideLength;
  }
}
