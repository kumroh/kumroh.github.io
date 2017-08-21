(function() {

    function draw(iData) {
        var list = d3.select('body div').selectAll('section');
        list = list.data(iData);
        list = list.enter();
        list = list.append('section');
        list = list.text(function(element) {
            return element.name + ' - ' + element.status;
        }).style('color', function(d) {
            if (d.status == 'online' || d.status == 'available')
                return 'lime';
            return 'red';
        });
    }

    var data = [{ name: 'Rohit Kumar', status: 'offline' }, { name: 'Rahul Kumar', status: 'online' },
        { name: 'Munuu', status: 'offline' },
        { name: 'Ritu kumari', status: 'away' },
        { name: 'Arman', status: 'available' },
        { name: 'Ranveer', status: 'unknown' }
    ];

    draw(data);

})();
