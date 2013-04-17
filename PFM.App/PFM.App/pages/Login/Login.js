// For an introduction to the Page Control template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232511
(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/Login.html", {
        
        onBeforeNavigate: function(e) {
            var txtLogin = document.getElementById("txtLogin");
            var txtPassword = document.getElementById("txtPassword");
            if (txtLogin) {
                if (txtLogin.value.length == 0) {
                    e.preventDefault();
                    var msg = "Digite seu login";
                    
                    WinJS.Promise.timeout(1500).done(function () {
                        //msg.innerText = "";
                    });
                }
            }
            if (txtPassword) {
                if (txtPassword.value.length == 0) {
                    e.preventDefault();
                    msg = "Digite sua senha";
                    
                    WinJS.Promise.timeout(1500).done(function () {
                        //msg.innerText = "";
                    });
                }
            }
        },
            
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
            // TODO: Initialize the page here.
        },

        unload: function () {
            // TODO: Respond to navigations away from this page.
        },

        updateLayout: function (element, viewState, lastViewState) {
            /// <param name="element" domElement="true" />

            // TODO: Respond to changes in viewState.
        }
    });
})();
