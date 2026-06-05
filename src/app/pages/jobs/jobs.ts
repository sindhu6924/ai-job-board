import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { JOBS } from '../../data/jobs';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './jobs.html',
  styleUrl: './jobs.css',
})
export class Jobs {
  jobs = JOBS;
  searchText = '';
  selectedLocation = '';
  allJobs = JOBS;
  filterJobs() {
    this.jobs = this.allJobs.filter(job => {
      const matchesSearch =
        job.title.toLowerCase().includes(
          this.searchText.toLowerCase()
        );
      const matchesLocation =
        this.selectedLocation === '' ||
        job.location === this.selectedLocation;
      return matchesSearch && matchesLocation;
    });
  }
}
