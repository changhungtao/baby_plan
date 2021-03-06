package com.jxyq.service.inf;

import com.jxyq.model.ClassInf;
import com.jxyq.model.School;

import java.util.Map;

public interface SchoolService {
    School selSchoolBySchoolId(int school_id);

    void updateSchool(Map map);

    void insertSchool(School school);

    ClassInf selClassByClassId(int class_id);

    void updateClass(Map map);

    void insertClass(ClassInf classInf);

    void deleteClass(int class_id);
}
