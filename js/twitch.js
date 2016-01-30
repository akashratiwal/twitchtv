$(document).ready(function() {
  console.log("started");
  var users = ["esl_sc2", "ogamingsc2", "freecodecamp", "storbeck", "terakilobyte", "habathcx","RobotCaleb","thomasballinger","noobs2ninjas","beohoff"];
  for (var user in users) {
    $.ajax({
      url: 'https://api.twitch.tv/kraken/channels/' + users[user],
      dataType: 'jsonp',
      success: function (val) {
        if (val.logo != null) {
          if (val.status != null) {
            var tag_add = "<div class='items'><img src='" + val.logo + "' class='display_pics'>" + val.display_name + "<div class='status'></div></div>";
          } else {
            var tag_add = "<div class='items' style='background: #E5E4D7;'><img src='" + val.logo + "' class='display_pics'>" + val.display_name + "<div class='status'></div></div>";
          }
        } else {
          var no_image_path = "http://www.hotnewsweekly.com/sites/default/files/News/25_1135.jpg";
          if (val.status != null) {
            var tag_add = "<div class='items'><img src='" + no_image_path + "' class='display_pics'>" + val.display_name + "<div class='status'></div></div>";
          } else {
            var tag_add = "<div class='items' style='background: #E5E4D7;'><img src='" + no_image_path + "' class='display_pics'>" + val.display_name + "<div class='status'></div></div>";
          }
        }
        //console.log(tag_add);
        $("#container").append(tag_add);
      }
    });
  }
});
