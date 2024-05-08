import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';


interface Job {
  id : number;
  title : string;
  companyName : string;
  location : string;
  salary : number;
  description : string;
}

@Component({
  selector: 'app-job-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './job-list.component.html',
  styleUrl: './job-list.component.scss'
})
export class JobListComponent implements OnInit {
  jobs : Job[] = [];
error: any;
loading: any;

  constructor(private httpClient: HttpClient) {}

  
  ngOnInit(): void {
    this.httpClient.get<Job[]>('http://localhost:8083/api/jobs').subscribe(Response => {
      this.jobs = Response;
      console.log(this.jobs);
    }, error => {
      console.log(error);
    })
  }

}
