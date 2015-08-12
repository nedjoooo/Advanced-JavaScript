var poppy = poppy || {};

(function(scope) {
    function pop(type, title, message, callback) {

        var popup;

        switch (type) {
            case 'success':
                popup = new scope._models.Success(title, message);
                break;
            case 'info':
                popup = new scope._models.Info(title, message);
                break;
            case 'error':
                popup = new scope._models.Error(title, message);
                break;
            case 'warning':
                popup = new scope._models.Warning(title, message, callback);
                break;
        }

        var popupInfo = popup._popupData;

        var view = scope._viewFactory.createPopupView(popupInfo);

        document.body.appendChild(view);
        processErrorOut(view, popupInfo);
        processInfoClosing(view, popupInfo);
        processWarningCallback(view, popupInfo);
    }

    function processErrorOut(element, popupInfo) {
        if(popupInfo.autoHide === true) {
            setTimeout(function() {
                document.body.removeChild(element);
            }, popupInfo.timeout);
        }
    }

    function processInfoClosing(element, popupInfo) {
        if(popupInfo.type === 'info') {
            element.getElementsByClassName('poppy-close-button')['0']
                .addEventListener('click', function() {
                    document.body.removeChild(element);
                });

        }
    }

    function processWarningCallback(element, popupInfo) {
        if(popupInfo.callback) {
            element.addEventListener('click', function() {
                popupInfo.callback();
            })
        }
    }

    scope.pop = pop;
})(poppy);



