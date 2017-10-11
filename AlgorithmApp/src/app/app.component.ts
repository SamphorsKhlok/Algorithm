import {Component, ElementRef, Renderer2, ViewEncapsulation} from '@angular/core';
import {OverlayContainer} from "@angular/cdk/overlay";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
  preserveWhitespaces: false,
})
export class AppComponent {
  dark = false;
  title = 'Algorithm';

  navItems = [
    {name: 'Home', icon: 'home', route: '/'},
    {name: 'Test', icon: 'event', route: '/test'},
    {name: 'Zipcode', icon: 'search', route: '/zipcode'}
  ];

  constructor(
    private _element: ElementRef,
    private _renderer: Renderer2,
    private _overlayContainer: OverlayContainer) {}

  toggleFullscreen() {
    let elem = this._element.nativeElement.querySelector('.demo-content');
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullScreen) {
      elem.webkitRequestFullScreen();
    } else if (elem.mozRequestFullScreen) {
      elem.mozRequestFullScreen();
    } else if (elem.msRequestFullScreen) {
      elem.msRequestFullScreen();
    }
  }

  toggleTheme() {
    // const darkThemeClass = 'unicorn-dark-theme';
    //
    // this.dark = !this.dark;
    //
    // if (this.dark) {
    //   this._renderer.addClass(this._element.nativeElement, darkThemeClass);
    //   this._overlayContainer.getContainerElement().classList.add(darkThemeClass);
    // } else {
    //   this._renderer.removeClass(this._element.nativeElement, darkThemeClass);
    //   this._overlayContainer.getContainerElement().classList.remove(darkThemeClass);
    // }
  }

}
