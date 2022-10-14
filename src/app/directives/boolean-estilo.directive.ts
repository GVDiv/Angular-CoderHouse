import { Directive, ElementRef, Renderer2, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appBooleanEstilo]'
})
export class BooleanEstiloDirective implements OnInit{
  @Input ('appBooleanEstilo') inscripcionAbierta!: boolean

  constructor(
    private elemento: ElementRef,
    private renderer: Renderer2
  ) { }
  ngOnInit(): void {
    this.renderer.setStyle(this.elemento.nativeElement, 'padding','0px 10px 0px 10px');
    this.renderer.setStyle(this.elemento.nativeElement, 'border-radius','40px');
    this.renderer.setStyle(this.elemento.nativeElement, 'color','#fff');
    this.renderer.setStyle(
      this.elemento.nativeElement,
      'background-color',
      this.inscripcionAbierta ? '#4CAF50' : '#F44336'
      );
  }

}
