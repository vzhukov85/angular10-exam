import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NavigationStart, Router, RouterEvent } from '@angular/router';
import { filter, pairwise } from 'rxjs/operators';

@Component({
  selector: 'app-title-info',
  templateUrl: './title-info.component.html',
  styleUrls: ['./title-info.component.css']
})
export class TitleInfoComponent implements OnInit {

  body: string;
  id: number;
  routerSubscription: any;

  constructor(public dialogRef: MatDialogRef<TitleInfoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private router: Router) { 
      this.body = data.body;
      this.id = data.id;
    }

    ngOnInit() {
      this.routerSubscription = this.router.events
        .pipe(
          filter((event: RouterEvent) => event instanceof NavigationStart),
          filter(() => !!this.dialogRef)
        )
        .subscribe(() => {
          this.dialogRef.close();
        });
   }

  get url(): string {
    return 'userInfo/' + this.id;
  }

  close(){
    this.dialogRef.close(true);
 }

}
