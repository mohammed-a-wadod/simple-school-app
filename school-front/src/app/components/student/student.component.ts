import {Component, Inject, OnInit, Optional} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Student} from "../../models/student";


@Component({
    selector: 'app-student',
    templateUrl: './student.component.html',
    styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

    action: string;
    student: Student;

    constructor(
        public dialogRef: MatDialogRef<StudentComponent>,
        @Optional() @Inject(MAT_DIALOG_DATA) public data: Student) {
        console.log(data);
        this.student = {...data};
        // @ts-ignore
        this.action = this.student.action;
    }

    ngOnInit(): void {
    }

    doAction() {
        this.dialogRef.close({event: this.action, data: this.student});
    }

    closeDialog() {
        this.dialogRef.close({event: 'Cancel'});
    }

}
