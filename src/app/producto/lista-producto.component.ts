import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../service/producto.service';

@Component({
  selector: 'app-lista-producto',
  templateUrl: './lista-producto.component.html',
  styleUrls: ['./lista-producto.component.css']
})
export class ListaProductoComponent implements OnInit {

  constructor(private productoService:ProductoService) { }

  ngOnInit(): void {
    this.productoService.list();
  }

}
