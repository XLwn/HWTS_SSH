package com.xl.service;

import com.xl.entity.THngyWorkTask;

import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.sql.Date;
import java.util.List;
import java.util.Map;

public interface AdminService {
    /**
     * 以Json形式返回管理员个人信息以及公告
     *
     * @param id HttpSession中的id
     * @return 返回json格式的数据
     */
    String getAdminHomePageInfo(String id, String department);

    /**
     * 以Json形式返回管理员主页最近任务信息
     *
     * @return 返回json格式的数据
     */
    String getAdminHomePageInfo_1(String dep);

    /**
     * 修改管理员信息
     *
     * @param id 管理员基本信息
     * @return 返回CONFIG类中的状态码
     */
    String updateAdminInfo(String id, String email, String qq, String pwd);

    /***
     * 修改公告
     * @param notice 公告内容
     * @return 返回状态码200成功，201失败
     *
     */
    String updateNotice(String notice, long did, long department);


    /***
     * 根据时间获取教师工作状态(查询时间内完成任务数)
     * @return 报表
     */
    List<Map<String, Object>> teacherReportsQuery(String dep, Date date1, Date date2, String teacher);

    /***
     * Excel批量注册 教师信息
     *
     * @param filePath
     * @return
     */
    String importExcelInfo(String filePath);

    /***
     * 发布任务
     * @param workName 任务标题
     * @param workText 任务详情
     * @param teacher 管理员指定的多个教师,以","隔开
     * @param qq 发布任务的管理员的qq
     */
    String saveTaskTeacherLinkInfo(long did, String workName, String teacher, String kinds, String workText, String
            qq, String startDate, String endDate);

    /**
     * 根据id获取任务数据
     *
     * @return json数据
     */
    String getTaskInfoForAdmin(long id);


    /***
     * 根据QQ获取管理员名称
     * @param qq
     * @return
     */
    String getTaskInfoForAdmin_1(String qq);

    /***
     * 根据ID查管理员QQ
     * @param id
     * @return
     */
    String getAdminQQ(String id);

    /***
     * 查该系所有任务分类
     * @param id
     * @return
     */
    String getKindsTask(String id);

    /**
     * 编辑保存任务，更新任务的数据
     *
     * @return 状态码
     */
    String updateTask(THngyWorkTask workTask);

    /**
     * 根据时间查询工作报表
     *
     * @return 表单集合
     */
    List<Map<String, Object>> taskReportsQuery(String dep, Date date1, Date date2);


    List<Map<String, Object>> taskReportsQuery2(String dep, Date date1, Date date2, String status, String admin);


    List<Map<String, Object>> taskReportsQuery3(String dep, Date date1, Date date2);

    /**
     * 根据时间查询工作报表
     */
    void downloadReports(HttpServletResponse response, List<Map<String, Object>> list, String fileName, String
            columnNames[], String keys[]);

    /***
     * 批量导入页信息部署
     * @return
     */
    String getInfo(HttpSession session);

    /***
     * 添加教师
     * @param teacherid
     * @param techername
     * @param teacherstaff
     * @param teacheremail
     * @param teacherphone
     * @param teacherpwd
     * @return
     */
    String addTeacher(String teacherid, String techername, String teacherstaff, String teacheremail, String
            teacherphone, String teacherpwd);

    /***
     * 根据教师名称删除相应Link行
     * @return
     */
    String deleteLinkWName(String wordId, String teachName);

    /***
     * 根据教师名称增加Link
     * @param wordId
     * @param teachName
     * @return
     */
    String addLinkWName(String wordId, String teachName);

    /***
     * 增加新分类
     * @param dep
     * @param kindsname
     * @return
     */
    String addKinds(String dep, String kindsname);

    /**
     * 获取所有任务分类
     *
     * @param dep
     * @return
     */
    String getAllKinds(String dep);

    /**
     * 更新分类信息
     *
     * @param kindId
     * @param dep
     * @param kindname
     * @return
     */
    String updateKinds(String kindId, String dep, String kindname);

    /**
     * 批量删除分类
     *
     * @param dep
     * @param text
     * @return
     */
    String deleteKinds(String dep, String text);

    /**
     * 获取所有管理员信息
     *
     * @param dep
     * @return
     */
    String getAllInfo(String dep);

    /***
     * 获取所有老师
     * @param dep
     * @return
     */
    List<Map<String, Object>> getAllTeacher(String dep);

    String updateTaskStatus(String status, String taskI);

    String deleteTask(String taskid);

    String setMailTest(String acoount, String pwd);

    String getMailInfo(String id);

    String updateMailInfo(String id, String acoount, String pwd);

    String updateMailInfo1(String id, String template_text);

    /**
     * 发信请求方法
     * @param adminId 发信人ID (管理员)
     * @param task_id 任务ID
     * @param status 任务要通知的状态(0 已下发, 1 已开始, 2 已完成 3 已结束)
     * @return
     */
    String setMailSend1(String adminId,String task_id, String status);
}
