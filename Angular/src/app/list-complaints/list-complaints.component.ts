import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { ListComplaintsDataSource } from './list-complaints-datasource';

@Component({
  selector: 'app-list-complaints',
  templateUrl: './list-complaints.component.html',
  styleUrls: ['./list-complaints.component.css']
})
export class ListComplaintsComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: ListComplaintsDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'custEmail', 'datecreated', 'lastupdated', 'heading', 'status'];

  ngOnInit() {
    this.dataSource = new ListComplaintsDataSource(this.paginator, this.sort);
  }
}
