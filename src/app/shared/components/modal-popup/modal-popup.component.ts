import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-popup',
  templateUrl: './modal-popup.component.html',
  styleUrls: ['./modal-popup.component.scss']
})
export class ModalPopupComponent implements OnInit {

  constructor(private activeModal: NgbActiveModal) {}
  @Input() public Add_Category_Modal_Data: any;
  closeModal() {
    this.activeModal.close('Modal Closed');
  }
  ngOnInit(): void {
    console.log(this.Add_Category_Modal_Data)
  }

}
