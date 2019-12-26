import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  Result: any;
  private PeriodicallyLoaded: Subscription;
  display: boolean = false;
  Modeldata: string;
  constructor(private Http: HttpService) { }

  ngOnInit() {
    this.Data_Details();
    this.PeriodicallyLoaded = interval(10000).subscribe((val) => {
      this.Data_Details()
    })
  }
  Data_Details() {
    this.Http.Get_Details().subscribe((data) => {
      this.Result = data['hits'];
    })
  }
  RowData(row) {
    this.Modeldata = JSON.stringify(row);
    this.display = true;
  }
}
