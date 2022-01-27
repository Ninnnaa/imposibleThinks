import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { TableInterface } from '../interfaces/table-interface';

@Injectable({
  providedIn: 'root'
})
export class TablesService {

  constructor(private readonly httpClient: HttpClient) { }

  public getTablesList(): Observable<TableInterface[]> {
    return this.httpClient.get<TableInterface[]>('assets/data/tablesList.json');
  }
}
