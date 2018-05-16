package com.jxyq.mapper;

import com.jxyq.model.User;

import java.util.Map;

public interface UserMapper {
    User selectUser(Map map);

    void updateUser(Map map);

    void insertUser(User user);
}
