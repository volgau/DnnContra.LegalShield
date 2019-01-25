<script>
window.contraSkin = {
    baseUrl: '<%= DotNetNuke.Common.Globals.AddHTTP (PortalSettings.Current.PortalAlias.HTTPAlias) %>'
    ,profileUrl: '<%= DotNetNuke.Common.Globals.ProfileURL (-1) %>'
    //,loginUrl: '<%= DotNetNuke.Common.Globals.LoginURL (DotNetNuke.Common.Globals.ProfileURL (-1), false) %>'
};
</script>