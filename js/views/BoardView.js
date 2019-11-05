(function(views)
{
    var self;

    function BoardView(presenter)
    {
        this.presenter = presenter;
    }

    Object.defineProperties(BoardView.prototype,
    {
        init : {
            value: function()
            {
                var self = this;

                $("#boardList").html("");
					
                self.presenter.getList();

                $('#content').kinetic({cursor: "auto"});
            },
            enumerable: false
        },

        load : {
            value: function(data)
            {
                $.each( data.values, function( key, value )
                {
                    // Filtering by GEMweb Plus board
                    if(value.name.search("GEMweb") > -1){
                        $("#boardList").append("<option value='" + value.id + "'>" + value.name + "</option>")
                        data.isLast = true;
                    }
                });

                if(data.isLast)
                {
                    $("#boardList").change();
                }
            },
            enumerable: false
        },

        showError : {
            value: function(data)
            {
                console.log(data);
            },
            enumerable: false
        }
    });

    views.BoardView = BoardView;
})(standapp.views);
