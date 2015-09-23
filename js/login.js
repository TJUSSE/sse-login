/*global Drupal, jQuery, window */
(function ($) {
  $('#sse_login_button').click(function () {
    var prefix = window.location.origin + Drupal.settings.basePath + Drupal.settings.pathPrefix;
    var $form = $('<form>');
    $form.attr('type', 'post');
    $form.attr('action', 'http://tjis.tongji.edu.cn:58080/amserver/UI/Login');
    $('<input>').attr('name', 'goto').val(prefix + 'sse_login/login').appendTo($form);
    $('<input>').attr('name', 'gotoOnFail').val(prefix + 'user/login?sse_sso_fail=true').appendTo($form);
    $('<input>').attr('name', 'Login.Token1').val($('#edit-name').val()).appendTo($form);
    $('<input>').attr('name', 'Login.Token2').val($('#edit-pass').val()).appendTo($form);
    $form.submit();
    return false;
  });
}(jQuery));
