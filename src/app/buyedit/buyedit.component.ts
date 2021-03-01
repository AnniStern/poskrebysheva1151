import { Component, OnInit } from '@angular/core';
import {SrvServiceService} from '../service/json/srv.service.service'
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-buyedit',
  templateUrl: './buyedit.component.html',
  styleUrls: ['./buyedit.component.css']
})
export class BuyeditComponent implements OnInit {

  constructor(private srv: SrvServiceService, private activatedRouter:ActivatedRoute, private router: Router) {
    this.activatedRouter.params.subscribe(param => {
      this.id = parseInt(param.id,10);
    })
   }

  id: number;

  buyEditForm: FormGroup;
  disabledControl: boolean;

  ngOnInit(): void {
    this.buyEditForm = new FormGroup({
      name: new FormControl({value: '', disabled: this.disabledControl}, [Validators.required]),
      kolvo: new FormControl({value: '', disabled: this.disabledControl}, [Validators.required]),
      status: new FormControl({value: '', disabled: this.disabledControl}, [Validators.required]),
    });

    if (!this.id) {this.router.navigate(['new']);}
    if (this.id) {
      this.srv.getBuys().then(()=> {
        (this.srv.buys).forEach(buy => {
          if (buy.id === this.id){
            const item = buy;
            delete item.id;
            this.buyEditForm.setValue(item);
          }
        })
      })
    }
  }

  onEditBuy(id:number){
    let buy = this.buyEditForm.value;
    buy.id = id;
    this.srv.editBuy(buy).then(()=>
    this.router.navigate(['buylist']))
  }

  onRemoveBuy(id:number){
    this.srv.removeBuy(id).then(()=> this.router.navigate(['buylist']))
  }

}
