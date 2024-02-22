import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, FormsModule, MatButtonModule],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export default class  GalleryComponent {
  name:string =  'Julian'
}
