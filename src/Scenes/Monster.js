class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;
        this.mouthOffsetY = 65;
        this.eyeLeftOffsetX = -35;
        this.eyeLeftOffsetY = 20;
        this.eyeRightOffsetX = 33;
        this.eyeRightOffsetY = 10;
        this.eyeTopOffsetX = -10;
        this.eyeTopOffsetY = -45;
        this.legLeftOffsetX = -55;
        this.legLeftOffsetY = 150;
        this.legRightOffsetX = 50;
        this.legRightOffsetY = 150;
        this.armLeft1OffsetX = -90;
        this.armLeft1OffsetY = 30;
        this.armRight1OffsetX = 80;
        this.armRight1OffsetY = -10;
        this.antenna1OffsetX = 10;
        this.antenna1OffsetY = -105;
        this.antenna2OffsetX = 40;
        this.antenna2OffsetY = -90;
        this.antenna3OffsetX = 50;
        this.antenna3OffsetY = -45;

        // create keyboard bindings
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability

        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_greenF.png");
        my.sprite.mouthSmile = this.add.sprite(this.bodyX, this.bodyY + this.mouthOffsetY, "monsterParts", "mouth_closed_happy.png");
        my.sprite.mouthFangs = this.add.sprite(this.bodyX, this.bodyY + this.mouthOffsetY, "monsterParts", "mouthF.png")
        my.sprite.mouthFangs.visible = false;
        my.sprite.eyeLeft = this.add.sprite(this.bodyX + this.eyeLeftOffsetX, this.bodyY + this.eyeLeftOffsetY, "monsterParts", "eye_red.png");
        my.sprite.eyeRight = this.add.sprite(this.bodyX + this.eyeRightOffsetX, this.bodyY + this.eyeRightOffsetY, "monsterParts", "eye_red.png");
        my.sprite.eyeTop = this.add.sprite(this.bodyX + this.eyeTopOffsetX, this.bodyY + this.eyeTopOffsetY, "monsterParts", "eye_psycho_dark.png");
        my.sprite.legLeft = this.add.sprite(this.bodyX + this.legLeftOffsetX, this.bodyY + this.legLeftOffsetY, "monsterParts", "leg_darkC.png");
        my.sprite.legLeft.flipX = true;
        my.sprite.legRight = this.add.sprite(this.bodyX + this.legRightOffsetX, this.bodyY + this.legRightOffsetY, "monsterParts", "leg_redC.png");
        my.sprite.armLeft1 = this.add.sprite(this.bodyX + this.armLeft1OffsetX, this.bodyY + this.armLeft1OffsetY, "monsterParts", "arm_redA.png");
        my.sprite.armLeft1.flipX = true;
        my.sprite.armRight1 = this.add.sprite(this.bodyX + this.armRight1OffsetX, this.bodyY + this.armRight1OffsetY, "monsterParts", "arm_darkA.png");
        my.sprite.antenna1 = this.add.sprite(this.bodyX + this.antenna1OffsetX, this.bodyY + this.antenna1OffsetY, "monsterParts", "detail_white_antenna_small.png");
        my.sprite.antenna2 = this.add.sprite(this.bodyX + this.antenna2OffsetX, this.bodyY + this.antenna2OffsetY, "monsterParts", "detail_white_antenna_small.png");
        my.sprite.antenna3 = this.add.sprite(this.bodyX + this.antenna3OffsetX, this.bodyY + this.antenna3OffsetY, "monsterParts", "detail_white_antenna_small.png");
    }

    update() {
        let my = this.my;    // create an alias to this.my for readability

       
    }

}