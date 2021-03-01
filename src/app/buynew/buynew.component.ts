import { Component, OnInit } from '@angular/core';
import {SrvServiceService} from '../service/json/srv.service.service'
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-buynew',
  templateUrl: './buynew.component.html',
  styleUrls: ['./buynew.component.css']
})
export class BuynewComponent implements OnInit {

  constructor(private srv: SrvServiceService, private router: Router) { }

  buyForm: FormGroup;
  disabledControl: boolean;

  ngOnInit(): void {
    this.buyForm = new FormGroup({
      name: new FormControl({value: '', disabled: this.disabledControl}, [Validators.required]),
      kolvo: new FormControl({value: '', disabled: this.disabledControl}, [Validators.required]),
    });

  }

  onAddBuy(){
    const buy = this.buyForm.value;
    buy.status = 0;
    this.srv.addBuy(buy).then(() => {
    this.router.navigate(['buylist']);});
  }

}
