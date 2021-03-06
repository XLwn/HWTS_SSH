var App = function() {
    var e, a, i, s, t, l, o, r, n, d = function() {
        e = $("#page-container"),
        i = $("header"),
        a = $("#page-content"),
        s = $("#sidebar"),
        t = $("#sidebar-brand"),
        l = $("#sidebar-extra-info"),
        r = $("#sidebar-scroll"),
        o = $("#sidebar-alt"),
        n = $("#sidebar-scroll-alt"),
        m(),
        p("init"),
        c(),
        (i.hasClass("navbar-fixed-top") || i.hasClass("navbar-fixed-bottom")) && $(window).on("scroll",
        function() {
            $(this).scrollTop() > 50 ? i.addClass("navbar-glass") : i.removeClass("navbar-glass")
        }),
        $(window).on("resize orientationchange",
        function() {
            g()
        }).resize();
        var d = $("#year-copy"),
        h = new Date;
        d.html(2014 === h.getFullYear() ? "2014" : "2014-" + h.getFullYear().toString().substr(2, 2)),
        b($(".btn-effect-ripple"), "btn-ripple"),
        $('[data-toggle="tabs"] a, .enable-tabs a').click(function(e) {
            e.preventDefault(),
            $(this).tab("show")
        }),
        $('[data-toggle="tooltip"], .enable-tooltip').tooltip({
            container: "body",
            animation: !1
        }),
        $('[data-toggle="popover"], .enable-popover').popover({
            container: "body",
            animation: !0
        }),
        $('[data-toggle="lightbox-image"]').magnificPopup({
            type: "image",
            image: {
                titleSrc: "title"
            }
        }),
        $('[data-toggle="lightbox-gallery"]').magnificPopup({
            delegate: "a",
            type: "image",
            gallery: {
                enabled: !0,
                navigateByImgClick: !0,
                arrowMarkup: '<button type="button" class="mfp-arrow mfp-arrow-%dir%" title="%title%"></button>',
                tPrev: "Previous",
                tNext: "Next",
                tCounter: '<span class="mfp-counter">%curr% of %total%</span>'
            },
            image: {
                titleSrc: "title"
            }
        }),
        $(".select-chosen").chosen({
            width: "100%"
        }),
        $(".select-select2").select2(),
        $(".input-slider").slider(),
        $(".input-tags").tagsInput({
            width: "auto",
            height: "auto"
        }),
        $(".input-timepicker").timepicker({
            minuteStep: 1,
            showSeconds: !0,
            showMeridian: !0
        }),
        $(".input-timepicker24").timepicker({
            minuteStep: 1,
            showSeconds: !0,
            showMeridian: !1
        }),
        $(".input-datepicker, .input-daterange").datepicker({
            weekStart: 1
        }).on("changeDate",
        function() {
            $(this).datepicker("hide")
        }),
        $(".pie-chart").easyPieChart({
            barColor: $(this).data("bar-color") ? $(this).data("bar-color") : "#777777",
            trackColor: $(this).data("track-color") ? $(this).data("track-color") : "#eeeeee",
            lineWidth: $(this).data("line-width") ? $(this).data("line-width") : 3,
            size: $(this).data("size") ? $(this).data("size") : "80",
            animate: 800,
            scaleColor: !1
        }),
        $("input, textarea").placeholder()
    },
    h = function() {
        var a = $("#page-wrapper");
        a.hasClass("page-loading") && (e.hasClass("enable-cookies") ? setTimeout(function() {
            a.removeClass("page-loading")
        },
        100) : a.removeClass("page-loading"))
    },
    c = function() {
        var a = $(".sidebar-nav a", s),
        i = $(".sidebar-nav-menu", s),
        t = $(".sidebar-nav-submenu", s);
        a.on("click",
        function(e) {
            var a, i, t, l, o = $(this);
            s.find(".sidebar-nav-ripple").removeClass("animate"),
            0 == o.children(".sidebar-nav-ripple").length && o.prepend('<span class="sidebar-nav-ripple"></span>');
            var a = o.children(".sidebar-nav-ripple");
            a.height() || a.width() || (i = Math.max(o.outerWidth(), o.outerHeight()), a.css({
                height: i,
                width: i
            })),
            t = e.pageX - o.offset().left - a.width() / 2,
            l = e.pageY - o.offset().top - a.height() / 2,
            a.css({
                top: l + "px",
                left: t + "px"
            }).addClass("animate")
        }),
        i.on("click",
        function() {
            var a = $(this),
            i = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
            return e.hasClass("sidebar-visible-lg-mini") && i > 991 ? a.hasClass("open") ? a.removeClass("open") : ($("#sidebar .sidebar-nav-menu.open").removeClass("open"), a.addClass("open")) : a.parent().hasClass("active") || (a.hasClass("open") ? a.removeClass("open") : ($("#sidebar .sidebar-nav-menu.open").removeClass("open"), a.addClass("open")), setTimeout(g, 50)),
            !1
        }),
        t.on("click",
        function() {
            var e = $(this);
            return e.parent().hasClass("active") !== !0 && (e.hasClass("open") ? e.removeClass("open") : (e.closest("ul").find(".sidebar-nav-submenu.open").removeClass("open"), e.addClass("open")), setTimeout(g, 50)),
            !1
        })
    },
    b = function(e, a) {
        e.css({
            overflow: "hidden",
            position: "relative"
        }),
        e.on("click",
        function(e) {
            var i, s, t, l, o = $(this);
            0 == o.children("." + a).length ? o.prepend('<span class="' + a + '"></span>') : o.children("." + a).removeClass("animate");
            var i = o.children("." + a);
            i.height() || i.width() || (s = Math.max(o.outerWidth(), o.outerHeight()), i.css({
                height: s,
                width: s
            })),
            t = e.pageX - o.offset().left - i.width() / 2,
            l = e.pageY - o.offset().top - i.height() / 2,
            i.css({
                top: l + "px",
                left: t + "px"
            }).addClass("animate")
        })
    },
    p = function(a) {
        if ("init" === a) {
            p("sidebar-scroll"),
            p("sidebar-alt-scroll");
            var s;
            $(window).on("resize orientationchange",
            function() {
                clearTimeout(s),
                s = setTimeout(function() {
                    p("sidebar-scroll")
                },
                150)
            })
        } else {
            var d = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
            if ("toggle-sidebar" === a) d > 991 ? (e.hasClass("sidebar-visible-lg-full") ? e.removeClass("sidebar-visible-lg-full").addClass("sidebar-visible-lg-mini") : e.hasClass("sidebar-visible-lg-mini") ? e.removeClass("sidebar-visible-lg-mini").addClass("sidebar-visible-lg-full") : e.addClass("sidebar-visible-lg-mini"), setTimeout(g, 50)) : (e.toggleClass("sidebar-visible-xs"), e.hasClass("sidebar-visible-xs") && p("close-sidebar-alt")),
            p("sidebar-scroll");
            else if ("open-sidebar" === a) d > 991 ? e.removeClass("sidebar-visible-lg-mini").addClass("sidebar-visible-lg-full") : (e.addClass("sidebar-visible-xs"), p("close-sidebar-alt")),
            p("sidebar-scroll"),
            setTimeout(g, 50);
            else if ("close-sidebar" === a) d > 991 ? e.removeClass("sidebar-visible-lg-full").addClass("sidebar-visible-lg-mini") : e.removeClass("sidebar-visible-xs"),
            p("sidebar-scroll");
            else if ("toggle-sidebar-alt" === a) d > 991 ? e.toggleClass("sidebar-alt-visible-lg") : (e.toggleClass("sidebar-alt-visible-xs"), e.hasClass("sidebar-alt-visible-xs") && p("close-sidebar"));
            else if ("open-sidebar-alt" === a) d > 991 ? e.addClass("sidebar-alt-visible-lg") : (e.addClass("sidebar-alt-visible-xs"), p("close-sidebar"));
            else if ("close-sidebar-alt" === a) e.removeClass(d > 991 ? "sidebar-alt-visible-lg" : "sidebar-alt-visible-xs");
            else if ("sidebar-scroll" == a) {
                if (e.hasClass("sidebar-visible-lg-mini") && d > 991) r.length && r.parent(".slimScrollDiv").length && (r.slimScroll({
                    destroy: !0
                }), r.attr("style", ""));
                else if (i.hasClass("navbar-fixed-top") || i.hasClass("navbar-fixed-bottom")) {
                    var h = $(window).height() - (("none" === t.css("display") ? 0 : t.outerHeight()) + ("none" === l.css("display") ? 0 : l.outerHeight()));
                    992 > d && (h -= 50),
                    r.length && !r.parent(".slimScrollDiv").length ? r.slimScroll({
                        height: h,
                        color: "#bbbbbb",
                        size: "3px",
                        touchScrollStep: 100,
                        railVisible: !1,
                        railOpacity: 1
                    }) : r.add(r.parent()).css("height", h)
                }
            } else if ("sidebar-alt-scroll" == a) if (n.length && !n.parent(".slimScrollDiv").length) {
                n.slimScroll({
                    height: o.outerHeight(),
                    color: "#bbbbbb",
                    size: "3px",
                    touchScrollStep: 100,
                    railVisible: !1,
                    railOpacity: 1
                });
                var c;
                $(window).on("resize orientationchange",
                function() {
                    clearTimeout(c),
                    c = setTimeout(function() {
                        p("sidebar-alt-scroll")
                    },
                    150)
                })
            } else n.add(n.parent()).css("height", o.outerHeight())
        }
    },
    g = function() {
        var e = $(window).height(),
        t = i.outerHeight(),
        l = s.outerHeight();
        i.hasClass("navbar-fixed-top") || i.hasClass("navbar-fixed-bottom") ? a.css("min-height", e) : l > e ? a.css("min-height", l - t) : a.css("min-height", e - t)
    },
    m = function() {
        var a, s, t, l = $(".sidebar-themes"),
        o = $("#theme-link"),
        r = o.length ? o.attr("href") : "default",
        n = i.hasClass("navbar-inverse") ? "navbar-inverse" : "navbar-default",
        d = e.hasClass("sidebar-light") ? "sidebar-light" : "",
        h = e.hasClass("enable-cookies") ? !0 : !1;
        h && (a = $.cookie("optionThemeColor") ? $.cookie("optionThemeColor") : !1, s = $.cookie("optionThemeHeader") ? $.cookie("optionThemeHeader") : !1, t = $.cookie("optionThemeSidebar") ? $.cookie("optionThemeSidebar") : !1, s ? i.removeClass("navbar-inverse navbar-default").addClass(s) : !1, t ? e.removeClass("sidebar-light").addClass(t) : !1, a && ("default" === a ? o.length && (o.remove(), o = $("#theme-link")) : o.length ? o.attr("href", a) : ($('link[href="css/themes-2.1.css"]').before('<link id="theme-link" rel="stylesheet" href="' + a + '">'), o = $("#theme-link"))), r = a ? a : r, n = s ? s : n, d = t ? t : d),
        $('a[data-theme="' + r + '"][data-theme-navbar="' + n + '"][data-theme-sidebar="' + d + '"]', l).parent("li").addClass("active"),
        $("a", l).click(function() {
            r = $(this).data("theme"),
            n = $(this).data("theme-navbar"),
            d = $(this).data("theme-sidebar"),
            $("li", l).removeClass("active"),
            $(this).parent("li").addClass("active"),
            i.removeClass("navbar-inverse navbar-default").addClass(n),
            e.removeClass("sidebar-light").addClass(d),
            "default" === r ? o.length && (o.remove(), o = $("#theme-link")) : o.length ? o.attr("href", r) : ($('link[href="css/themes-2.1.css"]').before('<link id="theme-link" rel="stylesheet" href="' + r + '">'), o = $("#theme-link")),
            h && ($.cookie("optionThemeColor", r, {
                expires: 7
            }), $.cookie("optionThemeHeader", n, {
                expires: 7
            }), $.cookie("optionThemeSidebar", d, {
                expires: 7
            }))
        })
    },
    v = function() {
        $.extend(!0, $.fn.dataTable.defaults, {
            sDom: "<'row'<'col-sm-6 col-xs-5'l><'col-sm-6 col-xs-7'f>r>t<'row'<'col-sm-5 hidden-xs'i><'col-sm-7 col-xs-12 clearfix'p>>",
            sPaginationType: "bootstrap",
            oLanguage: {
                sLengthMenu: "_MENU_",
                sSearch: '<div class="input-group">_INPUT_<span class="input-group-addon"><i class="fa fa-search"></i></span></div>',
                sInfo: "<strong>_START_</strong>-<strong>_END_</strong> of <strong>_TOTAL_</strong>",
                oPaginate: {
                    sPrevious: "",
                    sNext: ""
                }
            }
        }),
        $.extend($.fn.dataTableExt.oStdClasses, {
            sWrapper: "dataTables_wrapper form-inline",
            sFilterInput: "form-control",
            sLengthSelect: "form-control"
        })
    };
    return {
        init: function() {
            d(),
            h()
        },
        sidebar: function(e, a) {
            p(e, a)
        },
        datatables: function() {
            v()
        }
    }
} ();
$(function() {
    App.init()
});