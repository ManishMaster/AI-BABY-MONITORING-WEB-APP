img = "";
status = "";
objects = [];

function preload() {
          img = loadImage('https://i0.wp.com/post.healthline.com/wp-content/uploads/2019/10/Baby_Sleeping_Blanket_1296x728-header-1296x728.jpg?w=1155&h=1528');
}

function setup() {
          canvas = createCanvas(500, 400);
          canvas.center();
          objectDetector = ml5.objectDetector('cocossd', modelLoaded);

}

function modelLoaded() {
          console.log("The Model has been loaded");
          status = true;
          objectDetector.detect(img, gotResult);
}

function gotResult(error, results) {
          if (error) {
                    console.error(error);
          }
          console.log(results);
          objects = results;
          if (results = !"person") {
                    window.alert("Where is the baby??");
          }
}

function draw() {
          image(img, 0, 0, 500, 400);
          if (status != "") {
                    for (var i = 0; i < objects.length; i++) {

                              fill("#ae2900");
                              percent = floor(objects[i].confidence * 100);
                              text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
                              noFill();
                              stroke("#ae2900");
                              rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
                    }
          }
          /* fill("#ae2900");
           text("dog", 45, 75);
           noFill();
           stroke("#ae2900");
           rect(20, 40, 300, 250);

           fill("#ae2900");
           text("Cat", 300, 100);
           noFill();
           stroke("#ae2900");
           rect(225, 90, 250, 300);*/
}