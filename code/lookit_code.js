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
                            'text': 'Thank you for your interest in our study, \'Learning from a helping hand!'
                        },
                        {
                            'text': 'Here\'s a quick summary of what\'s about to happen:'
                        },
                        {
                            'text': '1. Webcam Setup and Video Consent: First, we\'ll be checking that your webcam is working. Then you and your child will give your consent to participate in this research.'
                        },
                        {
                            'text': '2. Start the Study: When you click the \'Start the game!\' button, the study will begin! This study will take about 5 minutes in total.'
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
                
                'video-consent': {
                    "gdpr": false,
                    'kind': 'exp-lookit-video-consent',
                    'template': 'consent_005',
                    'PIName': 'Aneesa Conine-Nakano',
                    'institution': 'Stanford University',
                    'PIContact': 'Aneesa Conine-Nakano (aneesacn@stanford.edu) if you have any questions or inquiries about the study.',
                    'purpose': 'Children often receive help from the people around them, but we know less about what they learn from these helping behaviors. How do young children use helping interactions to understand others and the tasks they face? This research explores how children learn to decide which tasks to try, assess others’ abilities, and recognize who might need help by observing acts of helping.',
                    'risk_statement': 'There are no expected risks if you participate in the study.',
                    'voluntary_participation': 'Participation in this study is entirely optional, and you are free to exit at any time.',
                    'payment': 'There are no costs to participating. There are also no known risks associated with this study beyond those of everyday life. Although this study will not benefit your child directly, it will add to our understanding of how children think in general. If indicated in the study description, you may be compensated for participating in this study; if this is not stated in the study description, then you will not receive any payment for your participation.',
                    'datause': 'The researchers and study staff follow federal and state laws to protect your privacy, so all of your information and research records will be kept confidential. The only exception to these procedures for maintaining confidentiality is that we are required by law to report to the appropriate authorities suspicion of harm to your child or to others. More information on how we keep your videos and data private can be found at lookit.mit.edu/faq.',
                    'research_rights_statement': 'The Institutional Review Board (IRB) of Stanford University has approved this research study. If you have questions regarding your rights as a research subject you may contact the IRB office at 650-723-2480, or by mail at Research Compliance Office, Stanford University, 1705 El Camino Real, Palo Alto, CA 94306.'
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
                
                
                'welcome-video': {
                    'kind': 'exp-lookit-video',
                    'video': {
                        'top': 0,
                        'left': 0,
                        'width': 100,
                        'source': 'Welcome_Video',
                        'loop': false
                    },
                    'backgroundColor': 'black',
                    'autoProceed': true,
                    'parentTextBlock': {
                        'text': '<b>FOR PARENTS</b>: \n\nPlease allow your child to watch the welcome video carefully.',
                        'fontSize': 'x-large',
                        'css': {
                            'background-color': '#f8f3bf',
                            'width': '50vw',
                            'height': '16vh',
                            'margin': 'auto',
                            'bottom': '2vh',
                            'right': '0',
                            'left': '0',
                            'position': 'fixed',
                            'padding': '10px 25px',
                            'text-align': 'center',
                            'display': 'table-cell',
                            'vertical-align': 'middle',
                            'border-radius': '15px'
                        }
                    },
                    'showPreviousButton': false,
                    'showReplayButton': true,
                    'doRecording': true,
                    'baseDir': 'https://raw.githubusercontent.com/aconinenakano/selective-help/main',
                    'videoTypes': ['mp4']
                },
                
                
                'study-video': {
                    'sampler': 'random-parameter-set',
                    'kind': 'choice',
                    'frameList': [{
                        'kind': 'exp-lookit-video',
                        'video': {
                            'top': 0,
                            'left': 0,
                            'width': 100,
                            'source': 'STUDY_VIDEO',
                            'loop': false
                        },
                        'backgroundColor': 'black',
                        'autoProceed': true,
                        'parentTextBlock': {
                            'text': '<b>FOR PARENTS</b>: \n\nPlease allow your child to answer on their own and avoid guiding or influencing their thoughts about the video.',
                            'fontSize': 'x-large',
                            'css': {
                                'background-color': '#f8f3bf',
                                'width': '50vw',
                                'height': '16vh',
                                'margin': 'auto',
                                'bottom': '2vh',
                                'right': '0',
                                'left': '0',
                                'position': 'fixed',
                                'padding': '10px 25px',
                                'text-align': 'center',
                                'display': 'table-cell',
                                'vertical-align': 'middle',
                                'border-radius': '15px'
                            }
                        },
                        'showPreviousButton': false,
                        'showReplayButton': true,
                        'doRecording': true,
                        'baseDir': 'https://raw.githubusercontent.com/aconinenakano/selective-help/main',
                        'videoTypes': ['mp4'],
                        'onInit': function(protocol, frame, participant) {
                            console.log('Selected video:', frame.video.source);
                        },
                        'onWillStart': function() {
                            console.log('Starting video playback:', this.video.source);
                        },
                        'onVideoStarted': function(video) {
                            console.log('Now playing video:', this.video.source);
                        },
                        'onVideoCompleted': function() {
                            console.log('Completed video:', this.video.source);
                        }
                    }],
                    'parameterSets': [
                        { 'STUDY_VIDEO': 'CB1_1A' },
                        { 'STUDY_VIDEO': 'CB2_1A' },
                        { 'STUDY_VIDEO': 'CB3_1A' },
                        { 'STUDY_VIDEO': 'CB4_1A' },
                        { 'STUDY_VIDEO': 'CB5_1A' },
                        { 'STUDY_VIDEO': 'CB6_1A' },
                        { 'STUDY_VIDEO': 'CB7_1A' },
                        { 'STUDY_VIDEO': 'CB8_1A' }
                    ]
                },
                
                'test-question': {
                    'kind': 'exp-lookit-images-audio',
                    'images': [
                        {
                            "id": 'background',
                            "src": 'DV_Picture.png',
                            "left": 0,
                            "width": 100,
                            "top": 0,
                            "height": 100,
                            'maximizeDisplay': true,
                            "nonChoiceOption": true
                        },
                        {
                            "id": 'left-choice',
                            "src": 'answer_rect_blank.png',
                            "left": 11.5,
                            "width": 30,
                            "top": 33,
                            "right": 11.5,
                            "height": 60,
                            "feedbackAudio": "casey"
                        },
                        {
                            "id": 'right-choice',
                            "src": 'answer_rect_blank.png',
                            "left": 68,
                            "width": 30,
                            "top": 33,
                            "right": 67.5,
                            "height": 60,
                            "feedbackAudio": "alex"
                        }
                    ],
                    'audio': 'click_on_your_answer',
                    'audioTypes': [
                        'mp3',
                        'ogg'
                    ],
                    'showReplayButton': true,
                    'choiceRequired': true,
                    'backgroundColor': 'black',
                    'pageColor': 'black',
                    'doRecording': true,
                    'baseDir': 'https://raw.githubusercontent.com/aconinenakano/selective-help/main',
                    'parentTextBlock': {
                        'text': '<b>FOR PARENTS</b>: \n\nPlease allow your child to answer on their own and avoid guiding or influencing their thoughts about the video.',
                    },
                },
                
                'exit-video': {
                    'kind': 'exp-lookit-video',
                    'video': {
                        'top': 0,
                        'left': 0,
                        'width': 100,
                        'source': 'Exit_Video',
                        'loop': false
                    },
                    'backgroundColor': 'black',
                    'autoProceed': true,
                    'parentTextBlock': {
                        'text': '<b>FOR PARENTS</b>: \n\nThank you for completing the study!',
                        'fontSize': 'x-large',
                        'css': {
                            'background-color': '#f8f3bf',
                            'width': '50vw',
                            'height': '16vh',
                            'margin': 'auto',
                            'bottom': '2vh',
                            'right': '0',
                            'left': '0',
                            'position': 'fixed',
                            'padding': '10px 25px',
                            'text-align': 'center',
                            'display': 'table-cell',
                            'vertical-align': 'middle',
                            'border-radius': '15px'
                        }
                    },
                    'showPreviousButton': false,
                    'showReplayButton': true,
                    'doRecording': true,
                    'baseDir': 'https://raw.githubusercontent.com/aconinenakano/selective-help/main',
                    'videoTypes': ['mp4']
                },
                
                "exit-survey": {
                    "kind": "exp-lookit-exit-survey",
                    "debriefing": {
                        "title": "Thank you for participating!",
                        "blocks": [
                            {
                                "title": "",
                                "text": "</b><br>This research wouldn't be possible without awesome families like yours!</b>"
                            },
                            {
                                "title": "Some Background Information:",
                                "text": "Children often receive help from the people around them, but we know less about what they learn from these helping behaviors. How do young children use helping interactions to understand others and the tasks they face?\n\nIn this study, your child watched a teacher helping one student with a puzzle. Afterwards, children were asked either how difficult the puzzle was or how skilled the student was at puzzles. If children interpret help as a sign of task difficulty, we expect them to rate the puzzle the teacher helped with as harder. If children interpret help as a sign of a student's ability, we expect them to rate the student who received help as less skilled at puzzles.\n\nThis research will shed light on how children can learn about what tasks to attempt and evaluate others' abilities through observing helping interactions."
                            },
                            {
                                "title": "Additional Resources:",
                                "text": "To learn more about this topic, you can check out some of the following research papers:<br><a href='https://direct.mit.edu/opmi/article/doi/10.1162/opmi_a_00129/120682' target='_blank'>Toddlers Prefer Agents Who Help Those Facing Harder Tasks</a><br><a href='https://pmc.ncbi.nlm.nih.gov/articles/PMC7244365/' target='_blank'>When Helping Hurts: Children Think Groups That Receive Help Are Less Smart</a>"
                            },
                            {
                                "title": "Compensation:",
                                "text": "To thank you for your participation, we'll be emailing you a $5 USD Amazon gift card - this should arrive in your CHS inbox within the next week after we confirm your consent video and check that your child is in the age range for this study (If you don't hear from us by then, feel free to reach out!). If you participate again with another child in the age range, you'll receive one gift card per child."
                            },
                            {
                                "title": "Questions or Concerns:",
                                "text": "Please do not hesitate to contact Aneesa Conine-Nakano at aneesacn@stanford.edu."
                            }
                        ]
                    }
                }
            },
            
            sequence: [
                'welcome',
                'video-config',
                'video-consent',
                'positioning',
                'start-recording',
                'welcome-video',
                'study-video',
                'test-question',
                'exit-video',
                'exit-survey',
                'email-survey',
                'stop-recording'
            ]
        };
        
        
    } else {
        return {
            frames: {
                'welcome': {
                    'kind': 'exp-lookit-text',
                    'blocks': [
                        {
                            'title': 'Welcome!'
                        },
                        {
                            'text': 'Thank you for your interest in our study, \'Learning from a helping hand!'
                        },
                        {
                            'text': 'Here\'s a quick summary of what\'s about to happen:'
                        },
                        {
                            'text': '1. Webcam Setup and Video Consent: First, we\'ll be checking that your webcam is working. Then you and your child will give your consent to participate in this research.'
                        },
                        {
                            'text': '2. Start the Study: When you click the \'Start the game!\' button, the study will begin! This study will take about 5 minutes in total.'
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
                
                'video-consent': {
                    "gdpr": false,
                    'kind': 'exp-lookit-video-consent',
                    'template': 'consent_005',
                    'PIName': 'Aneesa Conine-Nakano',
                    'institution': 'Stanford University',
                    'PIContact': 'Aneesa Conine-Nakano (aneesacn@stanford.edu) if you have any questions or inquiries about the study.',
                    'purpose': 'Children often receive help from the people around them, but we know less about what they learn from these helping behaviors. How do young children use helping interactions to understand others and the tasks they face? This research explores how children learn to decide which tasks to try, assess others’ abilities, and recognize who might need help by observing acts of helping.',
                    'risk_statement': 'There are no expected risks if you participate in the study.',
                    'voluntary_participation': 'Participation in this study is entirely optional, and you are free to exit at any time.',
                    'payment': 'There are no costs to participating. There are also no known risks associated with this study beyond those of everyday life. Although this study will not benefit your child directly, it will add to our understanding of how children think in general. If indicated in the study description, you may be compensated for participating in this study; if this is not stated in the study description, then you will not receive any payment for your participation.',
                    'datause': 'The researchers and study staff follow federal and state laws to protect your privacy, so all of your information and research records will be kept confidential. The only exception to these procedures for maintaining confidentiality is that we are required by law to report to the appropriate authorities suspicion of harm to your child or to others. More information on how we keep your videos and data private can be found at lookit.mit.edu/faq.',
                    'research_rights_statement': 'The Institutional Review Board (IRB) of Stanford University has approved this research study. If you have questions regarding your rights as a research subject you may contact the IRB office at 650-723-2480, or by mail at Research Compliance Office, Stanford University, 1705 El Camino Real, Palo Alto, CA 94306.'
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
                
                'welcome-video': {
                    'kind': 'exp-lookit-video',
                    'video': {
                        'top': 0,
                        'left': 0,
                        'width': 100,
                        'source': 'Welcome_Video',
                        'loop': false
                    },
                    'backgroundColor': 'black',
                    'autoProceed': true,
                    'parentTextBlock': {
                        'text': '<b>FOR PARENTS</b>: \n\nPlease allow your child to watch the welcome video carefully.',
                        'fontSize': 'x-large',
                        'css': {
                            'background-color': '#f8f3bf',
                            'width': '50vw',
                            'height': '16vh',
                            'margin': 'auto',
                            'bottom': '2vh',
                            'right': '0',
                            'left': '0',
                            'position': 'fixed',
                            'padding': '10px 25px',
                            'text-align': 'center',
                            'display': 'table-cell',
                            'vertical-align': 'middle',
                            'border-radius': '15px'
                        }
                    },
                    'showPreviousButton': false,
                    'showReplayButton': true,
                    'doRecording': true,
                    'baseDir': 'https://raw.githubusercontent.com/aconinenakano/selective-help/main',
                    'videoTypes': ['mp4']
                },
                
                
               'study-video': {
                    'sampler': 'random-parameter-set',
                    'kind': 'choice',
                    'frameList': [{
                        'kind': 'exp-lookit-video',
                        'video': {
                            'top': 0,
                            'left': 0,
                            'width': 100,
                            'source': 'STUDY_VIDEO',
                            'loop': false
                        },
                        'backgroundColor': 'black',
                        'autoProceed': true,
                        'parentTextBlock': {
                            'text': '<b>FOR PARENTS</b>: \n\nPlease allow your child to answer on their own and avoid guiding or influencing their thoughts about the video.',
                            'fontSize': 'x-large',
                            'css': {
                                'background-color': '#f8f3bf',
                                'width': '50vw',
                                'height': '16vh',
                                'margin': 'auto',
                                'bottom': '2vh',
                                'right': '0',
                                'left': '0',
                                'position': 'fixed',
                                'padding': '10px 25px',
                                'text-align': 'center',
                                'display': 'table-cell',
                                'vertical-align': 'middle',
                                'border-radius': '15px'
                            }
                        },
                        'showPreviousButton': false,
                        'showReplayButton': true,
                        'doRecording': true,
                        'baseDir': 'https://raw.githubusercontent.com/aconinenakano/selective-help/main',
                        'videoTypes': ['mp4'],
                        'onInit': function(protocol, frame, participant) {
                            console.log('Selected video:', frame.video.source);
                        },
                        'onWillStart': function() {
                            console.log('Starting video playback:', this.video.source);
                        },
                        'onVideoStarted': function(video) {
                            console.log('Now playing video:', this.video.source);
                        },
                        'onVideoCompleted': function() {
                            console.log('Completed video:', this.video.source);
                        }
                    }],
                    'parameterSets': [
                        { 'STUDY_VIDEO': 'CB1_1B' },
                        { 'STUDY_VIDEO': 'CB2_1B' },
                        { 'STUDY_VIDEO': 'CB3_1B' },
                        { 'STUDY_VIDEO': 'CB4_1B' },
                        { 'STUDY_VIDEO': 'CB5_1B' },
                        { 'STUDY_VIDEO': 'CB6_1B' },
                        { 'STUDY_VIDEO': 'CB7_1B' },
                        { 'STUDY_VIDEO': 'CB8_1B' }
                    ]
                },
                
                
                
                'test-question': {
                    'kind': 'exp-lookit-images-audio',
                    'images': [
                        {
                            "id": 'background',
                            "src": 'DV_Picture.png',
                            "left": 0,
                            "width": 100,
                            "top": 0,
                            "height": 100,
                            'maximizeDisplay': true,
                            "nonChoiceOption": true
                        },
                        {
                            "id": 'left-choice',
                            "src": 'answer_rect_blank.png',
                            "left": 11.5,
                            "width": 30,
                            "top": 33,
                            "right": 11.5,
                            "height": 60,
                            "feedbackAudio": "casey"
                        },
                        {
                            "id": 'right-choice',
                            "src": 'answer_rect_blank.png',
                            "left": 68,
                            "width": 30,
                            "top": 33,
                            "right": 67.5,
                            "height": 60,
                            "feedbackAudio": "alex"
                        }
                    ],
                    'audio': 'click_on_your_answer',
                    'audioTypes': [
                        'mp3',
                        'ogg'
                    ],
                    'showReplayButton': true,
                    'choiceRequired': true,
                    'backgroundColor': 'black',
                    'pageColor': 'black',
                    'doRecording': true,
                    'baseDir': 'https://raw.githubusercontent.com/aconinenakano/selective-help/main',
                    'parentTextBlock': {
                        'text': '<b>FOR PARENTS</b>: \n\nPlease allow your child to answer on their own and avoid guiding or influencing their thoughts about the video.',
                    },
                },
                
                'exit-video': {
                    'kind': 'exp-lookit-video',
                    'video': {
                        'top': 0,
                        'left': 0,
                        'width': 100,
                        'source': 'Exit_Video',
                        'loop': false
                    },
                    'backgroundColor': 'black',
                    'autoProceed': true,
                    'parentTextBlock': {
                        'text': '<b>FOR PARENTS</b>: \n\nThank you for completing the study!',
                        'fontSize': 'x-large',
                        'css': {
                            'background-color': '#f8f3bf',
                            'width': '50vw',
                            'height': '16vh',
                            'margin': 'auto',
                            'bottom': '2vh',
                            'right': '0',
                            'left': '0',
                            'position': 'fixed',
                            'padding': '10px 25px',
                            'text-align': 'center',
                            'display': 'table-cell',
                            'vertical-align': 'middle',
                            'border-radius': '15px'
                        }
                    },
                    'showPreviousButton': false,
                    'showReplayButton': true,
                    'doRecording': true,
                    'baseDir': 'https://raw.githubusercontent.com/aconinenakano/selective-help/main',
                    'videoTypes': ['mp4']
                },
                
                
                "exit-survey": {
                    "kind": "exp-lookit-exit-survey",
                    "debriefing": {
                        "title": "Thank you for participating!",
                        "blocks": [
                            {
                                "title": "",
                                "text": "</b><br>This research wouldn't be possible without awesome families like yours!</b>"
                            },
                            {
                                "title": "Some Background Information:",
                                "text": "Children often receive help from the people around them, but we know less about what they learn from these helping behaviors. How do young children use helping interactions to understand others and the tasks they face?\n\nIn this study, your child watched a teacher helping one student with a puzzle. Afterwards, children were asked either how difficult the puzzle was or how skilled the student was at puzzles. If children interpret help as a sign of task difficulty, we expect them to rate the puzzle the teacher helped with as harder. If children interpret help as a sign of a student's ability, we expect them to rate the student who received help as less skilled at puzzles.\n\nThis research will shed light on how children can learn about what tasks to attempt and evaluate others' abilities through observing helping interactions."
                            },
                            {
                                "title": "Additional Resources:",
                                "text": "To learn more about this topic, you can check out some of the following research papers:<br><a href='https://direct.mit.edu/opmi/article/doi/10.1162/opmi_a_00129/120682' target='_blank'>Toddlers Prefer Agents Who Help Those Facing Harder Tasks</a><br><a href='https://pmc.ncbi.nlm.nih.gov/articles/PMC7244365/' target='_blank'>When Helping Hurts: Children Think Groups That Receive Help Are Less Smart</a>"
                            },
                            {
                                "title": "Compensation:",
                                "text": "To thank you for your participation, we'll be emailing you a $5 USD Amazon gift card - this should arrive in your CHS inbox within the next week after we confirm your consent video and check that your child is in the age range for this study (If you don't hear from us by then, feel free to reach out!). If you participate again with another child in the age range, you'll receive one gift card per child."
                            },
                            {
                                "title": "Questions or Concerns:",
                                "text": "Please do not hesitate to contact Aneesa Conine-Nakano at aneesacn@stanford.edu."
                            }
                        ]
                    }
                },
                
                'stop-recording': {
                    'kind': 'exp-lookit-stop-recording',
                    'imageAnimation': 'spin',
                    'displayFullscreen': true
                }
            },
            
            sequence: [
                'welcome',
                'video-config',
                'video-consent',
                'positioning',
                'start-recording',
                'welcome-video',
                'study-video',
                'exit-video',
                'test-question',
                'email-survey',
                'exit-survey',
                'stop-recording'
            ]
        };
    }
}