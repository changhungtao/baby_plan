package com.jxyq.service.impl;

import com.jxyq.mapper.FileMapper;
import com.jxyq.model.FileInf;
import com.jxyq.service.inf.FileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service("FileService")
public class FileServiceImpl implements FileService {
    @Autowired
    private FileMapper fileMapper;

    @Override
    public void insertFile(FileInf fileInf) {
        fileMapper.insertFile(fileInf);
    }

    @Override
    public void updateFile(Map map) {
        fileMapper.updateFile(map);
    }

    @Override
    public FileInf selFileByMd5(String md5) {
        Map map = new HashMap<String, Object>();
        map.put("md5", md5);
        return fileMapper.selectFile(map);
    }
}
