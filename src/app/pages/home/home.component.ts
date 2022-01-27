import { Component, OnInit } from '@angular/core';
import { TablesService } from '../../services/tables.service';
import { TableInterface } from '../../interfaces/table-interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  tablesList: TableInterface[] = [];
  zones: number[] = [];
  sortedTables: Array<TableInterface[]> = [];

  constructor(
    private readonly tablesService: TablesService
  ) { }

  ngOnInit(): void {
    this.tablesService.getTablesList().subscribe(tables => {
      this.tablesList = tables.sort((a,b) => a.areaId - b.areaId);
      tables.forEach(table => {
       if (!this.zones.includes(table.areaId)) {
         this.zones.push(table.areaId)
       }
      })
    })
}
}
