package com.jxyq.mapper;

import com.jxyq.model.ClassInf;
import com.jxyq.model.School;

import java.util.Map;

public interface SchoolMapper {
    School selectSchool(Map map);

    void updateSchool(Map map);

    void insertSchool(School school);

    ClassInf selectClass(Map map);

    void updateClass(Map map);

    void insertClass(ClassInf classInf);

    void deleteClass(Map map);
}
