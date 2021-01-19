// Directiva usada para la carga perezosa de imágenes en elemento html <img>
import { Directive, ElementRef } from '@angular/core';

@Directive({ selector: '[appImageLazyLoading]' })
export class ImageLazyLoadingDirective {

  constructor({ nativeElement }: ElementRef<HTMLImageElement>) {
    const supports = 'loading' in HTMLImageElement.prototype;
    if (supports) {
      nativeElement.setAttribute('loading', 'lazy');
    } else {
      console.log('eu');
    }
  }

}
