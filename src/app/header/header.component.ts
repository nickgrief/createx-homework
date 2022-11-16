import { Component, OnInit } from '@angular/core';
import {
  Router,
  Event,
  NavigationStart,
  NavigationEnd,
  NavigationError,
} from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { SignInComponent } from '../sign-in/sign-in.component';
import { SignUpComponent } from '../sign-up/sign-up.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  currentRoute?: string;

  constructor(private router: Router, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
      }
    });
  }

  openSignIn(): void {
    this.dialog.open(SignInComponent, {
      panelClass: 'custom-dialog-container',
    });
  }

  openSignUp(): void {
    this.dialog.open(SignUpComponent, {
      panelClass: 'custom-dialog-container',
    });
  }

  logCurrentRoute() {
    console.log(this.currentRoute);
  }
}
