window.onload = () => {
  $("#sendbutton").click(() => {
    
    link = $("#link");
    input = $("#imageinput")[0];
    conf = $("#conf").val();
    conf = conf/100;
    ovl = $("#ovl").val();
    ovl = ovl/100;
    
    if (input.files && input.files[0]) {
      
      let formData = new FormData();
      formData.append("file", input.files[0]);
      formData.append("conf", conf);
      formData.append("ovl", ovl);
      
      $.ajax({
        url: "/detect", // fix this to your liking
        type: "POST",
        data: formData,
        cache: false,
        processData: false,
        contentType: false,
        error: function (data) {
          console.log("upload error", data);
          console.log(data.getAllResponseHeaders());
        },
        success: function (data) {
          console.log(data);
          
          $("#link").css("visibility", "visible");

          $("#download").css("display", "block");
          $("#download").attr("src", "static/" + data);
          
          $("#json").css("display", "block");
          $.getJSON("static/" + data + ".json", function(j_data){
              document.getElementById("json").innerHTML = JSON.stringify(j_data, undefined, 2);
          }).fail(function(){
              console.log("An error has occurred.");
          });
          
          console.log(data);
        },
      });
    }
  });
};


