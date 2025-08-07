import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductType} from "../../../types/product.type";
import {Subscription, tap} from "rxjs";
import {ProductService} from "../../../services/product.service";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {SearchService} from "../../../services/search.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {
  public products: ProductType[] = [];
  loading: boolean = false;
  private isSearching: boolean = false;
  private subscribption: Subscription | null = null;
  private subscribptionSearch: Subscription | null = null;
  private paramsSearch: string = '';

  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute,
              private searchService: SearchService, private router: Router) {
  }

  ngOnInit(): void {
    this.loading = true;

    this.activatedRoute.queryParams.subscribe(params => {
      if (params['search']) {
        this.paramsSearch = params['search'];
        console.log(params['search']);
        // this.isSearching = true;
        this.searchProducts(this.paramsSearch);
      } else {
        this.loadingProducts();
      }
    })
  }

  searchProducts(searchTerm: string) {
    // Реализация загрузки продуктов
    console.log('Ищем продукты по запросу:', searchTerm);
    this.searchService.searching(searchTerm)
      .pipe(
        tap(() => {
          this.loading = false;
          console.log('Запускаем поиск')
        })
      )
      .subscribe({
        next: (data) => {
          this.products = data;
        },
        error: (err) => {
          console.error('Ошибка запроса:', err);
        }
      })
  }

  loadingProducts() {
    this.subscribption = this.productService.getProducts()
      .pipe(
        tap(() => {
          this.loading = false;
        })
      )
      .subscribe({
        next: (data) => {
          this.products = data
        },
        error: (error: string) => {
          console.log('Error!!!, ', error)
          this.router.navigate(['/']);
        }
      })
  }

  ngOnDestroy(): void {
    this.subscribption?.unsubscribe();
  }
}
