<div class="row">
    <div class="col-xs-12 col-md-7 text-xs-center text-md-left">
        <h1><%= Convert.ToString(PortalSettings.ActiveTab.Title)%></h1>
        <% if not PortalSettings.ActiveTab.Description = nothing Then  %>
            <p class="text-justify"><%= Convert.ToString(PortalSettings.ActiveTab.Description)%></p>
        <% end if %>
    </div>
    <div class="col-xs-12 col-md-5 text-xs-center text-md-right">
        <div class="col-md-12"><div runat="server" id="SocialPane" /></div>        
    </div>
</div>