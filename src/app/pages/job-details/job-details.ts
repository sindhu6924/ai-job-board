import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { JOBS } from '../../data/jobs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-job-details',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './job-details.html',
  styleUrl: './job-details.css',
})
export class JobDetails {
  job: any;
  constructor(private route: ActivatedRoute) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.job = JOBS.find(j => j.id === id);
  }
  applyJob() {
    alert('Application submitted successfully!');
  }

}
