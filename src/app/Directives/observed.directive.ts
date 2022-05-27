import { Directive, ElementRef, EventEmitter, Output } from '@angular/core';

@Directive({
  selector: '[observe]'
})
export class ObservedDirective {

  @Output() inView : EventEmitter<Element> = new EventEmitter();

  private _observer:IntersectionObserver | undefined;
  private options = {
    // threshold: 0,
    rootMargin: "-200px"
  }
  constructor(private _element: ElementRef<any>) { 
    this.createAndObserver(this._element.nativeElement);
  }

  createAndObserver(element:HTMLElement){
      this._observer = new IntersectionObserver((entries, observer)=>{
        entries.forEach((entry)=>{
          if(entry.isIntersecting){
            if(!entry.target.classList.contains("active")){
              entry.target.classList.add("active");
            }
            entry.target.classList.add("is-Inview");
            this.inView.emit(entry.target);
          } 
        })
      }, this.options);

      this._observer.observe(element);
  }


}
