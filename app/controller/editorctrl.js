/**
 * Main application controller
 *
 * You can use this controller for your whole app if it is small
 * or you can have separate controllers for each logical section
 *
 */
;(function() {

  app.controller('EditorCtrl', EditorCtrl);

  EditorCtrl.$inject =['$scope','LocalStorage', 'QueryService'];


  function EditorCtrl($scope,LocalStorage,QueryService) {
    $scope.typing = function(){
        var iFrame =  document.getElementById('target');
       var iFrameBody;
       if ( iFrame.contentDocument )
       { // FF
         iFrameBody = iFrame.contentDocument.getElementsByTagName('body')[0];
       }
       else if ( iFrame.contentWindow )
       { // IE
         iFrameBody = iFrame.contentWindow.document.getElementsByTagName('body')[0];
       }
      iFrameBody.innerHTML =$scope.html.editor;
    }
  }
})();
