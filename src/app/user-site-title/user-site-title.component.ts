import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import $ from 'jquery/dist/jquery';
import 'jquery-ui/ui/widgets/draggable';


@Component({
  selector: 'app-user-site-title',
  templateUrl: './user-site-title.component.html',
  styleUrls: ['./user-site-title.component.css']
})
export class UserSiteTitleComponent implements OnInit, AfterViewInit {

 @ViewChild('header') header: ElementRef;
 @ViewChild('title') title: ElementRef;
 editHeader:boolean = false;    
 editTitle:boolean = false;
  constructor() { }

  ngOnInit() {
    
  }

  ngAfterViewInit(){
    $(this.title.nativeElement).draggable();
  }

  showEditHeader(){
    this.editHeader = true;
    
    
  }

  hideEditHeader(){
    this.editHeader = false;
    
  }

  showEditTitle(){
    this.editTitle = true;
    
  }

  hideEditTitle(){
    this.editTitle = false;
    
  }

}
