class MainDeck extends AdventureScene {
    constructor() {
        super("MainDeck", "First Room");
    }

    onEnter() {

        let clip = this.add.text(this.w * 0.3, this.w * 0.3, "bucket")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => this.showMessage("The wire end of the bucket looks like it's going to pop off."))
            .on('pointerdown', () => {
                this.showMessage("You pried apart the wire handle from the bucket.");
                this.gainItem('wire');
                this.tweens.add({
                    targets: clip,
                    y: `-=${2 * this.s}`,
                    alpha: { from: 1, to: 0 },
                    duration: 500,
                    onComplete: () => clip.destroy()
                });
            })

            // .on('pointerdown', () => {
            //     this.showMessage("No touching!");
            //     this.tweens.add({
            //         targets: clip,
            //         x: '+=' + this.s,
            //         repeat: 2,
            //         yoyo: true,
            //         ease: 'Sine.inOut',
            //         duration: 100
            //     });
            // });

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

        let clip = this.add.text(this.w * 0.3, this.w * 0.3, "fishing rod")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => this.showMessage("The hook can be useful!"))
            .on('pointerdown', () => {
                this.showMessage("You cut the hook from the rod.");
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

        let clip = this.add.text(this.w * 0.3, this.w * 0.3, "silver key")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => this.showMessage("It looks like it can open something."))
            .on('pointerdown', () => {
                this.showMessage("What a good find.");
                this.gainItem('silver key ');
                this.tweens.add({
                    targets: key,
                    y: `-=${2 * this.s}`,
                    alpha: { from: 1, to: 0 },
                    duration: 500,
                    onComplete: () => key.destroy()
                });
            })

        let finish = this.add.text(this.w * 0.6, this.w * 0.2, '(finish the game)')
            .setInteractive()
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

class SteeringWheel extends AdventureScene {
    constructor() {
        super("SteeringWheel", "A robot captain is in need of repair.");
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
        // let finish = this.add.text(this.w * 0.6, this.w * 0.2, '(finish the game)')
        //     .setInteractive()
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
            // .on('pointerdown', () => this.gotoScene('outro'));
    }
}





class Intro extends Phaser.Scene {
    constructor() {
        super('intro')
    }
    create() {
        this.add.text(50,50, "Adventure awaits!").setFontSize(50);
        this.add.text(50,100, "Click anywhere to begin.").setFontSize(20);
        this.input.on('pointerdown', () => {
            this.cameras.main.fade(1000, 0,0,0);
            this.time.delayedCall(1000, () => this.scene.start('MainDeck'));
        });
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
    scene: [Intro, MainDeck, SideofShip, BelowDeck,SteeringWheel, Outro],
    title: "Adventure Game",
});

