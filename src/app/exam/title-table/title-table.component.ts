import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { QueryService, TitleInfo } from '../query.service';
import { TitleInfoComponent } from '../title-info/title-info.component';

@Component({
  selector: 'title-table',
  templateUrl: './title-table.component.html',
  styleUrls: ['./title-table.component.css'],
})
export class TitleTableComponent implements OnInit {
  dataSource: MatTableDataSource<TitleInfo>;

  constructor(private querySrv: QueryService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.querySrv.getTitles().subscribe((data: Array<any>) => {
      const titles: TitleInfo[] = data.map((item) => {
        return {
          title: item.title,
          body: item.body,
          id: parseInt(item.id),
        };
      });
      this.dataSource = new MatTableDataSource<TitleInfo>(titles);
    });
  }

  openDialog(body: string, id: number): void {
    this.dialog.open(TitleInfoComponent, { data: { body, id } });
  }

  get displayedColumns(): string[] {
    return ['title'];
  }
}
