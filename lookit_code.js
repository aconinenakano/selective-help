{
    "frames": {
        "parent-survey": {
            "kind": "exp-lookit-survey",
            "formSchema": {
                "schema": {
                    "type": "object",
                    "title": "Parents, please answer these questions about your child's experiences",
                    "properties": {
                        "smartphone_frequency": {
                            "enum": [
                                "Never",
                                "Less than once a week",
                                "About once a week",
                                "About once a day",
                                "Several times a day"
                            ],
                            "type": "string",
                            "title": "How often does your child interact with a smartphone or tablet?",
                            "default": "",
                            "required": false
                        },
                        "voice_assistant_frequency": {
                            "enum": [
                                "Never",
                                "Less than once a week",
                                "About once a week",
                                "About once a day",
                                "Several times a day"
                            ],
                            "type": "string",
                            "title": "How often does your child speak to a voice assistant (e.g., Siri, Alexa, Google Assistant)?",
                            "default": "",
                            "required": false
                        },
                        "smart_speaker_frequency": {
                            "enum": [
                                "Never",
                                "Less than once a week",
                                "About once a week",
                                "About once a day",
                                "Several times a day"
                            ],
                            "type": "string",
                            "title": "How often does your child speak to a voice-activated smart speaker (e.g., Amazon Echo, Google Home, Apple HomePod)?",
                            "default": "",
                            "required": false
                        },
                        "num_speakers": {
                            "type": "integer",
                            "title": "How many voice-activated smart speakers (e.g., Amazon Echo, Google Home, Apple HomePod) are in your household?",
                            "required": false
                        },
                        "coding_experience": {
                            "enum": [
                                "coding class at school",
                                "after school programs or camps related to coding",
                                "coding apps at home (e.g., Osmo, Scratch, Kodable)",
                                "no experience with coding"
                            ],
                            "type": "string",
                            "title": "Does your child have any experience with computer science, programming, or coding? [check all that apply]?",
                            "default": "",
                            "required": false
                        }
                    }
                },
                "options": {
                    "fields": {
                        "smartphone_frequency": {
                            "type": "radio",
                            "sort": false,
                            "order": 1
                        },
                        "voice_assistant_frequency": {
                            "type": "radio",
                            "sort": false,
                            "order": 2
                        },
                        "smart_speaker_frequency": {
                            "type": "radio",
                            "sort": false,
                            "order": 3
                        },
                        "num_speakers": {
                            "numericEntry": true,
                            "order": 4
                        },
                        "coding_experience": {
                            "type": "checkbox",
                            "sort": false,
                            "order": 5
                        }
                    }
                }
            }
        },
        "transition-to-TOM": {
                    "kind": "exp-lookit-images-audio",
                    "baseDir": "https://raw.githubusercontent.com/sociallearninglab/aayh-lookit/master/",
                    "id": "transition",
                    "audioTypes": [
                        "mp3",
                        "ogg"
                    ],
                    "backgroundColor": "black",
                    "doRecording": false,
                    "audio": "second-part",
                    "images": [
                        {
                            "id": "storybookIllustration",
                            "src": "part-2.png",
                            "top": 10,
                            "left": 10,
                            "width": 80
                        }
                    ]
                },
        "TOM-booklet-1-intro": {
            "kind": "exp-lookit-video",
            "video": {
                "top": "1",
                "left": "4",
                "width": "88",
                "source": "p1-intro"
            },
            "backgroundColor": "black",
            "autoProceed": true,
            "requiredDuration": 5,
            "requireVideoCount": 1,
            "doRecording": false,
            "restartAfterPause": true,
            "pauseKey": " ",
            "pauseKeyDescription": "",
            "pauseAudio": "game_paused",
            "unpauseAudio": "game_resumed",
            "pauseText": "Game Paused. Press spacebar to resume.",
            "baseDir": "https://raw.githubusercontent.com/sociallearninglab/aayh-lookit/master/",
            "audioTypes": [
                "ogg",
                "mp3"
            ],
            "videoTypes": [
                "webm",
                "mp4"
            ]
        },
        "TOM-booklet-3-snack-response": {
            "kind": "group",
            "frameList": [
                {
                    "kind": "exp-lookit-video",
                    "video": {
                        "top": "1",
                        "left": "4",
                        "width": "88",
                        "source": "p2-1-carrie-likes-apples"
                    },
                    "backgroundColor": "black",
                    "autoProceed": true,
                    "requiredDuration": 5,
                    "requireVideoCount": 1,
                    "doRecording": false,
                    "restartAfterPause": true,
                    "pauseKey": " ",
                    "pauseKeyDescription": "",
                    "pauseAudio": "game_paused",
                    "unpauseAudio": "game_resumed",
                    "pauseText": "Game Paused. Press spacebar to resume.",
                    "baseDir": "https://raw.githubusercontent.com/sociallearninglab/aayh-lookit/master/",
                    "audioTypes": [
                        "ogg",
                        "mp3"
                    ],
                    "videoTypes": [
                        "webm",
                        "mp4"
                    ]
                },
                {
                    "kind": "exp-lookit-images-audio",
                    "baseDir": "https://raw.githubusercontent.com/sociallearninglab/aayh-lookit/master/",
                    "audioTypes": [
                        "mp3"
                    ],
                    "autoProceed": false,
                    "doRecording": false,
                    "choiceRequired": true,
                    "showPreviousButton": false,
                    "showReplayButton": true,
                    "allowUserPause": false,
                    "waitForRecordingMessageColor": "black",
                    "images": [
                        {
                            "id": "top",
                            "src": "p2-1-selection.png",
                            "top": "10",
                            "left": "10",
                            "width": "80",
                            "nonChoiceOption": true
                        },
                        {
                            "id": "left",
                            "src": "empty.png",
                            "top": "48",
                            "left": "26",
                            "height": "19",
                            "nonChoiceOption": false,
                            "correct": true
                        },
                        {
                            "id": "right",
                            "src": "empty.png",
                            "top": "48",
                            "left": "59",
                            "height": "19",
                            "nonChoiceOption": false,
                            "correct": true
                        }
                    ],
                    "parentTextBlock": {
                        "css": {
                            "font-size": "15pt",
                            "padding": "0.5em",
                            "background-color": "#f8f3bf"
                        },
                        "text": "If your child can click on their own, please let them do it. Then click 'Next'. If they can't, you can click for them.",
                        "title": "For Parents"
                    },
                    "correctChoiceRequired": false
                },
                {
                    "kind": "exp-lookit-video",
                    "video": {
                        "top": "1",
                        "left": "4",
                        "width": "88",
                        "source": "1star"
                    },
                    "backgroundColor": "black",
                    "autoProceed": true,
                    "requiredDuration": 5,
                    "requireVideoCount": 1,
                    "doRecording": false,
                    "restartAfterPause": true,
                    "pauseKey": " ",
                    "pauseKeyDescription": "",
                    "pauseAudio": "game_paused",
                    "unpauseAudio": "game_resumed",
                    "pauseText": "Game Paused. Press spacebar to resume.",
                    "baseDir": "https://raw.githubusercontent.com/sociallearninglab/aayh-lookit/master/",
                    "audioTypes": [
                        "ogg",
                        "mp3"
                    ],
                    "videoTypes": [
                        "webm",
                        "mp4"
                    ]
                }
            ]
        },
        "TOM-booklet-4-rachel": {
            "kind": "group",
            "frameList": [
                {
                    "kind": "exp-lookit-video",
                    "video": {
                        "top": "1",
                        "left": "4",
                        "width": "88",
                        "source": "p3-1-rachel-where"
                    },
                    "backgroundColor": "black",
                    "autoProceed": true,
                    "requiredDuration": 5,
                    "requireVideoCount": 1,
                    "doRecording": false,
                    "restartAfterPause": true,
                    "pauseKey": " ",
                    "pauseKeyDescription": "",
                    "pauseAudio": "game_paused",
                    "unpauseAudio": "game_resumed",
                    "pauseText": "Game Paused. Press spacebar to resume.",
                    "baseDir": "https://raw.githubusercontent.com/sociallearninglab/aayh-lookit/master/",
                    "audioTypes": [
                        "ogg",
                        "mp3"
                    ],
                    "videoTypes": [
                        "webm",
                        "mp4"
                    ]
                },
                {
                    "kind": "exp-lookit-images-audio",
                    "baseDir": "https://raw.githubusercontent.com/sociallearninglab/aayh-lookit/master/",
                    "audioTypes": [
                        "mp3"
                    ],
                    "autoProceed": false,
                    "doRecording": false,
                    "choiceRequired": true,
                    "showPreviousButton": false,
                    "showReplayButton": true,
                    "allowUserPause": false,
                    "waitForRecordingMessageColor": "black",
                    "images": [
                        {
                            "id": "top",
                            "src": "p3-selection.png",
                            "top": "10",
                            "left": "10",
                            "width": "80",
                            "nonChoiceOption": true
                        },
                        {
                            "id": "left",
                            "src": "empty.png",
                            "top": "65",
                            "left": "23.1",
                            "height": "22",
                            "nonChoiceOption": false,
                            "correct": true
                        },
                        {
                            "id": "right",
                            "src": "empty.png",
                            "top": "65",
                            "left": "58.7",
                            "height": "22",
                            "nonChoiceOption": false,
                            "correct": true
                        }
                    ],
                    "parentTextBlock": {
                        "css": {
                            "font-size": "15pt",
                            "padding": "0.5em",
                            "background-color": "#f8f3bf"
                        },
                        "text": "If your child can click on their own, please let them do it. Then click 'Next'. If they can't, you can click for them.",
                        "title": "For Parents"
                    },
                    "correctChoiceRequired": false
                },
                {
                    "kind": "exp-lookit-video",
                    "video": {
                        "top": "1",
                        "left": "4",
                        "width": "88",
                        "source": "2stars"
                    },
                    "backgroundColor": "black",
                    "autoProceed": true,
                    "requiredDuration": 5,
                    "requireVideoCount": 1,
                    "doRecording": false,
                    "restartAfterPause": true,
                    "pauseKey": " ",
                    "pauseKeyDescription": "",
                    "pauseAudio": "game_paused",
                    "unpauseAudio": "game_resumed",
                    "pauseText": "Game Paused. Press spacebar to resume.",
                    "baseDir": "https://raw.githubusercontent.com/sociallearninglab/aayh-lookit/master/",
                    "audioTypes": [
                        "ogg",
                        "mp3"
                    ],
                    "videoTypes": [
                        "webm",
                        "mp4"
                    ]
                }
            ]
        },
        "TOM-7-rest-of-booklet": {
            "kind": "group",
            "frameList": [
                {
                    "kind": "exp-lookit-video",
                    "video": {
                        "top": "1",
                        "left": "4",
                        "width": "88",
                        "source": "p5-1-diana-where"
                    },
                    "backgroundColor": "black",
                    "autoProceed": true,
                    "requiredDuration": 5,
                    "requireVideoCount": 1,
                    "doRecording": false,
                    "restartAfterPause": true,
                    "pauseKey": " ",
                    "pauseKeyDescription": "",
                    "pauseAudio": "game_paused",
                    "unpauseAudio": "game_resumed",
                    "pauseText": "Game Paused. Press spacebar to resume.",
                    "baseDir": "https://raw.githubusercontent.com/sociallearninglab/aayh-lookit/master/",
                    "audioTypes": [
                        "ogg",
                        "mp3"
                    ],
                    "videoTypes": [
                        "webm",
                        "mp4"
                    ]
                },
                {
                    "kind": "exp-lookit-images-audio",
                    "baseDir": "https://raw.githubusercontent.com/sociallearninglab/aayh-lookit/master/",
                    "audioTypes": [
                        "mp3"
                    ],
                    "autoProceed": false,
                    "doRecording": false,
                    "choiceRequired": true,
                    "showPreviousButton": false,
                    "allowUserPause": false,
                    "waitForRecordingMessageColor": "black",
                    "images": [
                        {
                            "id": "top",
                            "src": "p5-selection.png",
                            "top": "10",
                            "left": "10",
                            "width": "80",
                            "nonChoiceOption": true
                        },
                        {
                            "id": "left",
                            "src": "empty.png",
                            "top": "35",
                            "left": "18",
                            "height": "50",
                            "width": "27",
                            "nonChoiceOption": false,
                            "correct": true
                        },
                        {
                            "id": "right",
                            "src": "empty.png",
                            "top": "35",
                            "left": "61",
                            "height": "50",
                            "width": "27",
                            "nonChoiceOption": false,
                            "correct": true
                        }
                    ],
                    "parentTextBlock": {
                        "css": {
                            "font-size": "15pt",
                            "padding": "0.5em",
                            "background-color": "#f8f3bf"
                        },
                        "text": "If your child can click on their own, please let them do it. Then click 'Next'. If they can't, you can click for them.",
                        "title": "For Parents"
                    },
                    "correctChoiceRequired": false
                },
                {
                    "kind": "exp-lookit-video",
                    "video": {
                        "top": "1",
                        "left": "4",
                        "width": "88",
                        "source": "3stars"
                    },
                    "backgroundColor": "black",
                    "autoProceed": true,
                    "requiredDuration": 5,
                    "requireVideoCount": 1,
                    "doRecording": false,
                    "restartAfterPause": true,
                    "pauseKey": " ",
                    "pauseKeyDescription": "",
                    "pauseAudio": "game_paused",
                    "unpauseAudio": "game_resumed",
                    "pauseText": "Game Paused. Press spacebar to resume.",
                    "baseDir": "https://raw.githubusercontent.com/sociallearninglab/aayh-lookit/master/",
                    "audioTypes": [
                        "ogg",
                        "mp3"
                    ],
                    "videoTypes": [
                        "webm",
                        "mp4"
                    ]
                },
                {
                    "kind": "exp-lookit-video",
                    "video": {
                        "top": "1",
                        "left": "4",
                        "width": "88",
                        "source": "p6-1-where-look"
                    },
                    "backgroundColor": "black",
                    "autoProceed": true,
                    "requiredDuration": 5,
                    "requireVideoCount": 1,
                    "doRecording": false,
                    "restartAfterPause": true,
                    "pauseKey": " ",
                    "pauseKeyDescription": "",
                    "pauseAudio": "game_paused",
                    "unpauseAudio": "game_resumed",
                    "pauseText": "Game Paused. Press spacebar to resume.",
                    "baseDir": "https://raw.githubusercontent.com/sociallearninglab/aayh-lookit/master/",
                    "audioTypes": [
                        "ogg",
                        "mp3"
                    ],
                    "videoTypes": [
                        "webm",
                        "mp4"
                    ]
                },
                {
                    "kind": "exp-lookit-images-audio",
                    "baseDir": "https://raw.githubusercontent.com/sociallearninglab/aayh-lookit/master/",
                    "audioTypes": [
                        "mp3"
                    ],
                    "autoProceed": false,
                    "doRecording": false,
                    "choiceRequired": true,
                    "showPreviousButton": false,
                    "showReplayButton": true,
                    "allowUserPause": false,
                    "waitForRecordingMessageColor": "black",
                    "images": [
                        {
                            "id": "top",
                            "src": "p6-selection.png",
                            "top": "10",
                            "left": "10",
                            "width": "80",
                            "nonChoiceOption": true
                        },
                        {
                            "id": "middle",
                            "src": "empty.png",
                            "top": "32",
                            "left": "35",
                            "height": "18",
                            "nonChoiceOption": false,
                            "correct": true
                        },
                        {
                            "id": "bottom",
                            "src": "empty.png",
                            "top": "65.6",
                            "left": "28",
                            "height": "19",
                            "nonChoiceOption": false,
                            "correct": true
                        }
                    ],
                    "parentTextBlock": {
                        "css": {
                            "font-size": "15pt",
                            "padding": "0.5em",
                            "background-color": "#f8f3bf"
                        },
                        "text": "If your child can click on their own, please let them do it. Then click 'Next'. If they can't, you can click for them.",
                        "title": "For Parents"
                    },
                    "correctChoiceRequired": false
                },
                {
                    "kind": "exp-lookit-video",
                    "video": {
                        "top": "1",
                        "left": "4",
                        "width": "88",
                        "source": "4stars"
                    },
                    "backgroundColor": "black",
                    "autoProceed": true,
                    "requiredDuration": 5,
                    "requireVideoCount": 1,
                    "doRecording": false,
                    "restartAfterPause": true,
                    "pauseKey": " ",
                    "pauseKeyDescription": "",
                    "pauseAudio": "game_paused",
                    "unpauseAudio": "game_resumed",
                    "pauseText": "Game Paused. Press spacebar to resume.",
                    "baseDir": "https://raw.githubusercontent.com/sociallearninglab/aayh-lookit/master/",
                    "audioTypes": [
                        "ogg",
                        "mp3"
                    ],
                    "videoTypes": [
                        "webm",
                        "mp4"
                    ]
                },
                {
                    "kind": "exp-lookit-images-audio",
                    "baseDir": "https://raw.githubusercontent.com/sociallearninglab/aayh-lookit/master/",
                    "id": "storybook-group",
                    "audioTypes": [
                        "mp3",
                        "ogg"
                    ],
                    "autoProceed": false,
                    "showPreviousButton": false,
                    "showReplayButton": true,
                    "doRecording": false,
                    "images": [
                        {
                            "id": "storybookIllustration",
                            "src": "survey-transition.png",
                            "top": 10,
                            "left": 10,
                            "width": 80
                        }
                    ]
                }
            ]
        },
        "video-config": {
            "kind": "exp-video-config",
            "troubleshootingIntro": "If you're having any trouble or would like us to walk you through setup, please email our research assistant Joseph Outa at joouta@stanford.edu."
        },
        "video-consent": {
            "gdpr": false,
            "kind": "exp-lookit-video-consent",
            "template": "consent_005",
            "PIName": "Hyowon Gweon",
            "institution": "Stanford University",
            "PIContact": "sociallearninglab@stanford.edu",
            "purpose_header": "Description",
            "purpose": "Our studies are designed to be fun, age-appropriate activities for young children, and easily conducted online using virtual meeting software such as Zoom). Your child will be asked to play a short game with our researchers. Your child will be introduced to storybooks, pictures, or pre-recorded video clips; in some studies we may present toys and puppets. Afterwards we will ask short questions. There are no right or wrong answers; we are just interested in what children think!",
            "participation_header": "Participation",
            "risk_header": "Risks",
            "risk_statement": "We will pace each session appropriately, and participation in our research has no foreseeable risks or discomforts to you or your child. We cannot and do not guarantee that you will receive other benefits from participation, apart from the satisfaction of contributing to scientific research.",
            "benefits_header": "Benefits",
            "payment": "We are currently offering $5 Amazon gift cards as a token of appreciation for your child's participation. After you finish the game, we will message you the gift card redemption link within a week. To be eligible for the gift card your child must be in the age range for this game, you need to submit a valid consent statement and your child needs to be visible during game. But we will send a gift card even if you do not finish the whole game or we are not able to use your child's data. You will not receive a cash payment for your participation in this research.",
            "procedures_header": "Time",
            "contact information": "If you have any questions, concerns, or complaints about this research study, its procedures, risks, and benefits, contact the Protocol Director, Dr. Hyowon Gweon. Email: sociallearninglab@stanford.edu. Independent Contact: If you have any concerns, complaints, or general questions about your rights as a participant, please contact the Stanford Institutional Review Board (IRB) to speak to someone independent of the research team. Phone: (650) 723-2480, or toll free at 1-866-680-2906. Mail: Stanford IRB, 3000 El Camino Real, Five Palo Alto Square, 4th Floor, Stanford University, Stanford, CA 94305-5401.",
            "datause": "We use a secure, web-based data library called Box to store your data. All data is private so that only members of the research team can access it. A research assistant will watch your video and mark down your child's answer to the question at the end of the story, and as well as other information such as interactions between you and your child during the story. You will choose a privacy level that says whether researchers can share the videos more broadly, for instance to teach students. Whether to share data is completely up to you!",
            "additional_segments": [
                {
                    "title": "Contact Information",
                    "text": "If you have any questions, concerns, or complaints about this research study, its procedures, risks, and benefits, contact the Protocol Director, Dr. Hyowon Gweon. Email: sociallearninglab@stanford.edu, Phone: (650) 498-7832.<h2></h2>Independent Contact: If you have any concerns, complaints, or general questions about your rights as a participant, please contact the Stanford Institutional Review Board (IRB) to speak to someone independent of the research team. Phone: (650) 723-2480, or toll free at 1-866-680-2906. Mail: Stanford IRB, 3000 El Camino Real, Five Palo Alto Square, 4th Floor, Stanford University, Stanford, CA 94305-5401."
                }
            ],
            "research_rights_statement": "Your child’s participation is voluntary and your child has the right to withdraw his/her consent or discontinue participation at any time without any negative consequences."
        },
        "start-recording-with-image": {
            "kind": "exp-lookit-start-recording",
            "baseDir": "https://www.mit.edu/~kimscott/placeholderstimuli/",
            "videoTypes": [
                "webm",
                "mp4"
            ],
            "image": "peekaboo_remy.jpg",
            "imageAnimation": "spin",
            "displayFullscreen": true
        },
        "stop-recording-with-image": {
            "kind": "exp-lookit-stop-recording",
            "baseDir": "https://www.mit.edu/~kimscott/placeholderstimuli/",
            "videoTypes": [
                "webm",
                "mp4"
            ],
            "image": "peekaboo_remy.jpg",
            "imageAnimation": "spin",
            "displayFullscreen": true,
            "showProgressBar": true,
            "waitForUploadMessage": " "
        },
        "first-instructions": {
            "kind": "exp-lookit-instruction-video",
            "instructionsVideo": [
                {
                    "src": "https://raw.githubusercontent.com/sociallearninglab/aayh-lookit/master/mp4/alexa-first-instructions.mp4",
                    "type": "video/mp4"
                }
            ],
            "introText": "Welcome to the game! Please watch this video to get started. \n(Or you can read the summary to the right if you prefer.)",
            "transcriptTitle": "Video summary",
            "transcriptBlocks": [
                {
                    "title": "Background information about the game",
                    "listblocks": [
                        {
                            "text": "Your child does not need to be with you at this point. We will let you know when it is time to get your child."
                        },
                        {
                            "text": "In this game, we are interested in how children think about 'smart technology'. Do they think it is a machine or a human?"
                        }
                    ]
                },
                {
                    "title": "Preview of what your child will see"
                },
                {
                    "listblocks": [
                        {
                            "text": "In this game, your child will watch a video of a person interacting with an AI voice assistant or another person and then guess what happens next. They will also listen to a story about snack time in a classroom."
                        }
                    ]
                },
                {
                    "title": "What's next?",
                    "listblocks": [
                        {
                            "text": "Because this is an online game, we will check to make sure that your webcam is set up and working properly on the next page, so we can record your child’s answer during the game. We would like to kindly ask you NOT to use earphones or headphones as it may affect the recording."
                        },
                        {
                            "text": "Following that page, you will be given an opportunity to review the consent information and we will ask that you record a short video of yourself giving consent to participate in this game."
                        },
                        {
                            "text": "After you are finished with the consent page and questions, you will be provided with more detailed information about what to do during the game and how to get started."
                        }
                    ]
                }
            ],
            "warningText": "Please watch the video or read the summary before proceeding.",
            "requireWatchOrRead": true,
            "nextButtonText": "I'm ready to make sure my webcam is connected!",
            "title": "Game instructions",
            "showPreviousButton": true
        },
        "exit-survey": {
            "kind": "exp-lookit-exit-survey",
            "debriefing": {
                "text": "In this game, we are interested in how children think about AI voice assistants. Do they think about it more as a machine or as a human? Do they understand that these devices share information or do they treat them as separate minds like they do people? We show your child one of two different versions of the game. In both versions, your child watched a video of a character, Scotty, interacting with two of his friends, both named Paisia. In one version of the study, both Paisias are an AI voice assistant, and in another version, both Paisias are humans. Scotty gives each Paisia different information about his favorite song and then asks the first to recall what he has said. If your child believes the Paisias are sharing information, then they should respond with the second song; otherwise if your child believes the Paisias maintain separate information, they should select the first song. \n\n In the second part of the study, your child answered questions in a story about children’s snacks. This a baseline task that allows us to compare the responses of children across the human and AI voice assistant versions of the Scotty and Paisia task. With this task we are able to understand what your child thinks about the thought processes and beliefs of other people. We can use this information to lend context to their response on the first task. \n\n We are just interested in looking at the average responses from children and we won’t take any specific answers as “good” or “bad”. \n\n Thank you again for your participation! $5 amazon gift cards will be sent to you via the Lookit direct message feature within one week of participation. Thanks for your understanding!",
                "title": "Thank you!"
            }
        },
        "second-instructions": {
            "kind": "exp-lookit-video",
            "video": {
                "position": "fill",
                "source": "alexa-second-instructions"
            },
            "backgroundColor": "white",
            "autoProceed": false,
            "nextButtonText": "Getting in position",
            "requiredDuration": 0,
            "requireAudioCount": 0,
            "requireVideoCount": 1,
            "parentTextBlock": {
                "css": {
                    "font-size": "15pt",
                    "padding": "0.5em",
                    "background-color": "#f8f3bf"
                },
                "text": "Please watch this instruction video carefully before proceeding.",
                "title": "For Parents"
            },
            "doRecording": false,
            "showPreviousButton": true,
            "baseDir": "https://raw.githubusercontent.com/sociallearninglab/aayh-lookit/master/",
            "videoTypes": [
                "webm",
                "mp4"
            ]
        },
        "positioning-config": {
            "kind": "exp-video-config-quality",
            "title": "It's time to get your child and get in position!",
            "introText": "",
            "showRecordMenu": false,
            "requireTestVideo": false,
            "completedItemText": "Got it!",
            "instructionBlocks": [
                {
                    "title": "Center your webcam if needed",
                    "text": "<strong>Make sure the webcam you're using is roughly centered</strong> relative to this monitor. This makes it much easier for us to see your video.",
                    "image": {
                        "src": "https://raw.githubusercontent.com/syzhang6/lookit/master/img/centering.png",
                        "alt": "Example images of using centered external webcam on monitor or built-in webcam on laptop."
                    }
                },
                {
                    "title": "Make sure you can clearly see your child's face",
                    "text": "Take a few moments to get settled and make sure your child's face is clearly visible in the webcam preview to the right. You may need to adjust the webcam angle or turn on a light to make sure his or her face is visible."
                },
                {
                    "text": "The green button down below will start the game. Press the button once you and your child are ready to go!",
                    "title": "When you're ready"
                }
            ],
            "requireItemConfirmation": true,
            "recordingInstructionText": ""
        },
        "instruction-survey-multiple": {
            "kind": "exp-lookit-survey",
            "formSchema": {
                "schema": {
                    "type": "object",
                    "properties": {
                        "parentresponse": {
                            "type": "string",
                            "title": "Which of these can you say after your child answers a question?",
                            "enum": [
                                "Okay!",
                                "Good job.",
                                "Hmm, I don't think so.",
                                "Are you sure?"
                            ]
                        },
                        "qfeedback": {
                            "type": "text",
                            "title": "We're interested in how children think about these questions, which might be different from how adults think about them. It's important not to 'give away' any of your own thoughts or answers, and not to comment on their answers."
                        },
                        "parentencourage": {
                            "type": "string",
                            "title": "What should you do if your child is distracted during a question?",
                            "enum": [
                                "Quit the game right away.",
                                "Rephrase the story using your own words.",
                                "Encourage them to keep watching and listening. Replay if needed.",
                                "Give them a hint."
                            ]
                        },
                        "encfeedback": {
                            "type": "text",
                            "title": "It's fine if your child gets distracted at some points during the game! You can always replay the questions if they didn't hear what was said. Please note that it would not be appropriate for you to tell them the story using your own words."
                        },
                        "parentstopearly": {
                            "type": "string",
                            "title": "Is it ok to stop the game early?",
                            "enum": [
                                "No, I must complete the full game.",
                                "Yes, I can leave the game at any time. But I will try best to encourage my child to participate."
                            ]
                        },
                        "earlyfeedback": {
                            "type": "text",
                            "title": "It's great if you can complete the game, but if your child is upset or either of you do not want to continue, please feel free to quit anytime."
                        }
                    },
                    "dependencies": {
                        "qfeedback": [
                            "parentresponse"
                        ],
                        "encfeedback": [
                            "parentencourage"
                        ],
                        "earlyfeedback": [
                            "parentstopearly"
                        ]
                    }
                },
                "options": {
                    "fields": {
                        "parentresponse": {
                            "type": "radio",
                            "message": "Please select an answer",
                            "validator": "required-field",
                            "sort": false,
                            "removeDefaultNone": true,
                            "order": 1
                        },
                        "qfeedback": {
                            "type": "text",
                            "validator": "required-field",
                            "placeholder": "Try selecting a different answer above!",
                            "disabled": true,
                            "dependencies": {
                                "parentresponse": [
                                    "Hmm, I don't think so.",
                                    "Are you sure?",
                                    "Good job."
                                ]
                            },
                            "order": 2
                        },
                        "parentencourage": {
                            "type": "radio",
                            "message": "Please select an answer",
                            "validator": "required-field",
                            "sort": false,
                            "removeDefaultNone": true,
                            "order": 3
                        },
                        "encfeedback": {
                            "type": "text",
                            "validator": "required-field",
                            "placeholder": "Try selecting a different answer above!",
                            "disabled": true,
                            "dependencies": {
                                "parentencourage": [
                                    "Quit the game right away.",
                                    "Give them a hint.",
                                    "Rephrase the story using your own words."
                                ]
                            },
                            "order": 4
                        },
                        "parentstopearly": {
                            "type": "radio",
                            "message": "Please select an answer",
                            "validator": "required-field",
                            "sort": false,
                            "removeDefaultNone": true,
                            "order": 5
                        },
                        "earlyfeedback": {
                            "type": "text",
                            "validator": "required-field",
                            "placeholder": "Try selecting a different answer above!",
                            "disabled": true,
                            "dependencies": {
                                "parentstopearly": [
                                    "No, I must complete the full game."
                                ]
                            },
                            "order": 6
                        }
                    }
                }
            }
        },
        "get-your-child": {
            "kind": "exp-lookit-images-audio",
            "baseDir": "https://raw.githubusercontent.com/syzhang6/lookit/master/",
            "id": "storybook-group",
            "audioTypes": [
                "mp3",
                "ogg"
            ],
            "autoProceed": false,
            "audio": "time_to_get_child",
            "doRecording": false,
            "images": [
                {
                    "id": "storybookIllustration",
                    "src": "get_your_child.png",
                    "position": "fill"
                }
            ]
        },
        "study-completion": {
            "kind": "exp-lookit-video",
            "video": {
                "position": "fill",
                "loop": true,
                "source": "ThankYouMovie"
            },
            "parentTextBlock": {
                "css": {
                    "font-size": "15pt",
                    "padding": "0.5em",
                    "background-color": "#f8f3bf"
                },
                "text": "Thank you very much for your participation. We look forward to seeing you with more research games in the future. ",
                "title": "For parents"
            },
            "audio": {
                "source": "thankyou_audio",
                "loop": false
            },
            "requiredDuration": 0,
            "requireAudioCount": 1,
            "requireVideoCount": 0,
            "doRecording": false,
            "baseDir": "https://raw.githubusercontent.com/syzhang6/lookit/master/",
            "audioTypes": [
                "mp3"
            ],
            "videoTypes": [
                "mp4"
            ],
            "backgroundColor": "white",
            "autoProceed": false
        },
        "child-video-assent": {
            "kind": "exp-lookit-video-assent",
            "pages": [
                {
                    "imgSrc": "do-you-want-to-play.png",
                    "textBlocks": [
                        {
                            "text": "Thanks for coming! Today we are going to watch a video and then try to guess what happens next. Then we'll listen to a story about children in a classroom and help all the children find their snacks. Are you ready to play the game?"
                        }
                    ],
                    "audio": "welcome-child-assent",
                    "type": "audio/mp3"
                }
            ],
            "baseDir": "https://raw.githubusercontent.com/sociallearninglab/aayh-lookit/master/",
            "videoTypes": [
                "webm",
                "mp4"
            ],
            "participationQuestion": "Do you want to participate in this game?",
            "minimumYearsToAssent": 3
        },
        "alexa-protocol": {
            "kind": "choice",
            "sampler": "random-parameter-set",
            "frameList": [
                {
                    "kind": "exp-lookit-images-audio",
                    "baseDir": "https://raw.githubusercontent.com/sociallearninglab/aayh-lookit/master/",
                    "id": "storybook-group",
                    "audioTypes": [
                        "mp3",
                        "ogg"
                    ],
                    "backgroundColor": "black",
                    "doRecording": false,
                    "audio": "lets-watch",
                    "images": [
                        {
                            "id": "storybookIllustration",
                            "src": "video-time.png",
                            "top": 10,
                            "left": 10,
                            "width": 80
                        }
                    ]
                },
                {
                    "kind": "exp-lookit-video",
                    "video": {
                        "position": "fill",
                        "source": "condition-intro"
                    },
                    "backgroundColor": "black",
                    "autoProceed": false,
                    "nextButtonText": "Next",
                    "requiredDuration": 5,
                    "requireVideoCount": 1,
                    "doRecording": false,
                    "restartAfterPause": true,
                    "pauseKey": " ",
                    "pauseKeyDescription": "",
                    "pauseAudio": "game_paused",
                    "unpauseAudio": "game_resumed",
                    "pauseText": "Game Paused. Press spacebar to resume.",
                    "baseDir": "https://raw.githubusercontent.com/sociallearninglab/aayh-lookit/master/",
                    "audioTypes": [
                        "ogg",
                        "mp3"
                    ],
                    "videoTypes": [
                        "webm",
                        "mp4"
                    ]
                },
                {
                    "kind": "exp-lookit-video",
                    "video": {
                        "position": "fill",
                        "source": "VIDEO1"
                    },
                    "backgroundColor": "black",
                    "autoProceed": false,
                    "nextButtonText": "Next",
                    "requiredDuration": 5,
                    "requireVideoCount": 1,
                    "doRecording": false,
                    "restartAfterPause": true,
                    "pauseKey": " ",
                    "pauseKeyDescription": "",
                    "pauseAudio": "game_paused",
                    "unpauseAudio": "game_resumed",
                    "pauseText": "Game Paused. Press spacebar to resume.",
                    "baseDir": "https://raw.githubusercontent.com/sociallearninglab/aayh-lookit/master/",
                    "audioTypes": [
                        "ogg",
                        "mp3"
                    ],
                    "videoTypes": [
                        "webm",
                        "mp4"
                    ]
                },
                {
                    "kind": "exp-lookit-video",
                    "video": {
                        "position": "fill",
                        "source": "VIDEO2"
                    },
                    "backgroundColor": "black",
                    "autoProceed": false,
                    "requiredDuration": 5,
                    "requireVideoCount": 1,
                    "doRecording": false,
                    "restartAfterPause": true,
                    "pauseKey": " ",
                    "pauseKeyDescription": "",
                    "pauseAudio": "game_paused",
                    "unpauseAudio": "game_resumed",
                    "pauseText": "Game Paused. Press spacebar to resume.",
                    "baseDir": "https://raw.githubusercontent.com/sociallearninglab/aayh-lookit/master/",
                    "audioTypes": [
                        "ogg",
                        "mp3"
                    ],
                    "videoTypes": [
                        "webm",
                        "mp4"
                    ]
                },
                {
                    "kind": "exp-lookit-images-audio",
                    "baseDir": "https://raw.githubusercontent.com/sociallearninglab/aayh-lookit/master/",
                    "audioTypes": [
                        "mp3"
                    ],
                    "autoProceed": false,
                    "doRecording": false,
                    "choiceRequired": true,
                    "showPreviousButton": false,
                    "showReplayButton": true,
                    "allowUserPause": false,
                    "waitForRecordingMessageColor": "black",
                    "audio": "AUD01",
                    "images": [
                        {
                            "id": "left",
                            "src": "wheels.png",
                            "top": "70",
                            "left": "10",
                            "width": "15",
                            "nonChoiceOption": false,
                            "correct": true
                        },
                        {
                            "id": "middle",
                            "src": "twinkle-twinkle.png",
                            "top": "70",
                            "left": "42.5",
                            "width": "15",
                            "nonChoiceOption": false,
                            "correct": true
                        },
                        {
                            "id": "right",
                            "src": "itsy.png",
                            "top": "70",
                            "left": "75",
                            "width": "15",
                            "nonChoiceOption": false,
                            "correct": true
                        },
                        {
                            "id": "top",
                            "src": "IMG01",
                            "left": "20",
                            "width": "60",
                            "top": "10",
                            "nonChoiceOption": false
                        }
                    ],
                    "highlights": [
                        {
                            "range": [
                                6.5,
                                7.9
                            ],
                            "imageId": "left"
                        },
                        {
                            "range": [
                                8.2,
                                9.9
                            ],
                            "imageId": "middle"
                        },
                        {
                            "range": [
                                10.5,
                                12.1
                            ],
                            "imageId": "right"
                        }
                    ],
                    "parentTextBlock": {
                        "css": {
                            "font-size": "15pt",
                            "padding": "0.5em",
                            "background-color": "#f8f3bf"
                        },
                        "text": "If your child can click on their own, please let them do it. Then click 'Next'. If they can't, you can click for them.",
                        "title": "For Parents"
                    },
                    "correctChoiceRequired": true
                },
                {
                    "kind": "exp-lookit-video",
                    "video": {
                        "position": "fill",
                        "source": "VIDEO3"
                    },
                    "backgroundColor": "black",
                    "autoProceed": false,
                    "nextButtonText": "Next",
                    "requiredDuration": 5,
                    "requireVideoCount": 1,
                    "doRecording": false,
                    "restartAfterPause": true,
                    "pauseKey": " ",
                    "pauseKeyDescription": "",
                    "pauseAudio": "game_paused",
                    "unpauseAudio": "game_resumed",
                    "pauseText": "Game Paused. Press spacebar to resume.",
                    "baseDir": "https://raw.githubusercontent.com/sociallearninglab/aayh-lookit/master/",
                    "audioTypes": [
                        "ogg",
                        "mp3"
                    ],
                    "videoTypes": [
                        "webm",
                        "mp4"
                    ]
                },
                {
                    "kind": "exp-lookit-video",
                    "video": {
                        "position": "fill",
                        "source": "VIDEO4"
                    },
                    "backgroundColor": "black",
                    "autoProceed": false,
                    "requiredDuration": 5,
                    "requireVideoCount": 1,
                    "doRecording": false,
                    "restartAfterPause": true,
                    "pauseKey": " ",
                    "pauseKeyDescription": "",
                    "pauseAudio": "game_paused",
                    "unpauseAudio": "game_resumed",
                    "pauseText": "Game Paused. Press spacebar to resume.",
                    "baseDir": "https://raw.githubusercontent.com/sociallearninglab/aayh-lookit/master/",
                    "audioTypes": [
                        "ogg",
                        "mp3"
                    ],
                    "videoTypes": [
                        "webm",
                        "mp4"
                    ]
                },
                {
                    "kind": "exp-lookit-images-audio",
                    "baseDir": "https://raw.githubusercontent.com/sociallearninglab/aayh-lookit/master/",
                    "audioTypes": [
                        "mp3"
                    ],
                    "autoProceed": false,
                    "doRecording": false,
                    "choiceRequired": true,
                    "showPreviousButton": false,
                    "showReplayButton": true,
                    "allowUserPause": false,
                    "waitForRecordingMessageColor": "black",
                    "audio": "AUD02",
                    "images": [
                        {
                            "id": "left",
                            "src": "wheels.png",
                            "top": "70",
                            "left": "10",
                            "width": "15",
                            "nonChoiceOption": false,
                            "correct": true
                        },
                        {
                            "id": "middle",
                            "src": "twinkle-twinkle.png",
                            "top": "70",
                            "left": "42.5",
                            "width": "15",
                            "nonChoiceOption": false,
                            "correct": true
                        },
                        {
                            "id": "right",
                            "src": "itsy.png",
                            "top": "70",
                            "left": "75",
                            "width": "15",
                            "nonChoiceOption": false,
                            "correct": true
                        },
                        {
                            "id": "top",
                            "src": "IMG02",
                            "left": "20",
                            "width": "60",
                            "top": "10",
                            "nonChoiceOption": false
                        }
                    ],
                    "highlights": [
                        {
                            "range": [
                                6.2,
                                7.2
                            ],
                            "imageId": "left"
                        },
                        {
                            "range": [
                                7.8,
                                9.5
                            ],
                            "imageId": "middle"
                        },
                        {
                            "range": [
                                10.2,
                                11.7
                            ],
                            "imageId": "right"
                        }
                    ],
                    "parentTextBlock": {
                        "css": {
                            "font-size": "15pt",
                            "padding": "0.5em",
                            "background-color": "#f8f3bf"
                        },
                        "text": "If your child can click on their own, please let them do it. Then click 'Next'. If they can't, you can click for them.",
                        "title": "For Parents"
                    },
                    "correctChoiceRequired": true
                },
                {
                    "kind": "exp-lookit-video",
                    "video": {
                        "position": "fill",
                        "source": "VIDEO5"
                    },
                    "backgroundColor": "black",
                    "autoProceed": false,
                    "nextButtonText": "Next",
                    "requiredDuration": 5,
                    "requireVideoCount": 1,
                    "doRecording": false,
                    "restartAfterPause": true,
                    "pauseKey": " ",
                    "pauseKeyDescription": "",
                    "pauseAudio": "game_paused",
                    "unpauseAudio": "game_resumed",
                    "pauseText": "Game Paused. Press spacebar to resume.",
                    "baseDir": "https://raw.githubusercontent.com/sociallearninglab/aayh-lookit/master/",
                    "audioTypes": [
                        "ogg",
                        "mp3"
                    ],
                    "videoTypes": [
                        "webm",
                        "mp4"
                    ]
                },
                {
                    "kind": "exp-lookit-video",
                    "video": {
                        "position": "fill",
                        "source": "VIDEO6"
                    },
                    "backgroundColor": "black",
                    "autoProceed": false,
                    "requiredDuration": 5,
                    "requireVideoCount": 1,
                    "doRecording": false,
                    "restartAfterPause": true,
                    "pauseKey": " ",
                    "pauseKeyDescription": "",
                    "pauseAudio": "game_paused",
                    "unpauseAudio": "game_resumed",
                    "pauseText": "Game Paused. Press spacebar to resume.",
                    "baseDir": "https://raw.githubusercontent.com/sociallearninglab/aayh-lookit/master/",
                    "audioTypes": [
                        "ogg",
                        "mp3"
                    ],
                    "videoTypes": [
                        "webm",
                        "mp4"
                    ]
                },
                {
                    "kind": "exp-lookit-images-audio",
                    "baseDir": "https://raw.githubusercontent.com/sociallearninglab/aayh-lookit/master/",
                    "audioTypes": [
                        "mp3"
                    ],
                    "autoProceed": false,
                    "doRecording": true,
                    "choiceRequired": true,
                    "showPreviousButton": false,
                    "showReplayButton": true,
                    "allowUserPause": false,
                    "waitForRecordingMessageColor": "black",
                    "audio": "what-song-testq1",
                    "images": [
                        {
                            "id": "left",
                            "src": "wheels.png",
                            "top": "70",
                            "left": "10",
                            "width": "15",
                            "nonChoiceOption": false,
                            "correct": true,
                            "feedbackAudio": "and-why-testq2"
                        },
                        {
                            "id": "right",
                            "src": "itsy.png",
                            "top": "70",
                            "left": "75",
                            "width": "15",
                            "nonChoiceOption": false,
                            "correct": true,
                            "feedbackAudio": "and-why-testq2"
                        },
                        {
                            "id": "top",
                            "src": "IMG03",
                            "left": "20",
                            "width": "60",
                            "top": "10",
                            "nonChoiceOption": false
                        }
                    ],
                    "highlights": [
                        {
                            "range": [
                                3,
                                4.2
                            ],
                            "imageId": "left"
                        },
                        {
                            "range": [
                                4.8,
                                6.1
                            ],
                            "imageId": "right"
                        }
                    ],
                    "parentTextBlock": {
                        "css": {
                            "font-size": "15pt",
                            "padding": "0.5em",
                            "background-color": "#f8f3bf"
                        },
                        "text": "For the 'WHY' question, please encourage your child to tell us out loud WHY they chose the song!  The 'Next' button will become clickable after 8 seconds",
                        "title": "For Parents"
                    },
                    "correctChoiceRequired": true
                }
            ],
            "parameterSets": [
                {
                    "condition-intro": "person-intro",
                    "VIDEO1": "first-office-vid",
                    "VIDEO2": "person-CB1-1",
                    "AUD01": "which-song-office",
                    "IMG01": "person-office-attn-check.png",
                    "VIDEO3": "next-kitchen-vid",
                    "VIDEO4": "person-CB1-2",
                    "AUD02": "which-song-kitchen",
                    "IMG02": "person-kitchen-attn-check.png",
                    "VIDEO5": "end-office-vid",
                    "VIDEO6": "person-CB12-test",
                    "IMG03": "person-cb12-test.png"
                },
                {
                    "condition-intro": "person-intro",
                    "VIDEO1": "first-office-vid",
                    "VIDEO2": "person-CB2-1",
                    "AUD01": "which-song-office",
                    "IMG01": "person-office-attn-check.png",
                    "VIDEO3": "next-kitchen-vid",
                    "VIDEO4": "person-CB2-2",
                    "AUD02": "which-song-kitchen",
                    "IMG02": "person-kitchen-attn-check.png",
                    "VIDEO5": "end-office-vid",
                    "VIDEO6": "person-CB12-test",
                    "IMG03": "person-cb12-test.png"
                },
                {
                    "condition-intro": "person-intro",
                    "VIDEO1": "first-kitchen-vid",
                    "VIDEO2": "person-CB3-1",
                    "AUD01": "which-song-kitchen",
                    "IMG01": "person-kitchen-attn-check.png",
                    "VIDEO3": "next-office-vid",
                    "VIDEO4": "person-CB3-2",
                    "AUD02": "which-song-office",
                    "IMG02": "person-office-attn-check.png",
                    "VIDEO5": "end-kitchen-vid",
                    "VIDEO6": "person-CB34-test",
                    "IMG03": "person-cb34-test.png"
                },
                {
                    "condition-intro": "person-intro",
                    "VIDEO1": "first-kitchen-vid",
                    "VIDEO2": "person-CB4-1",
                    "AUD01": "which-song-kitchen",
                    "IMG01": "person-kitchen-attn-check.png",
                    "VIDEO3": "next-office-vid",
                    "VIDEO4": "person-CB4-2",
                    "AUD02": "which-song-office",
                    "IMG02": "person-office-attn-check.png",
                    "VIDEO5": "end-kitchen-vid",
                    "VIDEO6": "person-CB34-test",
                    "IMG03": "person-cb34-test.png"
                },
                {
                    "condition-intro": "ai-intro",
                    "VIDEO1": "first-office-vid",
                    "VIDEO2": "AI-CB1-1",
                    "AUD01": "which-song-office",
                    "IMG01": "ai-office-attn-check.png",
                    "VIDEO3": "next-kitchen-vid",
                    "VIDEO4": "AI-CB1-2",
                    "AUD02": "which-song-kitchen",
                    "IMG02": "ai-kitchen-attn-check.png",
                    "VIDEO5": "end-office-vid",
                    "VIDEO6": "AI-CB12-test",
                    "IMG03": "ai-cb12-test.png"
                },
                {
                    "condition-intro": "ai-intro",
                    "VIDEO1": "first-office-vid",
                    "VIDEO2": "AI-CB2-1",
                    "AUD01": "which-song-office",
                    "IMG01": "ai-office-attn-check.png",
                    "VIDEO3": "next-kitchen-vid",
                    "VIDEO4": "AI-CB2-2",
                    "AUD02": "which-song-kitchen",
                    "IMG02": "ai-kitchen-attn-check.png",
                    "VIDEO5": "end-office-vid",
                    "VIDEO6": "AI-CB12-test",
                    "IMG03": "ai-cb12-test.png"
                },
                {
                    "condition-intro": "ai-intro",
                    "VIDEO1": "first-kitchen-vid",
                    "VIDEO2": "AI-CB3-1",
                    "AUD01": "which-song-kitchen",
                    "IMG01": "ai-kitchen-attn-check.png",
                    "VIDEO3": "next-office-vid",
                    "VIDEO4": "AI-CB3-2",
                    "AUD02": "which-song-office",
                    "IMG02": "ai-office-attn-check.png",
                    "VIDEO5": "end-kitchen-vid",
                    "VIDEO6": "AI-CB34-test",
                    "IMG03": "ai-cb34-test.png"
                },
                {
                    "condition-intro": "ai-intro",
                    "VIDEO1": "first-kitchen-vid",
                    "VIDEO2": "AI-CB4-1",
                    "AUD01": "which-song-kitchen",
                    "IMG01": "ai-kitchen-attn-check.png",
                    "VIDEO3": "next-office-vid",
                    "VIDEO4": "AI-CB4-2",
                    "AUD02": "which-song-office",
                    "IMG02": "ai-office-attn-check.png",
                    "VIDEO5": "end-kitchen-vid",
                    "VIDEO6": "AI-CB34-test",
                    "IMG03": "ai-cb34-test.png"
                }
            ],
            "commonFrameProperties": {
                "kind": "exp-lookit-video",
                "baseDir": "https://raw.githubusercontent.com/sociallearninglab/aayh-lookit/master/",
                "audioTypes": [
                    "mp3"
                ],
                "videoTypes": [
                    "mp4"
                ],
                "requiredDuration": 10,
                "requireVideoCount": 1,
                "doRecording": false,
                "restartAfterPause": true,
                "pauseKey": " ",
                "pauseKeyDescription": "",
                "pauseAudio": "game_paused",
                "unpauseAudio": "game_resumed",
                "pauseText": "Game Paused. Press spacebar to resume.",
                "backgroundColor": "white",
                "autoProceed": true,
                "showWaitForRecordingMessage": true,
                "showWaitForUploadMessage": true,
                "waitForRecordingMessage": "Please wait... <br><br> starting webcam recording",
                "waitForUploadMessage": "Please wait... <br><br> uploading video"
            }
        }
        },
    "sequence": [
        "first-instructions",
        "video-config",
        "video-consent",
        "second-instructions",
        "instruction-survey-multiple",
        "positioning-config",
        "start-recording-with-image",
        "child-video-assent",
        "alexa-protocol",
        "transition-to-TOM",
        "TOM-booklet-1-intro",
        "TOM-booklet-3-snack-response",
        "TOM-booklet-4-rachel",
        "TOM-7-rest-of-booklet",
        "parent-survey",
        "stop-recording-with-image",
        "exit-survey"
    ]
}