package com.jxyq.service.inf;

import com.jxyq.model.User;

import java.util.Map;

public interface UserService {
    User selUserByUsername(String username);

    User selUserByUserId(int user_id);

    void updateUser(Map map);

    void insertUser(User user);
}
