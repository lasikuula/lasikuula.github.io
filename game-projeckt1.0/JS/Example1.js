class Example1 extends Phaser.Scene {
	constructor() {
		super({key:"Example1"});
	}

	preload() {
		this.load.image('backroundimage', 'IMG/backroundtest.jpg');

	}

	create() {
		this.image = this.add.image(400,300,'backroundimage');
	}
}