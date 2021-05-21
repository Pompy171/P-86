var canvas=new fabric.Canvas("my_canvas");

player_x=10;
player_y=10;

block_image_width=30;
block_image_height=30;

var player_object="";
var block_image_object="";

function player_update(){
    fabric.Image.fromURL("player.png", function(img){
        player_object=img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);

        player_object.set({top:player_y,left:player_x});
        canvas.add(player_object);
    });
}

function new_image(get_img){
    fabric.Image.fromURL(get_img, function(img){
        block_image_object=img;
        block_image_object.scaleToHeight(30);
        block_image_object.scaleToWidth(30);

        block_image_object.set({top:player_y,left:player_x});
        
    });
}