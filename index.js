var template = {

  moveImage: function(){

    const position = { x: 0, y: 0 }

    interact('.draggable').draggable({
      listeners: {
        start (event) {
          console.log(event.type, event.target)
        },
        move (event) {
          position.x += event.dx
          position.y += event.dy
    
          event.target.style.transform =
            `translate(${position.x}px, ${position.y}px)`
        },
      }
    })


  },
  zoomImage: function(){
    var plus = $(".plus");
    var minus = $(".minus");
    var image = $(".draggable");
    var zoom = 600;

    plus.on("click", function(){

      zoom += 200;
      image.css("width", zoom)
    });

    minus.on("click", function(){

      zoom -= 200;
      image.css("width", zoom)
    });


  },
  abreLegenda: function(){

    $(".legenda-btn").on("click", function(){
      $(".container").fadeToggle()
    });
    
  },

  init: function(){
    this.moveImage();
    this.zoomImage();
    this.abreLegenda();
  }
}

template.init();




