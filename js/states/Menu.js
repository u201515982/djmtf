Menu = function(game){}
Menu.prototype = {
	init:function(level_data){
		this.level_data = level_data;
	},
	create:function(){
		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    	this.scale.pageAlignHorizontally = true;
    	this.scale.pageAlignVertically = true;

		background = this.game.add.sprite(0,0,'background');

		button = this.game.add.button(0,0,'button-start',this.goGame,this,1,0,2);
		button.x = 700;
		button.y = 300;
		button.anchor.setTo(0.5);

		button.inputEnabled = true;
	},
	goGame:function(){
		this.game.state.start("GameState", true, false, this.level_data);
	}
}