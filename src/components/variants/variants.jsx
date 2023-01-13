export const variants = {
    fadeUpDelay :{
        hidden : {
            opacity : 0,
            y: 40
        },
        visible : {
            opacity : 1,
            y : 0,
            transition : {
                duration : 2,
                ease : 'easeInOut',
                delay: 0.4
            }
        }
    },
    fadeDown :{
        hidden : {
            opacity : 0,
            y : -40
        },
        visible : {
            opacity : 1,
            y : 0,
            transition : {
                duration : 2,
                ease : 'easeInOut'
            }
        }
    },
    fadeUp : {
        hidden : {
            opacity : 0,
            y : 40
        },
        visible : {
            opacity : 1,
            y : 0,
            transition : {
                duration : 2,
                ease : 'easeInOut',
            }
        }
    },
    fadeInLeft : {
        hidden : {
            opacity : 0,
            x : -80
        },
        visible : {
            opacity : 1,
            x : 0,
            transition : {
                duration : 2,
                ease : 'easeInOut',
            }
        }
    },
    fadeInRight : {
        hidden : {
            opacity : 0,
            x : 80
        },
        visible : {
            opacity : 1,
            x : 0,
            transition : {
                duration : 2,
                ease : 'easeInOut',
            }
        }
    },
}