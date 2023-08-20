import { Component } from '@angular/core';

@Component({
  selector: 'products-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {
  public nameLower:string='nelson';
  public nameUpper:string='NELSON';
  public fullName:string='NeLSoN cUrIHuAl';

  public customDate:Date=new Date();
}
