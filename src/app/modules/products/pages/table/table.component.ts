import { Component, inject, OnInit, signal } from '@angular/core';

import { TableDataSource } from '@utils/data-source';
import { ProductService } from '@services/product.service';
import { UIService } from '@services/ui.service';
import { Product } from '@models/product.model';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { NgOptimizedImage, CurrencyPipe } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    standalone: true,
    imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatProgressBarModule, MatCardModule, MatTableModule, NgOptimizedImage, CurrencyPipe]
})
export class TableComponent implements OnInit {

  displayedColumns: string[] = ['id', 'title', 'price', 'images', 'category', 'actions'];
  dataSource = new TableDataSource<Product>();
  private productService = inject(ProductService);
  private uiService = inject(UIService);

  counter: null | number = null;
  showProgress = signal(false);

  ngOnInit(): void {
    this.showProgress.set(true);
    this.productService.getAll().subscribe((data) => {
      this.dataSource.init(data);
      this.counter = this.dataSource.getTotal();
      this.showProgress.set(false);
    });
  }

  toggleDrawer() {
    this.uiService.toggleDrawer();
  }
}
