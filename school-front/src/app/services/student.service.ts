import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Student} from "../models/student";

@Injectable({
    providedIn: 'root'
})
export class StudentService {

    constructor(private http: HttpClient) {
    }

    retrieveStudentsList() {
        return this.http.get<Student[]>('/api/student/');
    }

    retrieveStudentData(studentId: number) {
        return this.http.get<Student>('/api/student/' + studentId);
    }

    saveStudentData(studentData: Student) {
        let options: any = {};
        const headers = {'Content-Type': 'application/json'};
        options.responseType = 'text';
        options.headers = headers;
        return this.http.post<string>('/api/student/', studentData, options);
    }

    deleteStudent(studentId: number) {
        let options: any = {};
        options.responseType = 'text';
        return this.http.delete<string>('/api/student/' + studentId, options);
    }
}
