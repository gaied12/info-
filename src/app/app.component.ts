import { Surf } from './surf';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  note:any;
  title = 'our platforme';
  list:Surf[]=[
    {
      FirstLame:'oussama',
  LastName:'Gaied',
  Place:'Atlantic ocan ' ,
  Img:'src/assets/surf1.jpg' ,
Note:2 ,
Date :'04-12-2020',
Desc:'Description about the pollution ...' ,

  },
{
  FirstLame:'ahmed ',
  LastName:'Bouzir',
  Place:'Indian Ocean ' ,
  Img:'src/assets/surf2.jpg' ,
Note:5 ,
Date :'04-12-2020',
Desc:'Nice place to partice' ,

},
{
  FirstLame:'jihen',
  LastName:'kidar',
  Place:'Pacifique Ocean ' ,
  Img:'src/assets/surf3.jpg' ,
Note:5 ,
Date :'04-12-2020',
Desc:'Nice place to partice' ,

}




  ];
  ngOnInit(): void {


  }

}
