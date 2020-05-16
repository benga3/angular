import { Directive,HostBinding,Input } from '@angular/core';

@Directive({
  selector: '[appActive]'
})
export class ActiveDirective {

  @HostBinding('style.backgroundColor') backgroundColor: string;
  @HostBinding('style.color') color: string;
  
@Input('appActive') set isActive(condition) {
  if (condition) {
    this.backgroundColor = 'var(--primary)';
    this.color = 'white';
  } else {
    this.backgroundColor = 'transparent';
    this.color = 'black';
  }
}

constructor() { }


}
