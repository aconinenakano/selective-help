function generateProtocol(child, pastSessions) {
    let options = ['1a', '1b'];
    let condition = options[Math.floor(Math.random() * options.length)];
    console.log('Condition:', condition);

    if (condition === '1a') {
        return {
            frames: {
                'welcome': {
                    'kind': 'exp-lookit-text',
                    'blocks': [
                        {
                            'title': 'Welcome!'
                        },
                        {
                            'text': 'Thank you for your interest in our study, \'Selective Help!'
                        },
                        {
                            'text': 'Here\'s a quick summary of what\'s about to happen:'
                        },
                        {
                            'text': '1. Webcam Setup and Video Consent: First, we\'ll be checking that your webcam is working. Then you and your child will give your consent to participate in this research.'
                        },
                        {
                            'text': '2. Start the Study: When you click the \'Start the game!\' button, the study will begin! This study will take about 10 minutes in total.'
                        },
                        {
                            'text': 'Thank you so much for helping us with our science! We hope you and your child have fun.'
                        }
                    ],
                    'showPreviousButton': false
                },
                'video-config': {
                    'kind': 'exp-video-config',
                    'troubleshootingIntro': 'If you\'re having any trouble getting your webcam set up, please feel free to call the Social Learning Lab at (650) 498-7832 and we\'d be glad to help you out!'
                },
                'video-consent': {
                    "gdpr": false,
                    'kind': 'exp-lookit-video-consent',
                    'template': 'consent_005',
                    'PIName': 'Aneesa Conine-Nakano',
                    'institution': 'Stanford University',
                    'PIContact': 'Aneesa Conine-Nakano (aneesacn@stanford.edu) if you have any questions or inquiries about the study.',
                    'purpose': '',
                    'risk_statement': 'There are no expected risks if you participate in the study.',
                    'voluntary_participation': 'Participation in this study is entirely optional, and you are free to exit at any time.',
                    'payment': 'There are no costs to participating. There are also no known risks associated with this study beyond those of everyday life. Although this study will not benefit your child directly, it will add to our understanding of how children think in general. If indicated in the study description, you may be compensated for participating in this study; if this is not stated in the study description, then you will not receive any payment for your participation.',
                    'datause': 'The researchers and study staff follow federal and state laws to protect your privacy, so all of your information and research records will be kept confidential. The only exception to these procedures for maintaining confidentiality is that we are required by law to report to the appropriate authorities suspicion of harm to your child or to others. More information on how we keep your videos and data private can be found at lookit.mit.edu/faq.',
                    'research_rights_statement': 'The Institutional Review Board (IRB) of Stanford University has approved this research study. If you have questions regarding your rights as a research subject you may contact the IRB office at 650-723-2480, or by mail at Research Compliance Office, Stanford University, 1705 El Camino Real, Palo Alto, CA 94306.'
                },

                'positioning': {
                    'kind': 'exp-video-config-quality',
                    'title': 'Positioning',
                    'introText': 'It\'s time to get your child & check yourself out!',
                    'showRecordMenu': false,
                    'requireTestVideo': false,
                    'completedItemText': 'Got it!',
                    'instructionBlocks': [
                        {
                            'text': 'You and your child can sit in any position.',
                            'title': 'Get comfortable'
                        },
                        {
                            'text': 'Go ahead and get settled and use the webcam preview to make sure your child\'s whole face and torso are in view.',
                            'title': 'Take a few moments'
                        },
                        {
                            'text': 'Press the \'Next\' button down below if you and your child are in position and ready to go.',
                            'title': 'When you\'re ready'
                        }
                    ],
                    'nextButtonText': 'My child and I are in position and ready to start!',
                    'showPreviousButton': true,
                    'requireItemConfirmation': true,
                    'recordingInstructionText': ''
                },
                'start-recording': {
                    'kind': 'exp-lookit-start-recording',
                    'imageAnimation': 'spin',
                    'displayFullscreen': true
                },
                'stop-recording': {
                    'kind': 'exp-lookit-stop-recording',
                    'imageAnimation': 'spin',
                    'displayFullscreen': true
                },
                'email-survey': {
                    'kind': 'exp-lookit-survey',
                    'formSchema': {
                        'schema': {
                            'type': 'object',
                            'title': 'Thank you for your participation! Please provide your email for study compensation. Your email will only be used for compensation and nothing else.',
                            'properties': {
                                'Email': {
                                    'type': 'string',
                                    'title': 'Email',
                                    'required': true
                                }
                            }
                        }
                    },
                    'nextButtonText': 'Continue'
                },
                


    // Study video frame for condition 1A
                
               "study-video-1a": {
                    "kind": "exp-lookit-video",
                    "video": {
                        "source": [
                            {
                                "src": "CB1_1A.mp4",
                                "condition": "1",
                                "type": "mp4"
                            },
                            {
                                "src": "CB2_1A.mp4",
                                "condition": "2",
                                "type": "mp4"
                            },
                            {
                                "src": "CB3_1A.mp4",
                                "condition": "3",
                                "type": "mp4"
                            },
                            {
                                "src": "CB4_1A.mp4",
                                "condition": "4",
                                "type": "mp4"
                            },
                            {
                                "src": "CB5_1A.mp4",
                                "condition": "5",
                                "type": "mp4"
                            },
                            {
                                "src": "CB6_1A.mp4",
                                "condition": "6",
                                "type": "mp4"
                            },
                            {
                                "src": "CB7_1A.mp4",
                                "condition": "7",
                                "type": "mp4"
                            },
                            {
                                "src": "CB8_1A.mp4",
                                "condition": "8",
                                "type": "mp4"
                            }
                        ],
                        "position": "fill",
                        "loop": false
                    },
                    "autoProceed": true,
                    "requireVideoCount": 1,
                    "doRecording": true,
                    "parentTextBlock": {
                        "text": "<b>FOR PARENTS</b>: \n\nPlease let your children make their own choices! You can replay the prompt or help to control the mouse, but please do not choose for them. \n\nClick NEXT when prompted and/or after your child has responded.",
                        "fontSize": "x-large",
                        "css": {
                            "background-color": "#f8f3bf",
                            "width": "50vw",
                            "height": "16vh",
                            "margin": "auto",
                            "bottom": "2vh",
                            "right": "0",
                            "left": "0",
                            "position": "fixed",
                            "padding": "10px 25px",
                            "text-align": "center",
                            "display": "table-cell",
                            "vertical-align": "middle",
                            "border-radius": "15px"
                        }
                    },
                    "onWillStart": function() {
                        console.log('Starting Condition 1A video');
                    },
                    "onWillFinish": function() {
                        console.log('Finishing Condition 1A video');
                    },
                    "onVideoStarted": function(video) {
                        console.log('Now playing:', video.src);
                    }
                },
                                  
                                    
        // Test question frame (same for both conditions)
        
                // Test question frame (same for both conditions)
         
                "test-question": {
                    "kind": "exp-lookit-images-audio",
                    "images": [
                        {
                            "id": "background",
                            "src": "DV_Picture.png",
                            "position": "fill",
                            "nonChoiceOption": true
                        },
                        {
                            "id": "left-choice",
                            "src": "answer_rect_blank.png",
                            "left": 10,
                            "width": 40,
                            "top": 50,
                            "position": "left"
                        },
                        {
                            "id": "right-choice",
                            "src": "answer_rect_blank.png",
                            "left": 50,
                            "width": 40,
                            "top": 50,
                            "position": "right"
                        }
                    ],
                    "choiceRequired": true,
                    "parentTextBlock": {
                        "text": "<b>FOR PARENTS</b>: \n\nPlease let your children make their own choices! You can replay the prompt or help to control the mouse, but please do not choose for them. \n\nClick NEXT when prompted and/or after your child has responded.",
                        "fontSize": "x-large",
                        "css": {
                            "background-color": "#f8f3bf",
                            "width": "50vw",
                            "height": "16vh",
                            "margin": "auto",
                            "bottom": "2vh",
                            "right": "0",
                            "left": "0",
                            "position": "fixed",
                            "padding": "10px 25px",
                            "text-align": "center",
                            "display": "table-cell",
                            "vertical-align": "middle",
                            "border-radius": "15px"
                        }
                    },
                    "onChoiceSelected": function(choice) {
                        console.log('Choice selected:', choice);
                    }
                },
                
                
                "exit-survey": {
                    "kind": "exp-lookit-exit-survey",
                    "debriefing": {
                        "title": "Thank you for participating!",
                        "blocks": [
                            {
                                "title": "",
                                "text": "This research wouldn't be possible without awesome parents like you."
                            },
                            {
                                "title": "Some Background Information:",
                                "text": "Children begin as universal novices; once they start taking action in the world, they routinely achieve things they did not know they could. Being able to do things outside of one’s expectations is a joyful learning experience; it results in surprise and can spur learners on to further explore how they did it, and what else they may be able to do in the world. Here, we investigate how we can reliably evoke such experiences of “self-surprise,” and how they may relate to learners’ further learning and exploration of their capabilities. This investigation will contribute to our understanding of what sparks and enhances children’s desire to continue learning about themselves and the world."
                            },
                            {
                                "title": "Additional Resources:",
                                "text": "To learn more about this topic, you can check out some of the following works and resources:<br><a href='https://www.youtube.com/watch?v=y1KIVZw7Jxk' target='_blank'>TED Talk by Laura Schulz: The surprisingly logical minds of babies </a><br><a href='https://www.youtube.com/watch?v=muUbUspLgJ8' target='_blank'> Science, problem solving and play - Sara Baker</a>"
                            },
                            {
                                "title": "Compensation:",
                                "text": "To thank you for your participation, we'll be emailing you a $5 USD Amazon gift card - this should arrive in your inbox within the next week after we confirm your consent video and check that your child is in the age range for this study (If you don't hear from us by then, feel free to reach out!). If you participate again with another child in the age range, you'll receive one gift card per child."
                            },
                            {
                                "title": "Questions or Concerns:",
                                "text": "Please do not hesitate to contact Adani Abutto at aabutto@stanford.edu"
                            }
                        ]
                    }
                },
                

            },
            sequence: [
                'welcome',
                "study-video-1a",
                "test-question",
                'video-config',
                'positioning',
                'start-recording',
                'email-survey',
                'video-consent',
                "study-video",
                "test-question",
                'exit-survey',
                'stop-recording'
            ]
        };
    } else {
        return {
            frames: {
                // Start of 1b condition frames
                'welcome': {
                    'kind': 'exp-lookit-text',
                    'blocks': [
                        {
                            'title': 'Welcome!'
                        },
                        {
                            'text': 'Thank you for your interest in our study, \'Selective Help!'
                        },
                        {
                            'text': 'Here\'s a quick summary of what\'s about to happen:'
                        },
                        {
                            'text': '1. Webcam Setup and Video Consent: First, we\'ll be checking that your webcam is working. Then you and your child will give your consent to participate in this research.'
                        },
                        {
                            'text': '2. Start the Study: When you click the \'Start the game!\' button, the study will begin! This study will take about 10 minutes in total.'
                        },
                        {
                            'text': 'Thank you so much for helping us with our science! We hope you and your child have fun.'
                        }
                    ],
                    'showPreviousButton': false
                },
                'video-config': {
                    'kind': 'exp-video-config',
                    'troubleshootingIntro': 'If you\'re having any trouble getting your webcam set up, please feel free to call the Social Learning Lab at (650) 498-7832 and we\'d be glad to help you out!'
                },
                'video-consent': {
                    "gdpr": false,
                    'kind': 'exp-lookit-video-consent',
                    'template': 'consent_005',
                    'PIName': 'Aneesa Conine-Nakano',
                    'institution': 'Stanford University',
                    'PIContact': 'Aneesa Conine-Nakano (aneesacn@stanford.edu) if you have any questions or inquiries about the study.',
                    'purpose': '',
                    'risk_statement': 'There are no expected risks if you participate in the study.',
                    'voluntary_participation': 'Participation in this study is entirely optional, and you are free to exit at any time.',
                    'payment': 'There are no costs to participating. There are also no known risks associated with this study beyond those of everyday life. Although this study will not benefit your child directly, it will add to our understanding of how children think in general. If indicated in the study description, you may be compensated for participating in this study; if this is not stated in the study description, then you will not receive any payment for your participation.',
                    'datause': 'The researchers and study staff follow federal and state laws to protect your privacy, so all of your information and research records will be kept confidential. The only exception to these procedures for maintaining confidentiality is that we are required by law to report to the appropriate authorities suspicion of harm to your child or to others. More information on how we keep your videos and data private can be found at lookit.mit.edu/faq.',
                    'research_rights_statement': 'The Institutional Review Board (IRB) of Stanford University has approved this research study. If you have questions regarding your rights as a research subject you may contact the IRB office at 650-723-2480, or by mail at Research Compliance Office, Stanford University, 1705 El Camino Real, Palo Alto, CA 94306.'
                },

                'positioning': {
                    'kind': 'exp-video-config-quality',
                    'title': 'Positioning',
                    'introText': 'It\'s time to get your child & check yourself out!',
                    'showRecordMenu': false,
                    'requireTestVideo': false,
                    'completedItemText': 'Got it!',
                    'instructionBlocks': [
                        {
                            'text': 'You and your child can sit in any position.',
                            'title': 'Get comfortable'
                        },
                        {
                            'text': 'Go ahead and get settled and use the webcam preview to make sure your child\'s whole face and torso are in view.',
                            'title': 'Take a few moments'
                        },
                        {
                            'text': 'Press the \'Next\' button down below if you and your child are in position and ready to go.',
                            'title': 'When you\'re ready'
                        }
                    ],
                    'nextButtonText': 'My child and I are in position and ready to start!',
                    'showPreviousButton': true,
                    'requireItemConfirmation': true,
                    'recordingInstructionText': ''
                },
                'start-recording': {
                    'kind': 'exp-lookit-start-recording',
                    'imageAnimation': 'spin',
                    'displayFullscreen': true
                },
                'stop-recording': {
                    'kind': 'exp-lookit-stop-recording',
                    'imageAnimation': 'spin',
                    'displayFullscreen': true
                },
                'email-survey': {
                    'kind': 'exp-lookit-survey',
                    'formSchema': {
                        'schema': {
                            'type': 'object',
                            'title': 'Thank you for your participation! Please provide your email for study compensation, note your email will only be used for compensation and nothing else.',
                            'properties': {
                                'Email': {
                                    'type': 'string',
                                    'title': 'Email',
                                    'required': true
                                }
                            }
                        }
                    },
                    'nextButtonText': 'Continue'
                },
                
                
        // Study video frame for condition 1B
        
                "study-video-1b": {
                    "kind": "exp-lookit-video",
                    "video": {
                        "source": [
                            {
                                "src": "CB1_1B.mp4",
                                "condition": "1",
                                "type": "mp4"
                            },
                            {
                                "src": "CB2_1B.mp4",
                                "condition": "2",
                                "type": "mp4"
                            },
                            {
                                "src": "CB3_1B.mp4",
                                "condition": "3",
                                "type": "mp4"
                            },
                            {
                                "src": "CB4_1B.mp4",
                                "condition": "4",
                                "type": "mp4"
                            },
                            {
                                "src": "CB5_1B.mp4",
                                "condition": "5",
                                "type": "mp4"
                            },
                            {
                                "src": "CB6_1B.mp4",
                                "condition": "6",
                                "type": "mp4"
                            },
                            {
                                "src": "CB7_1B.mp4",
                                "condition": "7",
                                "type": "mp4"
                            },
                            {
                                "src": "CB8_1B.mp4",
                                "condition": "8",
                                "type": "mp4"
                            }
                        ],
                        "position": "fill",
                        "loop": false
                    },
                    "autoProceed": true,
                    "requireVideoCount": 1,
                    "doRecording": true,
                    "parentTextBlock": {
                        "text": "<b>FOR PARENTS</b>: \n\nPlease let your children make their own choices! You can replay the prompt or help to control the mouse, but please do not choose for them. \n\nClick NEXT when prompted and/or after your child has responded.",
                        "fontSize": "x-large",
                        "css": {
                            "background-color": "#f8f3bf",
                            "width": "50vw",
                            "height": "16vh",
                            "margin": "auto",
                            "bottom": "2vh",
                            "right": "0",
                            "left": "0",
                            "position": "fixed",
                            "padding": "10px 25px",
                            "text-align": "center",
                            "display": "table-cell",
                            "vertical-align": "middle",
                            "border-radius": "15px"
                        }
                    },
                    "onWillStart": function() {
                        console.log('Starting Condition 1B video');
                    },
                    "onWillFinish": function() {
                        console.log('Finishing Condition 1B video');
                    },
                    "onVideoStarted": function(video) {
                        console.log('Now playing:', video.src);
                    }
                },
                   
                    
         // Test question frame (same for both conditions)
         
                "test-question": {
                    "kind": "exp-lookit-images-audio",
                    "images": [
                        {
                            "id": "background",
                            "src": "DV_Picture.png",
                            "position": "fill",
                            "nonChoiceOption": true
                        },
                        {
                            "id": "left-choice",
                            "src": "answer_rect_blank.png",
                            "left": 10,
                            "width": 40,
                            "top": 50,
                            "position": "left"
                        },
                        {
                            "id": "right-choice",
                            "src": "answer_rect_blank.png",
                            "left": 50,
                            "width": 40,
                            "top": 50,
                            "position": "right"
                        }
                    ],
                    "choiceRequired": true,
                    "parentTextBlock": {
                        "text": "<b>FOR PARENTS</b>: \n\nPlease let your children make their own choices! You can replay the prompt or help to control the mouse, but please do not choose for them. \n\nClick NEXT when prompted and/or after your child has responded.",
                        "fontSize": "x-large",
                        "css": {
                            "background-color": "#f8f3bf",
                            "width": "50vw",
                            "height": "16vh",
                            "margin": "auto",
                            "bottom": "2vh",
                            "right": "0",
                            "left": "0",
                            "position": "fixed",
                            "padding": "10px 25px",
                            "text-align": "center",
                            "display": "table-cell",
                            "vertical-align": "middle",
                            "border-radius": "15px"
                        }
                    },
                    "onChoiceSelected": function(choice) {
                        console.log('Choice selected:', choice);
                    }
                },
                
                "exit-survey": {
                    "kind": "exp-lookit-exit-survey",
                    "debriefing": {
                        "title": "Thank you for participating!",
                        "blocks": [
                            {
                                "title": "",
                                "text": "This research wouldn't be possible without awesome parents like you."
                            },
                            {
                                "title": "Some Background Information:",
                                "text": ""
                            },
                            {
                                "title": "Additional Resources:",
                                "text": "To learn more about this topic, you can check out some of the following works and resources:"
                            },
                            {
                                "title": "Compensation:",
                                "text": "To thank you for your participation, we'll be emailing you a $5 USD Amazon gift card - this should arrive in your inbox within the next week after we confirm your consent video and check that your child is in the age range for this study (If you don't hear from us by then, feel free to reach out!). If you participate again with another child in the age range, you'll receive one gift card per child."
                            },
                            {
                                "title": "Questions or Concerns:",
                                "text": "Please do not hesitate to contact Aneesa Conine-Nakano at aneesacn@stanford.edu"
                            }
                        ]
                    }
                }

                // Using same sequence here
            },
            sequence: [
                'welcome',
                "study-video-1b",
                "test-question",
                'video-config',
                'positioning',
                'start-recording',
                'email-survey',
                'video-consent',
                'exit-survey',
                'stop-recording'
            ]
        };
    }
}