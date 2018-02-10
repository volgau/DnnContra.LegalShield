<div class="modal fade" id="searchModal" tabindex="-1" role="dialog" aria-labelledby="searchModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="searchModalLabel">Поиск</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Закрыть">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div><!-- ./modal-header -->
            <div class="modal-body">
                <div class="search">
                    <dnn:SEARCH ID="dnnSearch" runat="server" 
                        ShowSite="false" 
                        ShowWeb="false" 
                        EnableTheming="true" 
                        Submit="Поиск" 
                        CssClass="SearchButton" />
                </div>
            </div><!-- ./modal-body -->
        </div><!-- ./modal-content -->
    </div><!-- ./modal-dialog -->
</div> <!-- ./modal -->