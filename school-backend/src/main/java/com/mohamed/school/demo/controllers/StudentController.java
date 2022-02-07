package com.mohamed.school.demo.controllers;

import com.mohamed.school.demo.entities.Student;
import com.mohamed.school.demo.services.StudentServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/student")
public class StudentController {

    @Autowired
    private StudentServices studentServices;

    @GetMapping("{id}")
    public ResponseEntity<Student> retrieveStudentById(@PathVariable("id") long id) {
        return ResponseEntity.ok(studentServices.retrieveStudentById(id));
    }

    @GetMapping("/")
    public ResponseEntity<List<Student>> retrieveAllStudent() {
        return ResponseEntity.ok(studentServices.retrieveAllStudent());
    }

    @PostMapping("/")
    public ResponseEntity<String> saveStudent(@RequestBody Student student) {
        studentServices.saveStudent(student);
        return ResponseEntity.ok("Student was saved successfully");
    }

    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteStudent(@PathVariable("id") long id) {
        studentServices.deleteStudent(id);
        return ResponseEntity.ok("Student was deleted successfully");
    }
}
