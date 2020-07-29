import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private httpClient: HttpClient, title: Title) {
    title.setTitle('Anima');
  }

  ngOnInit(): void {
    this.httpClient.get('/api/test').subscribe(() => console.log('response'));
  }

}
