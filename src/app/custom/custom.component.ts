import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.css']
})
export class CustomComponent {
	
	constructor() { }
    
    @Input()
	private myDatas: string[] = [];
}
