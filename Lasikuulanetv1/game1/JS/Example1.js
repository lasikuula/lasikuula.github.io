class Example1 extends Phaser.Scene {
	constructor() {
		super({key:"Example1"});
	}

	preload() {
    this.load.image('backroundimage', 'img/background.jpg');
    this.load.image('hero', 'img/hero.png');
    this.load.image('point', 'img/point.png');

	}

	create() {
    this.image = this.add.image(400,300,'backroundimage');
    this.image = this.add.image(100,300, 'hero');

    this.input.keyboard.on('keyup_D', function(event){
      this.image.x += 10;
    },this);
	}
}