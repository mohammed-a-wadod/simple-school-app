import {Component, OnInit, ViewChild} from '@angular/core';
import {Student} from "../../models/student";
import {StudentComponent} from "../student/student.component";
import {MatTable} from "@angular/material/table";
import {MatDialog} from "@angular/material/dialog";
import {StudentService} from "../../services/student.service";

@Component({
    selector: 'app-student-list',
    templateUrl: './student-list.component.html',
    styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {

    dataSource: Student[] = [];
    displayedColumns: string[] = ['id', 'firstName', 'lastName', 'action'];

    @ViewChild(MatTable, {static: true}) table: MatTable<Student> | undefined;

    constructor(public dialog: MatDialog, public studentSer: StudentService) {
    }

    ngOnInit(): void {
        this.fetchStudentData();
    }

    fetchStudentData() {
        this.studentSer.retrieveStudentsList().subscribe(data => {
            this.dataSource = data;
            // @ts-ignore
            this.table.renderRows();
        });
    }

    openStudentDialog(action: string, student?: Student) {
        if (student == null)
            student = new Student();
        // @ts-ignore
        student.action = action;
        const dialogRef = this.dialog.open(StudentComponent, {
            width: '250px',
            data: student
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result.event == 'Add') {
                this.saveStudentData(result.data);
            } else if (result.event == 'Update') {
                this.saveStudentData(result.data);
            } else if (result.event == 'Delete') {
                this.deleteStudentData(result.data);
            }
        });
    }

    saveStudentData(student: Student) {
        this.studentSer.saveStudentData(student).subscribe(data => {
            alert(data);
            this.fetchStudentData();
        });
    }

    deleteStudentData(student: Student) {
        if (typeof student.id === "number") {
            this.studentSer.deleteStudent(student.id).subscribe(data => {
                alert(data);
                this.fetchStudentData();
            });
        }
    }
}


