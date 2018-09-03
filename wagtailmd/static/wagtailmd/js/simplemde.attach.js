$(document).ready(function() {
    $(".markdown .field-content textarea").each(function(index, elem) {
        console.log('heelloo from simeplemde.attach.js')
        var mde = new SimpleMDE({
            element: elem,
            autofocus: false
        });
        mde.render();
    });
});
