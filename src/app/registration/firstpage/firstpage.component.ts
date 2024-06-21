import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-firstpage',
  templateUrl: './firstpage.component.html',
  styleUrls: ['./firstpage.component.css']
})
export class FirstpageComponent implements OnInit {
  firstpage: boolean = true;
  secondpage: boolean = false;
  thirdpage: boolean = false;
  fourthpage: boolean = false;
  fifthpage: boolean = false;
  sixthpage: boolean = false;
  seventhpage: boolean = false;
  Eigthpage: boolean = false;
  file: any;
  fileName: any;
  @ViewChild('callAPIDialog')
  callAPIDialog!: TemplateRef<any>;
  @ViewChild('abcs')
  abcs!: TemplateRef<any>;
  @ViewChild('abcsd')
  abcsd!: TemplateRef<any>;
  @ViewChild('abcsde1')
  abcsde1!: TemplateRef<any>;

  constructor(private _location: Location, private dialog: MatDialog) { }
  ngOnInit(): void {
  }
  trigger() {
    let element = document.getElementById('upload_file') as HTMLInputElement;
    element.click();
  }
  callAPI() {
    let dialogRef = this.dialog.open(this.callAPIDialog);
    dialogRef.afterClosed().subscribe(result => {
      // Note: If the user clicks outside the dialog or presses the escape key, there'll be no result
    })
  }
  addcurrent() {
    let dialogRef = this.dialog.open(this.abcs);
    dialogRef.afterClosed().subscribe(result => {
      // Note: If the user clicks outside the dialog or presses the escape key, there'll be no result
    })
  }
  abcsde() {
    let dialogRef = this.dialog.open(this.abcsd);
    dialogRef.afterClosed().subscribe(result => {
      // Note: If the user clicks outside the dialog or presses the escape key, there'll be no result
    })
  }
  abcsdef() {
    let dialogRef = this.dialog.open(this.abcsde1);
    dialogRef.afterClosed().subscribe(result => {
      // Note: If the user clicks outside the dialog or presses the escape key, there'll be no result
    })
  }
  // onNoClick(): void {
  //   this.dialog.close();
  // }
  firstnext() {
    this.firstpage = false;
    this.secondpage = true;
  }
  backClicked1() {
    this.firstpage = true;
    this.secondpage = false;
  }
  secondnext() {
    this.firstpage = false;
    this.secondpage = false;
    this.thirdpage = true;
  }
  backClicked2() {
    this.firstpage = false;
    this.secondpage = true;
    this.thirdpage = false;
  }
  thirdnext() {
    this.firstpage = false;
    this.secondpage = false;
    this.thirdpage = false;
    this.fourthpage = true;
  }
  backClicked3() {
    this.firstpage = false;
    this.secondpage = false;
    this.thirdpage = true;
    this.fourthpage = false;
  }
  fourthnext() {
    this.firstpage = false;
    this.secondpage = false;
    this.thirdpage = false;
    this.fourthpage = false;
    this.fifthpage = false;
    this.Eigthpage = true;
  }
  backClicked4() {
    this.firstpage = false;
    this.secondpage = false;
    this.thirdpage = false;
    this.fourthpage = false;
    this.fifthpage = false;
    this.Eigthpage = true;
  }
  fifthnext() {
    this.firstpage = false;
    this.secondpage = false;
    this.thirdpage = false;
    this.fourthpage = false;
    this.fifthpage = false;
    this.sixthpage = true;
  }
  backClicked5() {
    this.firstpage = false;
    this.secondpage = false;
    this.thirdpage = false;
    this.fourthpage = false;
    this.fifthpage = true;
    this.sixthpage = false;
  }
  sixthnext() {
    this.firstpage = false;
    this.secondpage = false;
    this.thirdpage = false;
    this.fourthpage = false;
    this.fifthpage = false;
    this.sixthpage = false;
    this.seventhpage = true;
  }
  backClicked6() {
    this.firstpage = false;
    this.secondpage = false;
    this.thirdpage = false;
    this.fourthpage = false;
    this.fifthpage = false;
    this.sixthpage = true;
    this.seventhpage = false;
  }
  seventhnext() {
    this.firstpage = false;
    this.secondpage = false;
    this.thirdpage = false;
    this.fourthpage = false;
    this.fifthpage = true;
    this.sixthpage = false;
    this.seventhpage = false;
    this.Eigthpage = false;
  }
  backClicked7() {
    this.firstpage = false;
    this.secondpage = false;
    this.thirdpage = false;
    this.fourthpage = true;
    this.fifthpage = false;
    this.sixthpage = false;
    this.seventhpage = false;
    this.Eigthpage = false;
  }

}
