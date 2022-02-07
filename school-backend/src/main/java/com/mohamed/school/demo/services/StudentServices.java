package com.mohamed.school.demo.services;

import com.mohamed.school.demo.entities.Student;
import com.mohamed.school.demo.repositories.StudentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentServices {

    @Autowired
    private StudentRepo studentRepo;

    public List<Student> retrieveAllStudent() {
        return studentRepo.findAll();
    }

    public Student retrieveStudentById(long id) {
        return studentRepo.findById(id);
    }

    public void saveStudent(Student student) {
        studentRepo.save(student);
    }

    public void deleteStudent(long id) {
        studentRepo.deleteById(id);
    }
}
