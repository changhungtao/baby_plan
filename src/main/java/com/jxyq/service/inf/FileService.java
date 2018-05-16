package com.jxyq.service.inf;

import com.jxyq.model.FileInf;

import java.util.Map;

public interface FileService {
    FileInf selFileByMd5(String md5);

    void updateFile(Map map);

    void insertFile(FileInf fileInf);
}
