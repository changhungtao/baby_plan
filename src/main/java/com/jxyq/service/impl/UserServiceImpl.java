package com.jxyq.service.impl;

import com.jxyq.mapper.UserMapper;
import com.jxyq.model.User;
import com.jxyq.service.inf.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service("UserService")
public class UserServiceImpl implements UserService {
    @Autowired
    private UserMapper userMapper;

    @Override
    public User selUserByUsername(String username) {
        Map map = new HashMap();
        map.put("username", username);
        return userMapper.selectUser(map);
    }

    @Override
    public User selUserByUserId(int user_id) {
        Map map = new HashMap();
        map.put("user_id", user_id);
        return userMapper.selectUser(map);
    }

    @Override
    public void updateUser(Map map) {
        userMapper.updateUser(map);
    }

    @Override
    public void insertUser(User user) {
        userMapper.insertUser(user);
    }
}
