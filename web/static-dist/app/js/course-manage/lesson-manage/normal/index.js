webpackJsonp(["app/js/course-manage/lesson-manage/normal/index"],{0:function(e,s){e.exports=jQuery},"37f7b53294952a0a83bb":function(e,s,t){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var n=t("cd078759ac479d74803f"),i=a(n),o=t("7ab4a89ebadbfdecc2bf"),l=a(o),r=t("4602c3f5fe7ad9e3e91d"),c=a(r),u=t("1ff717687cc04d94af8f"),d=a(u),h=t("3b1883fc74dc0f9509af"),f=a(h),m=t("b86304422ee62173feb9"),g=t("d2df5de11d15032751c0"),p=a(g),k=t("397a3febc3cd42b42453"),b=a(k),v=t("4e68e437f5b716377a9d");new(function(e){function s(e){(0,l.default)(this,s);var t=(0,d.default)(this,(s.__proto__||(0,i.default)(s)).call(this,e));return new p.default,t}return(0,f.default)(s,e),(0,c.default)(s,[{key:"_flushTaskNumber",value:function(){this.$taskNumber||(this.$taskNumber=$("#task-num"));var e=$(".js-task-manage-item:not(.drag)").length;this.$taskNumber.text(e)}},{key:"_flushPublishLessonNum",value:function(){var e=$(".js-task-manage-item:not(.drag)").length,s=$(".js-lesson-unpublish-status.hidden").length,t=Translator.trans("course.plan_task.lessons_publish_status",{publishedNum:s,unpublishedNum:e-s});$(".js-lessons-publish-status").attr("data-content",t)}},{key:"_triggerAsTaskNumUpdated",value:function(e){var s=e.find(".js-lesson-box"),t=s.find(".js-task-manage-item").length>1;t?s.removeClass("hidden"):s.addClass("hidden"),this._triggerLessonIconAsTaskNumUpdated(e,t)}},{key:"_triggerLessonIconAsTaskNumUpdated",value:function(e,s){}},{key:"sortablelist",value:function(){for(var e=[".js-task-manage-lesson[show-num=1]",".js-task-manage-chapter"],s=0;s<e.length;s++)this._sortNumberByClassName(e[s]);this._sortUnitNumber(),this._sortTaskNumber()}},{key:"_sortTaskNumber",value:function(){var e=void 0;this.$element.find(".js-lesson-box").each(function(){var s=$(this).find(".js-task-manage-item");e=0,s.each(function(){$(this).find(".number").text(e++)})})}}]),s}(b.default))("#sortable-list"),(0,m.hiddenUnpublishTask)(),(0,m.addLesson)(),(0,v.TaskListHeaderFixed)()},"397a3febc3cd42b42453":function(e,s,t){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(s,"__esModule",{value:!0});var n=t("7ab4a89ebadbfdecc2bf"),i=a(n),o=t("4602c3f5fe7ad9e3e91d"),l=a(o),r=t("8f840897d9471c8c1fbd"),c=a(r),u=t("b334fd7e4c5a19234db2"),d=a(u),h=function(){function e(s){(0,i.default)(this,e),this.$element=$(s),this._sort(),this._event()}return(0,l.default)(e,[{key:"_event",value:function(){var e=this;this.$element.on("addItem",function(s,t){e.addItem(t),e.sortList()}),$("body").on("click","[data-position]",function(s){var t=$(this);e.position=t.data("position"),e.type=t.data("type")}),this._deleteChapter(),this._collapse(),this._publish(),this._createTask(),this._optional(),this._initLessonTaskAction()}},{key:"_collapse",value:function(){var e=['<i class="es-icon es-icon-chevronright cd-mr16"></i>','<i class="es-icon es-icon-keyboardarrowdown cd-mr16"></i>'];this.$element.on("click",".js-toggle-show",function(s){var t=$(s.currentTarget);t.toggleClass("toogle-hide");var a=t.closest(".task-manage-item"),n=a.hasClass("js-task-manage-chapter")?".js-task-manage-chapter":".js-task-manage-chapter,.js-task-manage-unit",i=a.nextUntil(n);t.hasClass("js-toggle-unit")?i.toggleClass("unit-hide"):i=i.not(".unit-hide"),i.stop().animate({height:"toggle",opacity:"toggle"},"fast"),t.hasClass("toogle-hide")?t.html(e[0]):t.html(e[1])})}},{key:"addItem",value:function(e){var s=$(e),t=$("#"+s.attr("id"));if(t.length>0)return t.replaceWith(s),void this.afterAddItem(s);switch(this.type){case"chapter":var a=this.$element.find("#chapter-"+this.position),n=a.nextUntil(".js-task-manage-chapter").last();0==n.length?a.after(s):n.after(s);break;case"task":this.$element.find("#chapter-"+this.position+" .js-lesson-box").append(s);var i=s.parents(".js-lesson-container");this._triggerAsTaskNumUpdated(i);break;case"lesson":var o=this.$element.find("#chapter-"+this.position),l=o.nextUntil(".js-task-manage-unit,.js-task-manage-chapter").last();0==l.length?o.after(s):l.after(s);break;default:this.$element.append(s)}$('[data-toggle="tooltip"]').tooltip(),this.handleEmptyShow(),this._flushTaskNumber(),this._flushPublishLessonNum(),this.clearPosition(),this.afterAddItem(s)}},{key:"clearPosition",value:function(){this.position="",this.type=""}},{key:"_deleteChapter",value:function(){var e=this;this.$element.on("click",".js-delete",function(s){var t=$(this),a=t.closest(".task-manage-item"),n=e._getDeleteText(t);cd.confirm({title:Translator.trans("site.delete"),content:n,okText:Translator.trans("site.confirm"),cancelText:Translator.trans("site.cancel")}).on("ok",function(){"task"==t.data("type")&&0==a.siblings().length&&a.closest(".js-task-manage-lesson").remove();var s=a.parents(".js-lesson-container");a.remove(),e._triggerAsTaskNumUpdated(s),e.handleEmptyShow(),e._flushTaskNumber(),e._flushPublishLessonNum(),$.post(t.data("url"),function(s){(0,d.default)("success",Translator.trans("site.delete_success_hint")),e.sortList()})})})}},{key:"_getDeleteText",value:function(e){return"task"==e.data("type")?Translator.trans("course.manage.task_delete_hint",{taskName:e.data("name")}):Translator.trans("course.manage.chapter_delete_hint",{name:e.data("name")})}},{key:"_sort",value:function(){var e=this,s=void 0;(0,c.default)({element:e.$element,ajax:!1,group:"nested",placeholder:'<li class="placeholder task-dragged-placeholder"></li>',isValidTarget:function(s,t){return e._sortRules(s,t)},onDragStart:function(e,t,a){var n=e.offset(),i=t.rootGroup.pointer;s={left:i.left-n.left,top:i.top-n.top},a(e,t)},onDrag:function(e,t){var a=e.height();$(".task-dragged-placeholder").css({height:a,"background-color":"#eee"}),e.css({left:t.left-s.left,top:t.top-s.top})}},function(s){e.sortList()})}},{key:"_sortRules",value:function(e,s){return(!e.hasClass("js-task-manage-item")||s.target.closest(".js-task-manage-lesson").attr("id")==e.closest(".js-task-manage-lesson").attr("id"))&&(!((e.hasClass("js-task-manage-unit")||e.hasClass("js-task-manage-chapter"))&&!s.target.hasClass("sortable-list"))&&(!e.hasClass("js-task-manage-lesson")||!s.target.hasClass("js-lesson-box")))}},{key:"handleEmptyShow",value:function(){0===$("#sortable-list").find("li").length?$(".js-task-empty").removeClass("hidden"):$(".js-task-empty").addClass("hidden")}},{key:"sortList",value:function(){var e=[];this.$element.find(".task-manage-item").each(function(){e.push($(this).attr("id"))}),$.post(this.$element.data("sortUrl"),{ids:e},function(e){}),this.sortablelist()}},{key:"setShowNum",value:function(e){0==e.attr("show-num")?e.attr("show-num",1):e.attr("show-num",0)}},{key:"sortablelist",value:function(){for(var e=[".js-task-manage-lesson[show-num=1]",".js-task-manage-chapter",".js-task-manage-item[show-num=1]",".js-task-manage-unit"],s=0;s<e.length;s++)this._sortNumberByClassName(e[s]);this._sortUnitNumber()}},{key:"_sortNumberByClassName",value:function(e){var s=1;this.$element.find(e).each(function(){$(this).find(".number").text(s++)})}},{key:"_sortUnitNumber",value:function(){var e=void 0;this.$element.find(".js-task-manage-chapter").each(function(){var s=$(this).nextUntil(".js-task-manage-chapter").filter(".js-task-manage-unit");e=1,s.each(function(){$(this).find(".number").text(e++)})})}},{key:"_publish",value:function(){var e=this,s=this,t={class:".js-publish-item, .js-delete, .js-lesson-unpublish-status",oppositeClas:".js-unpublish-item",isHideUnPublish:$("#isHideUnPublish").hasClass("checked"),flag:!1};this.$element.on("click",".js-unpublish-item",function(a){var n=$(a.target);t.success=Translator.trans("course.manage.task_unpublish_success_hint"),t.danger=Translator.trans("course.manage.task_unpublish_fail_hint")+":",e.toggleOptional(n,s,t)}),this.$element.on("click",".js-publish-item",function(a){var n=$(a.target);t.success=Translator.trans("course.manage.task_publish_success_hint"),t.danger=Translator.trans("course.manage.task_publish_fail_hint")+":",e.toggleOptional(n,s,t)})}},{key:"_flushTaskNumber",value:function(){this.$taskNumber||(this.$taskNumber=$("#task-num"));var e=$(".js-settings-item.active").length;this.$taskNumber.text(e)}},{key:"_flushPublishLessonNum",value:function(){var e=$(".js-settings-item.active").length,s=$(".js-lesson-unpublish-status.hidden").length,t=Translator.trans("course.plan_task.lessons_publish_status",{publishedNum:s,unpublishedNum:e-s});$(".js-lessons-publish-status").attr("data-content",t)}},{key:"_createTask",value:function(){this.$element.on("click",".js-create-task-btn",function(e){var s=$(this).data("url");$.get(s,function(e){e.code?($("#modal").html(""),$("#modal").append(e.html),$("#modal").modal({backdrop:"static",show:!0})):cd.message({type:"danger",message:Translator.trans(e.message)})}).fail(function(e){cd.message({type:"danger",message:e.responseJSON.error.message})})})}},{key:"_optional",value:function(){var e=this,s={class:".js-set-optional",oppositeClas:".js-unset-optional,.js-lesson-option-tag",success:Translator.trans("site.save_success_hint"),danger:Translator.trans("site.save_error_hint")+":",flag:!0};this.$element.on("click",".js-set-optional",function(t){var a=$(t.target);e.toggleOptional(a,e,s)}),this.$element.on("click",".js-unset-optional",function(t){var a=$(t.target);e.toggleOptional(a,e,s)})}},{key:"_initLessonTaskAction",value:function(){var e={"js-lesson-preview-btn":"js-hidden-lesson-preview-btn","js-lesson-edit-btn":"js-hidden-lesson-edit-btn","js-lesson-rename-btn":"js-hidden-lesson-rename-btn"};for(var s in e)!function(s){var t=e[s];$("#sortable-list").on("click","."+s,function(){var e=$(this).parents(".js-lesson-container"),s=e.find(".js-task-manage-item").attr("id"),a=s.split("-")[1],n=e.find("."+t),i=n.data("url").replace("%7BtaskId%7D",a);n.data("url",i),n.data("toggle")?n.click():window.open(n.data("url"),"_blank")})}(s)}},{key:"toggleOptional",value:function(e,s,t){var a=this,n=e.closest(".task-manage-item"),i=n.find(t.class),o=n.find(t.oppositeClas),l=$("#isHideUnPublish").hasClass("checked");$.post(e.data("url"),function(r){var c=!0;if(l&&(c=s.checkShouldSetProperty(e,n)),i.toggleClass("hidden"),o.toggleClass("hidden"),l&&c||!l&&t.flag){n.find(".display-text").toggleClass("hidden"),s.setShowNum(n),s.sortList()}a._flushPublishLessonNum(),cd.message({type:"success",message:t.success})}).fail(function(e){cd.message({type:"danger",message:t.danger+e.responseJSON.error.message})})}},{key:"checkShouldSetProperty",value:function(e,s){var t=s.find(".js-publish-item"),a=s.find(".js-set-optional"),n=t.hasClass("hidden"),i=a.hasClass("hidden"),o=!0;return e.hasClass("js-unpublish-item")?i&&(o=!1):e.hasClass("js-publish-item")?i&&(o=!1):e.hasClass("js-set-optional")?n||(o=!1):e.hasClass("js-unset-optional")&&(n||(o=!1)),o}},{key:"afterAddItem",value:function(e){}},{key:"_triggerAsTaskNumUpdated",value:function(e){var s=e.find(".js-lesson-box"),t=s.find(".js-task-manage-item").length>1;t?(s.removeClass("hidden"),e.find(".js-display-when-mul-tasks").removeClass("hidden"),e.find(".js-display-when-single-task").addClass("hidden")):(s.addClass("hidden"),e.find(".js-display-when-mul-tasks").addClass("hidden"),e.find(".js-display-when-single-task").removeClass("hidden"),e.find(".js-task-title").html(e.find(".js-lesson-title").html())),this._triggerLessonIconAsTaskNumUpdated(e,t)}},{key:"_triggerLessonIconAsTaskNumUpdated",value:function(e,s){var t=e.find(".js-lesson-icon"),a="";if(s)a=t[0].classList;else{a=0==e.find(".js-lesson-box").find(".es-icon").length?[]:e.find(".js-lesson-box").find(".es-icon")[0].classList}for(var n=0;n<a.length;n++){var i=a[n];i.startsWith("es-icon-")&&(s?t.removeClass(i):t.addClass(i))}}}]),e}();s.default=h},"4e68e437f5b716377a9d":function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.TaskListHeaderFixed=s.TabChange=s.showSettings=s.publishCourse=s.deleteCourse=s.closeCourse=void 0;var a=t("48bb97626aecb1ede6bc"),n=(s.closeCourse=function(){$("body").on("click",".js-close-course",function(e){var s=$(e.currentTarget);cd.confirm({title:Translator.trans("site.close"),content:Translator.trans("course.manage.close_hint"),okText:Translator.trans("site.confirm"),cancelText:Translator.trans("site.cancel")}).on("ok",function(){$.post(s.data("checkUrl"),function(e){if(e.warn)return void cd.confirm({title:Translator.trans("site.close"),content:Translator.trans(e.message),okText:Translator.trans("site.confirm"),cancelText:Translator.trans("site.cancel")}).on("ok",function(){n(s)});n(s)})})})},function(e){$.post(e.data("url"),function(e){e.success?(cd.message({type:"success",message:Translator.trans("course.manage.close_success_hint")}),location.reload()):cd.message({type:"danger",message:Translator.trans("course.manage.close_fail_hint")+":"+e.message})})});s.deleteCourse=function(){$("body").on("click",".js-delete-course",function(e){cd.confirm({title:Translator.trans("site.delete"),content:Translator.trans("course.manage.delete_hint"),okText:Translator.trans("site.confirm"),cancelText:Translator.trans("site.cancel")}).on("ok",function(){$.post($(e.currentTarget).data("url"),function(e){e.success?(cd.message({type:"success",message:Translator.trans("site.delete_success_hint")}),e.redirect?window.location.href=e.redirect:location.reload()):cd.message({type:"danger",message:Translator.trans("site.delete_fail_hint")+":"+e.message})})})})},s.publishCourse=function(){var e={title:"course.manage.publish_title",hint:"course.manage.publish_hint",success:"course.manage.publish_success_hint",fail:"course.manage.publish_fail_hint"};(0,a.publish)(".js-publish-course",e)},s.showSettings=function(){$("#sortable-list").on("click",".js-item-content",function(e){var s=$(e.currentTarget),t=s.closest(".js-task-manage-item");t.hasClass("active")?t.removeClass("active").find(".js-settings-list").stop().slideUp(500):(t.addClass("active").find(".js-settings-list").stop().slideDown(500),t.siblings(".js-task-manage-item.active").removeClass("active").find(".js-settings-list").hide())})},s.TabChange=function(){$('[data-role="tab"]').click(function(e){var s=$(this);$(s.data("tab-content")).removeClass("hidden").siblings('[data-role="tab-content"]').addClass("hidden")})},s.TaskListHeaderFixed=function(){var e=$(".js-task-list-header");if(e.length){var s=e.offset().top;$(window).scroll(function(t){$(window).scrollTop()>=s?e.addClass("fixed"):e.removeClass("fixed")})}}},b86304422ee62173feb9:function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});s.hiddenUnpublishTask=function(){cd.onoff({el:".js-switch"}).on("change",function(e){var s=$(".js-switch"),t=s.data("url"),a=s.parent().hasClass("checked")?1:0,n=s.parent().hasClass("checked")?"on":"off";cd.confirm({title:Translator.trans("confirm.oper.tip"),content:Translator.trans("confirm.lesson.hidden.tip."+n),okText:Translator.trans("site.yes"),cancelText:Translator.trans("site.no")}).on("ok",function(){$.post(t,{status:a}).success(function(e){cd.message({type:"success",message:Translator.trans("site.save_success_hint")}),location.reload()}).error(function(e){cd.message({type:"danger",message:e.responseJSON.error.message})})}).on("cancel",function(e,t){s[0].checked=!s[0].checked,s.parent().toggleClass("checked")})})},s.addLesson=function(){$("body").on("click",".js-lesson-create-btn",function(e){var s=$(e.currentTarget).data("url");$.get(s,{}).success(function(e){$("#modal").html(""),$("#modal").append(e.html),$("#modal").modal({backdrop:"static",show:!0})}).error(function(e){cd.message({type:"danger",message:Translator.trans(e.responseJSON.error.message)})})})}},d2df5de11d15032751c0:function(e,s,t){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(s,"__esModule",{value:!0});var n=t("7ab4a89ebadbfdecc2bf"),i=a(n),o=t("4602c3f5fe7ad9e3e91d"),l=a(o);t("d5e8fa5f17ac5fe79c78");var r=function(){function e(){(0,i.default)(this,e),this._defaultEvent()}return(0,l.default)(e,[{key:"_defaultEvent",value:function(){void 0===store.get("NormalLessonIntro")&&(this.showAdImage(),store.set("NormalLessonIntro","1")),this.closeModal()}},{key:"closeModal",value:function(){$("#js-intro").on("click",function(e){$("#js-intro").modal("hide")})}},{key:"showAdImage",value:function(){var e=$("#js-intro"),s=new Image,t=$(".js-data-local").data("local");s.src="en"===t?"/assets/img/lessonintro/lessonintro-en.jpg":"/assets/img/lessonintro/lessonintro.jpg";var a=$(s);e.find(".modal-body").append(a),e.modal("show")}}]),e}();s.default=r}},["37f7b53294952a0a83bb"]);