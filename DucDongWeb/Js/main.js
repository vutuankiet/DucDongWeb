var rangeslider = document.getElementById("sliderRange");
    var output = document.getElementById("valueRange");
    output.innerHTML = rangeslider.value;
      
    rangeslider.oninput = function() {
      output.innerHTML = new Intl.NumberFormat('vi-VN').format(this.value);
    }

    document.getElementById("img-active").addEventListener("mouseover", mouseOver);
    document.getElementById("img-active").addEventListener("mouseout", mouseOut);
    document.getElementById("img-none").addEventListener("mouseover", mouseOver);
    document.getElementById("img-none").addEventListener("mouseout", mouseOut);
    
    function mouseOver() {
      document.getElementById("img-active").style.display = "none";
      document.getElementById("img-none").style.display = "inline";
    }
    
    function mouseOut() {
      document.getElementById("img-active").style.display = "inline";
      document.getElementById("img-none").style.display = "none";
    }
    

