(function() {
    console.log('search.js here....');

    function resetHtml($allRows) {

        var resetReg = new RegExp("(<span.*highlighter.*>)(.*\\w+.*)(<\\/span>)", "gi");
        var labelHtml;
        $allRows.each(function(i, v) {
            labelHtml = v.innerHTML;
            if (resetReg.test(labelHtml)) {
                v.innerHTML = labelHtml.replace(resetReg, "$2");
            } else {
                $(v).removeClass('not-displaying');
            }
        });
    }


    function setUpSearch(e) {
        var value = $(e.target).val();
        var $allRows = $('li[style="list-style-type:circle;"]');

        resetHtml($allRows);

        if (value.length < 2) {
            e.stopPropagation();
            return;
        }

        getReleventResults(value, $allRows);
        console.info(value);
    }

    function getReleventResults(searchText, $allRows) {
        var searchReg = new RegExp("(<label{1}.*>)(.*?" + searchText + ".*?)(<\\/label>{1})", "gi");
        var labelHtml;

        $allRows.each(function(i, v) {
            labelHtml = v.innerHTML;
            if (searchReg.test(labelHtml)) {
                v.innerHTML = labelHtml.replace(searchReg, "$1<span class='highlighter'>$2</span>$3");

            } else {
                $(v).addClass('not-displaying');
            }
        });
    }

    $('.search-input').off('keyup.search').on('keyup.search', setUpSearch)
}());