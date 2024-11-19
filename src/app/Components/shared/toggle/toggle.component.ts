import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-toggle',
  standalone: true,
  imports: [MatSlideToggleModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css']
})
export class ToggleComponent implements OnInit {
  darkMode: boolean = false;

  ngOnInit(): void {
    // Recuperar el estado del modo oscuro desde el localStorage al iniciar
    const savedTheme = localStorage.getItem('darkMode');
    if (savedTheme) {
      this.darkMode = JSON.parse(savedTheme);
      this.applyTheme();
    }
  }

  toggleTheme(): void {
    // Cambiar el tema y guardarlo en localStorage
    this.darkMode = !this.darkMode;
    localStorage.setItem('darkMode', JSON.stringify(this.darkMode));
    this.applyTheme();
  }

  applyTheme(): void {
    if (this.darkMode) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }
}
