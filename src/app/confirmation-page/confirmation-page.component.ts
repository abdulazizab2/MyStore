import { Component, OnInit, Input } from '@angular/core';
import { User } from '../models/User';

@Component({
  selector: 'app-confirmation-page',
  templateUrl: './confirmation-page.component.html',
  styleUrls: ['./confirmation-page.component.css'],
})
export class ConfirmationPageComponent implements OnInit {
  title = 'Order Confirmation';
  constructor() {}
  ngOnInit(): void {}
}
