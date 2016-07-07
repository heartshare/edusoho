define(function(require, exports, module) {

    var Notify = require('common/bootstrap-notify');
    var Uploader = require('upload');
    var BatchUploader = require('../../../../topxiaweb/js/controller/uploader/batch-uploader');

    exports.run = function() {

        var $form = $("#cloud-setting-form");
        var uploader = new Uploader({
            trigger: '#cloud-video-watermark-upload',
            name: 'watermark',
            action: $('#cloud-video-watermark-upload').data('url'),
            data: {'_csrf_token': $('meta[name=csrf-token]').attr('content') },
            accept: 'image/*',
            error: function(file) {
                Notify.danger(Translator.trans('上传云视频播放器水印失败，请重试！'));
            },
            success: function(response) {
                response = $.parseJSON(response);
                $("#cloud-video-watermark-container").html('<img src="' + response.url + '">');
                $form.find('[name=video_watermark_image]').val(response.path);
                $("#cloud-video-watermark-remove").show();
                Notify.success(Translator.trans('上传云视频播放器水印成功！'));
            }
        });

        $("#cloud-video-watermark-remove").on('click', function(){
            if (!confirm(Translator.trans('确认要删除云视频播放器水印吗？'))) return false;
            var $btn = $(this);
            $.post($btn.data('url'), function(){
                $("#cloud-video-watermark-container").html('');
                $form.find('[name=video_watermark_image]').val('');
                $btn.hide();
                Notify.success(Translator.trans('删除云视频播放器水印成功！'));
            }).error(function(){
                Notify.danger(Translator.trans('删除云视频播放器水印失败！'));
            });
        });

        var uploader = new Uploader({
            trigger: '#cloud-video-embed-watermark-upload',
            name: 'watermark',
            action: $('#cloud-video-embed-watermark-upload').data('url'),
            data: {'_csrf_token': $('meta[name=csrf-token]').attr('content') },
            accept: 'image/*',
            error: function(file) {
                Notify.danger(Translator.trans('上传云视频内嵌水印失败，请重试！'));
            },
            success: function(response) {
                response = $.parseJSON(response);
                $("#cloud-video-embed-watermark-container").html('<img src="' + response.url + '">');
                $form.find('[name=video_embed_watermark_image]').val(response.path);
                $("#cloud-video-embed-watermark-remove").show();
                Notify.success(Translator.trans('上传云视频内嵌水印成功！'));
            }
        });

        $("#cloud-video-embed-watermark-remove").on('click', function(){
            if (!confirm(Translator.trans('确认要删除云视频水印吗？'))) return false;
            var $btn = $(this);
            $.post($btn.data('url'), function(){
                $("#cloud-video-embed-watermark-container").html('');
                $form.find('[name=video_embed_watermark_image]').val('');
                $btn.hide();
                Notify.success(Translator.trans('删除云视频内嵌水印成功！'));
            }).error(function(){
                Notify.danger(Translator.trans('删除云视频内嵌水印失败！'));
            });
        });


        $('.video-watermark-property-tips')
          .popover({
            html: true,
            placement: 'top',
            trigger: 'hover',
            animation:true,
            container:'body'
        });

       if ($('.upload-mode').length >0 ) {
            var $el = $('#balloon-uploader');


            if(!$el.is(":hidden")){
                initUploader()
                $el.data('init', true);
            }

            $(".edit-btn",".head-leader-edit").on('click', function(){
                $(".file-chooser-main").show();
                $(".head-leader-edit").hide();

                if(!$el.data('init')){
                    initUploader();
                }
            });
        }

        function initUploader()
        {
            var $el = $('#balloon-uploader');
            var uploader = new BatchUploader({
                element: $el,
                initUrl: $el.data('initUrl'),
                finishUrl: $el.data('finishUrl'),
                uploadAuthUrl: $el.data('uploadAuthUrl'),
                multi: false
            });

            uploader.on('file.uploaded', function(file){
                if (file) {
                    $(".head-leader-edit").find('[data-role=placeholder]').html(file.name);
                    $(".file-chooser-main").hide();
                    $(".head-leader-edit").show();
                }
            });
        }
    }

})