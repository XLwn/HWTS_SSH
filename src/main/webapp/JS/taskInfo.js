var id = window.location.href.split("id=")[1];
var old_teache = ""; //存放老师改变前的状态
if (id != null) {
    $.ajax({
        type: "POST",
        url: "/getTaskInfo",
        error: function () {
            //服务器返回失败调用的方法
            alert("服务器错误");
        },
        data: {id: id},
        dataType: "json",
        success: function (data) {

            var info = data[0];
            if (info == null) {
                swal("服务器错误", "","error");
                window.history.go(-1);
            }
            $("#title").val(info.taskName);
            $("#details").val(info.taskText);
            $("#qq").val(info.qq);
            $("#kinds").html("<option value=\"" + info.kindId + "\" id=\"op_" + info.kindId + "\">" + info.kindText + "</option>");
            $("#date").val(info.taskDate);
            $("#date1").val(info.taskDate1.substring(0, 10));
            $("#date2").val(info.taskDate2);
            $("#date3").val(info.taskDate3.substring(0, 10));
            var tsStr = "";
            var teachers = info.teachers.split(",");
            var teachersId = info.teachersId.split(",");
            var oldnumber = new Array();
            for (var j = 0; j < teachers.length; j++) {
                tsStr += "<a href=\"teacherInfo?id=" + teachersId[j] + "\" class=\"btn btn-sm btn-warning \" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"查看老师信息\">" + teachers[j] + "</a>  ";
                oldnumber.push(teachers[j]);
            }
            $('.selectpicker').val(oldnumber);
            $('.selectpicker').selectpicker('render');
            $("#teachers").append(tsStr);
            if (info.taskState == "已完成") {
                $("#taskState option[value='已完成']").attr("selected", true);
            } else {
                $("#taskState option[value='未完成']").attr("selected", true);
            }
            setPoint();
        }
    });
}

function setPoint() {
    $.ajax({
        type: "POST",
        url: "/getKindsTask",
        data: {},
        dataType: "json",
        error: function () {
            //服务器返回失败调用的方法
            alert("服务器错误");
        },
        success: function (data) {
            var select_val = $("#kinds").val();
            var text = "";
            for (var i = 0; i < data.length; i++) {
                text += "<option value=\"" + data[i].kindId + "\" id=\"op_" + data[i].kindId + "\">" + data[i].kindName + "</option>"
            }
            $("#kinds").html(text);
            $("#kinds").val(select_val);
        }
    });
}


$("#sendEmail").click(function () {
    swal({
        title: "确认发邮件通知老师吗",
        text: "发信之前请检查【发信配置】页面是否配置好发信信息，否则将发送失败",
        type: "info",
        showCancelButton: true,
        closeOnConfirm: false,
        showLoaderOnConfirm: true,
        confirmButtonText: "确定",
        cancelButtonText: "取消",
    }, function () {
        $.ajax({
            type: "POST",
            url: "/setMailSend1",
            error: function () {
                //服务器返回失败调用的方法
                alert("服务器错误");
            },
            data: {id: id, status: 0},
            dataType: "json",
            success: function (data) {
                if (data == 201 || data == "201"){
                    swal("请先配置发信信息", "检测到未配置发信信息，无法发信！请前往【发信配置】处配置您的发信信息","error");
                } else if (data == 202 || data == "202"){
                    swal("发送失败", "请检测发信授权码是否正确/过期","error");
                } else if (data == 200 || data == "200"){
                    swal("已发送完毕", "老师已得到邮件提醒","success");
                    setTimeout(function () {
                        location.reload();
                    }, 1000);
                }
            }
        });
    });
});

$("#editInfo").click(function () {
    old_teache += $('#select_teacher').val();

    $("#editInfo").attr("disabled", true);
    $("#saveInfo").attr("disabled", false);

    $("#tea_1").attr("style", "display: none");
    $("#tea_2").attr("style", "display: ");
    $("#title").attr("disabled", false);
    $("#details").attr("disabled", false);
    $("#kinds").attr("disabled", false);
    $("#notice-text").attr("disabled", false);
    $("#taskState").attr("disabled", false);
    $("#date1").attr("disabled", false);
    $("#date3").attr("disabled", false);
});


$("#saveInfo").click(function () {
    var workName = $("#title").val();
    var workKinds = $("#kinds").val();
    var startDate = $("#date1").val();
    var endDate = $("#date3").val();
    var teacher = '';//选择的老师
    teacher += $('#select_teacher').val();
    var workText = $("#details").val();
    var qq = $("#qq").val();
    var workState = $("#taskState").find("option:selected").text();
    var date = $("#date").val();
    if (workName == "") {
        $('#title').focus();
        swal("保存错误", "标题未输入", "error");
    } else if (workText == "") {
        $("#details").focus();
        swal("保存错误", "任务详情未输入", "error");
    } else if (qq == "") {
        $("#qq").focus();
        swal("保存错误", "QQ未输入", "error");
    } else {
        // alert(workName + " " + workKinds + " " + old_teache + "=" + teacher + " " + workText + " " + qq + " " + workState + " " + date);
        if (id != null) {
            swal({
                title: "确认保存吗？",
                text: "",
                type: "info",
                showCancelButton: true,
                closeOnConfirm: false,
                showLoaderOnConfirm: true,
                confirmButtonText: "确定",
                cancelButtonText: "取消",
            }, function () {
                $.ajax({
                    type: "POST",
                    url: "/updateTask",
                    data: {
                        workId: id,
                        workName: workName,
                        startDate: startDate + " 00:00:00",
                        endDate: endDate + " 00:00:00",
                        workKinds: workKinds,
                        oldteacher: old_teache.toString(),
                        teacher: teacher.toString(),
                        workText: workText,
                        qq: qq,
                        workState: workState,
                        workTime: date
                    },
                    dataType: "json",
                    error: function () {
                        //服务器返回失败调用的方法
                        alert("服务器错误");
                    },
                    success: function (data) {
                        if (data = "100") {
                            swal("保存成功", "", "success");

                            setTimeout(function () {
                                window.location.reload();
                            }, 2000)
                        } else {
                            swal("保存失败", "错误代码" + data, "error");
                        }
                    }
                });
            });

        } else {
            swal("保存错误", "无法获取当前任务信息", "error");
        }
    }


});