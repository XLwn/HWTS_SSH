/*
 *  Document   : uiTables.js
 *  Author     : pixelcave
 */
var UiTables = function () {
    return {
        init: function () {
            App.datatables(), $("#example-datatable").dataTable({
                columnDefs: [{orderable: !1, targets: [4]}],
                pageLength: 10,
                lengthMenu: [[10, 20, 50], [10, 20, 50]]
            }), $(".dataTables_filter input").attr("placeholder", "Search"), $("thead input:checkbox").click(function () {
                var e = $(this).prop("checked"), s = $(this).closest("table");
                $("tbody input:checkbox", s).each(function () {
                    $(this).prop("checked", e)
                })
            });
            var e = $("#general-table"), s = $("#style-borders");
            $("#style-default").on("click", function () {
                s.find(".btn").removeClass("active"), $(this).addClass("active"), e.removeClass("table-bordered").removeClass("table-borderless")
            }), $("#style-bordered").on("click", function () {
                s.find(".btn").removeClass("active"), $(this).addClass("active"), e.removeClass("table-borderless").addClass("table-bordered")
            }), $("#style-borderless").on("click", function () {
                s.find(".btn").removeClass("active"), $(this).addClass("active"), e.removeClass("table-bordered").addClass("table-borderless")
            }), $("#style-striped").on("click", function () {
                $(this).toggleClass("active"), $(this).hasClass("active") ? e.addClass("table-striped") : e.removeClass("table-striped")
            }), $("#style-condensed").on("click", function () {
                $(this).toggleClass("active"), $(this).hasClass("active") ? e.addClass("table-condensed") : e.removeClass("table-condensed")
            }), $("#style-hover").on("click", function () {
                $(this).toggleClass("active"), $(this).hasClass("active") ? e.addClass("table-hover") : e.removeClass("table-hover")
            })
        },
        init_1: function () {
            App.datatables(), $("#example-datatable_1").dataTable({
                columnDefs: [{orderable: !1, targets: [4]}],
                pageLength: 10,
                lengthMenu: [[10, 20, 50], [10, 20, 50]]
            }), $(".dataTables_filter input").attr("placeholder", "Search"), $("thead input:checkbox").click(function () {
                var e = $(this).prop("checked"), s = $(this).closest("table");
                $("tbody input:checkbox", s).each(function () {
                    $(this).prop("checked", e)
                })
            });
            var e = $("#general-table"), s = $("#style-borders");
            $("#style-default").on("click", function () {
                s.find(".btn").removeClass("active"), $(this).addClass("active"), e.removeClass("table-bordered").removeClass("table-borderless")
            }), $("#style-bordered").on("click", function () {
                s.find(".btn").removeClass("active"), $(this).addClass("active"), e.removeClass("table-borderless").addClass("table-bordered")
            }), $("#style-borderless").on("click", function () {
                s.find(".btn").removeClass("active"), $(this).addClass("active"), e.removeClass("table-bordered").addClass("table-borderless")
            }), $("#style-striped").on("click", function () {
                $(this).toggleClass("active"), $(this).hasClass("active") ? e.addClass("table-striped") : e.removeClass("table-striped")
            }), $("#style-condensed").on("click", function () {
                $(this).toggleClass("active"), $(this).hasClass("active") ? e.addClass("table-condensed") : e.removeClass("table-condensed")
            }), $("#style-hover").on("click", function () {
                $(this).toggleClass("active"), $(this).hasClass("active") ? e.addClass("table-hover") : e.removeClass("table-hover")
            })
        }
    }
}();