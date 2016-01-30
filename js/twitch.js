$(document).ready(function() {
  console.log("started");
  var users = ["esl_sc2", "ogamingsc2", "freecodecamp", "storbeck", "terakilobyte", "habathcx","RobotCaleb","thomasballinger","noobs2ninjas","beohoff"];
  users.forEach(function(user) {
    var tag_add = "";
    $.getJSON("https://api.twitch.tv/kraken/streams/" + user, function(json) {
      if (json.stream == null) {
        var is_online = false;
      } else {
        var is_online = true;
      }
      function handle(is_on) {
        return function(data) {
          var tag_add = "";
          if (is_on) {
            tag_add = "<div class='items' style='background: #E5E4D7'><img src='";
          } else {
            tag_add = "<div class='items'><img src='";
          }
          if (data.logo != null) {
            tag_add += data.logo;
          } else {
            tag_add += "http://www.hotnewsweekly.com/sites/default/files/News/25_1135.jpg";
          }
          if (is_on) {
            tag_add += "' class='display_pics'/>" + data.display_name + "<div class='user_status'>" + data.status + "</div></div>";
            $("#container").prepend(tag_add);
          } else {
            tag_add += "' class='display_pics'/>" + data.display_name + "<div class='user_status'>Offline</div></div>";
            $("#container").append(tag_add);
          }
        };
      }
      $.getJSON(json._links.channel, handle(is_online));
    });
  });
});
