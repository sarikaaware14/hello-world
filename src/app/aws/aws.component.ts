import { Component } from '@angular/core';

@Component({
  selector: 'app-aws',
  standalone: true,
  imports: [],
  templateUrl: './aws.component.html',
  styleUrl: './aws.component.css'
})
export class AwsComponent {
  items: string[] = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
}
