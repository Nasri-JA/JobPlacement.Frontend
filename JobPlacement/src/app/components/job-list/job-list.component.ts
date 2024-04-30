import { Component, OnInit } from '@angular/core';
import { JobService } from '../../services/job.service';
import { Job } from '../../models/job.model';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.scss']
})
export class JobListComponent implements OnInit {
  jobs: Job[]; 

  constructor(private jobService: JobService) { 
    this.jobs = []; // Zuweisung mit leeren Array
  }

  ngOnInit(): void {
    this.loadJobs();
  }

  loadJobs(): void {
    this.jobService.getAllJobs().subscribe(
      jobs => this.jobs = jobs,
      error => console.log('Error fetching jobs:', error)
    );
  }
}

