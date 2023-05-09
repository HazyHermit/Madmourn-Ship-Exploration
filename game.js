class MainDeck extends AdventureScene {
    constructor() {
        super("MainDeck", "Main Deck");
    }

    preload ()
    {
        this.load.path = './assets/';
        this.load.image('bucket', 'IMG_0135.jpeg')
        this.load.image('silver key', 'IMG_0135 (2).jpeg');
        this.load.image('fishing rod', 'IMG_0135 (1).jpeg');
    }
    onEnter() {

        let clip = this.add.text(this.w * 0.3, this.w * 0.3, " 🪣bucket")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => this.showMessage("The wire end of the bucket looks like it's going to pop off."))
            .on('pointerdown', () => {
                this.showMessage("You pried apart the wire handle from the bucket.");

                this.imageObject = this.add.sprite(this.w * 0.3, this.w * 0.3, 'bucket')
                this.imageObject.scale = 0.25;
                this.tweens.add({
                    targets: this.imageObject,
                    x: 700,
                    duration: 2000,
                    repeat: 0,
                    hold: 500,
                    repeatDelay: 500,
                    ease: 'cubic.in'
                });

                this.gainItem('wire');
                this.tweens.add({
                    targets: clip,
                    y: `-=${2 * this.s}`,
                    alpha: { from: 1, to: 0 },
                    duration: 500,
                    onComplete: () => clip.destroy()
                });
            })

        let below = this.add.text(this.w * 0.5, this.w * 0.1, "BELOW DECK ")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("sounds scary..Go below deck? ")
            })
            .on('pointerdown', () => {
                    this.gotoScene('BelowDeck');
                });

        this.add.text(this.w * 0.3, this.w * 0.4, "Steering Wheel")
        .setFontSize(this.s * 2)
        .setInteractive()
        .on('pointerover', () => {
            this.showMessage("Go to the steering wheel??");
        })
        .on('pointerdown', () => {
            this.gotoScene('SteeringWheel');
        });
            // .on('pointerdown', () => {
            //     this.showMessage("You pick up the key.");
            //     this.gainItem('key');
            //     this.tweens.add({
            //         targets: key,
            //         y: `-=${2 * this.s}`,
            //         alpha: { from: 1, to: 0 },
            //         duration: 500,
            //         onComplete: () => key.destroy()
            //     });
            // })

        let door = this.add.text(this.w * 0.1, this.w * 0.15, "side view")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                // if (this.hasItem("key")) {
                //     this.showMessage("You've got the key for this door.");
                // } else {
                this.showMessage("The ocean looks nice today..Go to the side of the ship?");
                })

            .on('pointerdown', () => {
                    this.gotoScene('SideofShip');
                });

    }
}


class SideofShip extends AdventureScene {
    constructor() {
        super("SideofShip", "Side of Ship.");
    }
    onEnter() {
        this.add.text(this.w * 0.3, this.w * 0.4, "Main Deck")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("Return to Main Deck?");
            })
            .on('pointerdown', () => {
                this.gotoScene('MainDeck');
            });

        let clip = this.add.text(this.w * 0.3, this.w * 0.3, " 🎣fishing rod")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => this.showMessage("The hook can be useful!"))
            .on('pointerdown', () => {
                this.showMessage("You cut the hook from the rod.");
                this.imageObject = this.add.sprite(this.w * 0.3, this.w * 0.3, 'fishing rod')
                this.imageObject.scale = 0.25;
                this.tweens.add({
                    targets: this.imageObject,
                    x: 700,
                    duration: 2000,
                    repeat: 0,
                    hold: 500,
                    repeatDelay: 500,
                    ease: 'cubic.in'
                });
                this.gainItem('fishing hook');
                this.tweens.add({
                    targets: key,
                    y: `-=${2 * this.s}`,
                    alpha: { from: 1, to: 0 },
                    duration: 500,
                    onComplete: () => key.destroy()
                });
            })

        let finish = this.add.text(this.w * 0.6, this.w * 0.2, '(finish the game)')
            // .setInteractive()
            // .on('pointerover', () => {
            //     this.showMessage('*giggles*');
            //     this.tweens.add({
            //         targets: finish,
            //         x: this.s + (this.h - 2 * this.s) * Math.random(),
            //         y: this.s + (this.h - 2 * this.s) * Math.random(),
            //         ease: 'Sine.inOut',
            //         duration: 500
            //     });
            // })
            .on('pointerdown', () => this.gotoScene('outro'));
    }
}

class BelowDeck extends AdventureScene {
    constructor() {
        super("BelowDeck", "Below Deck is such a scary place to be.");
    }
    onEnter() {
        this.add.text(this.w * 0.3, this.w * 0.4, "Main Deck")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("Return to Main Deck?");
            })
            .on('pointerdown', () => {
                this.gotoScene('MainDeck');
            });

        let key = this.add.text(this.w * 0.3, this.w * 0.3, "silver key")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => this.showMessage("It looks like it can open something."))
            .on('pointerdown', () => {
                this.showMessage("What a good find.");
                this.imageObject = this.add.sprite(this.w * 0.3, this.w * 0.3, 'silver key')
                this.imageObject.scale = 0.25;
                this.tweens.add({
                    targets: this.imageObject,
                    x: 700,
                    duration: 2000,
                    repeat: 0,
                    hold: 500,
                    repeatDelay: 500,
                    ease: 'cubic.in'
                });

                this.gainItem('silver key ');
                this.tweens.add({
                    targets: key,
                    y: `-=${2 * this.s}`,
                    alpha: { from: 1, to: 0 },
                    duration: 500,
                    onComplete: () => key.destroy()
                });
            })

    }
}

class SteeringWheel extends AdventureScene {
    constructor() {
        super("SteeringWheel", "A robot captain is in need of repair.");
    }
    onEnter() {
        this.add.text(this.w * 0.5, this.w * 0.5, "Main Deck")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("Return to Main Deck?");
            })
            .on('pointerdown', () => {
                this.gotoScene('MainDeck');
            });

            let door = this.add.text(this.w * 0.1, this.w * 0.2, "side view")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                // if (this.hasItem("key")) {
                //     this.showMessage("You've got the key for this door.");
                // } else {
                this.showMessage("The ocean looks nice today..Go to the side of the ship?");
                })

            .on('pointerdown', () => {
                    this.gotoScene('SideofShip');
                });

        this.add.text(this.w * 0.3, this.w * 0.4, "Below Deck")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("Return to Below Deck?");
            })
            .on('pointerdown', () => {
                this.gotoScene('BelowDeck');
            });

            let robot = this.add.text(this.w * 0.1, this.w * 0.15, "robot captain")
            .setFontSize(this.s * 4)
            .setInteractive()
            .on('pointerover', () => {
                if (this.hasItem("silver key")) {
                    this.showMessage("You've got the key for this robot.");
                } else {
                    this.showMessage("It still needs repair. Maybe a key of some sort?");
                }
            })
            .on('pointerdown', () => this.gotoScene('outro'));
    }
}





class Intro extends Phaser.Scene {
    constructor() {
        super('intro')
    }
    create() {
        this.add.text(50,50, "Madmourn Ship Exploration").setFontSize(50);
        this.add.text(50,100, "Click anywhere to begin.").setFontSize(20);
        this.input.on('pointerdown', () => {
            this.cameras.main.fade(1000, 0,0,0);
            this.time.delayedCall(1000, () => this.scene.start('IntroPt1'));
        });
    }
}

class IntroPt1 extends Phaser.Scene
{
    constructor ()
    {
        super({ key: 'IntroPt1' });
    }

    // preload ()
    // {
    //     this.load.image('arrow', 'assets/sprites/longarrow.png');
    // }

    create ()
    {
        this.textObject = this.add.text(
            300, //x
            100,//y
            "Loading...,",//text
            {
                font: "40px Times New Roman",
                color: "#ffffff",
            }
        );
        this.textObject = this.add.text(
            200, //x
            200,//y
            "(not really, click to continue.)",//text
            {
                font: "12px Times New Roman",
                color: "#ffffff",
            }
        );


        this.input.once('pointerdown', function (event)
        {

            console.log('From IntroPt1 to IntroPt2');

            this.scene.start('IntroPt2');

        }, this);
    }

}

class IntroPt2 extends Phaser.Scene
{
    constructor ()
    {
        super({ key: 'IntroPt2' });
    }

    // preload ()
    // {
    //     this.load.image('arrow', 'assets/sprites/longarrow.png');
    // }

    create ()
    {
        this.textObject = this.add.text(
            300, //x
            100,//y
            "The robot captain on the Madmourn ship is in need of repair.,",//text
            {
                font: "40px Times New Roman",
                color: "#ffffff",
            }
        );
        this.textObject = this.add.text(
            200, //x
            200,//y
            "OBJECTIVE: Fix the robot captain.",//text
            {
                font: "30px Times New Roman",
                color: "#ffffff",
            }
        );


        this.input.once('pointerdown', function (event)
        {

            console.log('From IntroPt2 to MainDeck');

            this.scene.start('MainDeck');

        }, this);
    }

}

class Outro extends Phaser.Scene {
    constructor() {
        super('outro');
    }
    create() {
        this.add.text(50, 50, "That's all!").setFontSize(50);
        this.add.text(50, 100, "Click anywhere to restart.").setFontSize(20);
        this.input.on('pointerdown', () => this.scene.start('intro'));
    }
}


const game = new Phaser.Game({
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1920,
        height: 1080
    },
    scene: [Intro,IntroPt1,IntroPt2, MainDeck, SideofShip, BelowDeck,SteeringWheel, Outro],
    title: "Adventure Game",
});

