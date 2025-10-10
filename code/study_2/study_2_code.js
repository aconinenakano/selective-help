function generateProtocol(child, pastSessions) {

    // Counter for the screener question attempts
    let screenerAttempts = 0;

    return {
        frames: {
            // --- Standard Setup & Consent Frames ---
            'welcome': {
                'kind': 'exp-lookit-text',
                'blocks': [{
                    'title': 'Welcome to the study!' // <-- TODO: Update study title
                }, {
                    'text': 'Thank you for your interest in our study!'
                }, {
                    'text': 'Here\'s a quick summary of what\'s about to happen:'
                }, {
                    'text': '1. Webcam Setup and Video Consent: First, we\'ll be checking that your webcam is working. Then you and your child will give your consent to participate in this research.'
                }, {
                    'text': '2. Start the Study: When you click the \'Start the game!\' button, the study will begin! This study will take about 5 minutes in total.'
                }, {
                    'text': 'Thank you so much for helping us with our science! We hope you and your child have fun.'
                }],
                'showPreviousButton': false
            },
            'video-config': {
                'kind': 'exp-video-config',
                'troubleshootingIntro': 'If you\'re having any trouble getting your webcam set up, please feel free to call the Social Learning Lab at (650) 498-7832 and we\'d be glad to help you out!'
            },
            'video-consent': {
                'kind': 'exp-lookit-video-consent',
                'template': 'consent_005',
                'PIName': 'Aneesa Conine-Nakano',
                'institution': 'Stanford University',
                'PIContact': 'Aneesa Conine-Nakano (aneesacn@stanford.edu)',
                // ... (keeping other consent fields the same as 1a/1b)
            },
            'positioning': {
                'kind': 'exp-video-config-quality'
                // ... (keeping positioning frame the same as 1a/1b)
            },
            'start-recording': {
                'kind': 'exp-lookit-start-recording'
            },

            // --- Study-Specific Frames from your Outline ---

            'welcome-block': {
                'kind': 'exp-lookit-video',
                'video': {
                    'source': 'welcome'
                },
                'backgroundColor': 'black',
                'autoProceed': true,
                'doRecording': true,
                'baseDir': 'https://raw.githubusercontent.com/aconinenakano/selective-help/main',
                'videoTypes': ['mp4']
            },

            'intro-block': {
                'kind': 'exp-lookit-video',
                'video': {
                    'source': 'SH_study2_intro'
                },
                'backgroundColor': 'black',
                'autoProceed': true,
                'doRecording': true,
                'baseDir': 'https://raw.githubusercontent.com/aconinenakano/selective-help/main',
                'videoTypes': ['mp4']
            },

            // --- Screener Sequence with Branching Logic ---
            'screener-sequence': {
                'kind': 'choice',
                'frameList': [
                    'screener-choice',
                    'screener-feedback'
                ],
                'next': function(frame, expData) {
                    screenerAttempts++;
                    // Get the ID of the screener-choice frame within this sequence
                    const choiceFrameId = this.frameList[0];
                    const lastChoice = expData[choiceFrameId].selectedChoice;

                    if (lastChoice === 'left-choice') { // Correct answer
                        return 'main-block';
                    } else { // Incorrect answer
                        if (screenerAttempts < 2) {
                            return this.id; // Repeat this whole sequence
                        } else {
                            return 'main-block'; // Incorrect twice, move on anyway
                        }
                    }
                }
            },

            'screener-choice': {
                'kind': 'exp-lookit-images-audio',
                'images': [{
                    "id": 'background',
                    "src": 'SH2_screenerchoice.png',
                    "left": 0, "width": 100, "top": 0, "height": 100,
                    "nonChoiceOption": true
                }, {
                    "id": 'left-choice', // Correct
                    "src": 'answer_rect_blank.png', // Transparent clickable area
                    "left": 10, "width": 35, "top": 25, "height": 50,
                    "feedbackAudio": "this_one"
                }, {
                    "id": 'right-choice', // Incorrect
                    "src": 'answer_rect_blank.png', // Transparent clickable area
                    "left": 55, "width": 35, "top": 25, "height": 50,
                    "feedbackAudio": "this_one"
                }],
                'audio': 'screener_question',
                'baseDir': 'https://raw.githubusercontent.com/aconinenakano/selective-help/main',
                'audioTypes': ['m4a'],
                'choiceRequired': true,
                'doRecording': true,
                'onChoice': function(selectedImages) {
                    this.data.selectedChoice = selectedImages[0].id;
                }
            },

            'screener-feedback': {
                'kind': 'exp-lookit-video',
                'backgroundColor': 'black',
                'autoProceed': true,
                'doRecording': true,
                'baseDir': 'https://raw.githubusercontent.com/aconinenakano/selective-help/main',
                'videoTypes': ['mp4'],
                'generateProperties': 'function(expData, sequence) { var choiceFrameId = sequence[sequence.length - 1]; var choice = expData[choiceFrameId].selectedChoice; var videoSource = ""; if (choice === "left-choice") { videoSource = "screener_correct"; } else { videoSource = "screener_incorrect"; } return { video: { source: videoSource } }; }'
            },
            // --- End of Screener Sequence ---

            'main-block': {
                'sampler': 'random-parameter-set',
                'kind': 'choice',
                'frameList': [{
                    'kind': 'exp-lookit-video',
                    'video': {
                        'source': 'STUDY_VIDEO'
                    },
                    'backgroundColor': 'black',
                    'autoProceed': true,
                    'doRecording': true,
                    'baseDir': 'https://raw.githubusercontent.com/aconinenakano/selective-help/main',
                    'videoTypes': ['mp4']
                }],
                'parameterSets': [
                    { 'STUDY_VIDEO': 'SH_study2_cb1' },
                    { 'STUDY_VIDEO': 'SH_study2_cb2' }
                ]
            },

            'dv-block': {
                'kind': 'exp-lookit-video',
                'video': {
                    'source': 'SH_study2_dv'
                },
                'backgroundColor': 'black',
                'autoProceed': true,
                'doRecording': true,
                'baseDir': 'https://raw.githubusercontent.com/aconinenakano/selective-help/main',
                'videoTypes': ['mp4']
            },

            'dv-choice': {
                'kind': 'exp-lookit-images-audio',
                'images': [{
                    "id": 'background', "src": 'SH2_dvchoice.png', "left": 0, "width": 100, "top": 0, "height": 100, "nonChoiceOption": true
                }, {
                    "id": 'left-choice-zoe', "src": 'answer_rect_blank.png', "left": 10, "width": 35, "top": 25, "height": 50, "feedbackAudio": "zoe"
                }, {
                    "id": 'right-choice-mia', "src": 'answer_rect_blank.png', "left": 55, "width": 35, "top": 25, "height": 50, "feedbackAudio": "mia"
                }],
                'audio': 'dv_audio',
                'baseDir': 'https://raw.githubusercontent.com/aconinenakano/selective-help/main',
                'audioTypes': ['mov', 'm4a', 'mp3'],
                'choiceRequired': true,
                'doRecording': true
            },

            'memory-choice-1': {
                'kind': 'exp-lookit-images-audio',
                'images': [{
                    "id": 'background', "src": 'SH2_mc1.png', "left": 0, "width": 100, "top": 0, "height": 100, "nonChoiceOption": true
                },
                // --- TODO: Update coordinates for each clickable student area ---
                { "id": 'student-1', "src": 'answer_rect_blank.png', "left": 5, "width": 20, "top": 30, "height": 40, "feedbackAudio": "this_student" },
                { "id": 'student-2', "src": 'answer_rect_blank.png', "left": 30, "width": 20, "top": 30, "height": 40, "feedbackAudio": "this_student" },
                { "id": 'student-3', "src": 'answer_rect_blank.png', "left": 55, "width": 20, "top": 30, "height": 40, "feedbackAudio": "this_student" }
                ],
                'audio': 'mc_1',
                'baseDir': 'https://raw.githubusercontent.com/aconinenakano/selective-help/main',
                'audioTypes': ['m4a'],
                'choiceRequired': false, // Allows checkbox-style selection
                'doRecording': true
            },

            'memory-choice-2': {
                'kind': 'exp-lookit-images-audio',
                'images': [{
                    "id": 'background', "src": 'SH2_mc2.png', "left": 0, "width": 100, "top": 0, "height": 100, "nonChoiceOption": true
                },
                // --- TODO: Update coordinates for each clickable student area ---
                { "id": 'student-a', "src": 'answer_rect_blank.png', "left": 5, "width": 20, "top": 30, "height": 40, "feedbackAudio": "this_student" },
                { "id": 'student-b', "src": 'answer_rect_blank.png', "left": 30, "width": 20, "top": 30, "height": 40, "feedbackAudio": "this_student" },
                { "id": 'student-c', "src": 'answer_rect_blank.png', "left": 55, "width": 20, "top": 30, "height": 40, "feedbackAudio": "this_student" }
                ],
                'audio': 'mc_2',
                'baseDir': 'https://raw.githubusercontent.com/aconinenakano/selective-help/main',
                'audioTypes': ['m4a'],
                'choiceRequired': false, // Allows checkbox-style selection
                'doRecording': true
            },

            'exit-block': {
                'kind': 'exp-lookit-video',
                'video': {
                    'source': 'ending'
                },
                'backgroundColor': 'black',
                'autoProceed': true,
                'doRecording': true,
                'baseDir': 'https://raw.githubusercontent.com/aconinenakano/selective-help/main',
                'videoTypes': ['mp4']
            },

            // --- Standard Exit & Survey Frames ---
            'email-survey': {
                'kind': 'exp-lookit-survey',
                // ... (keeping email survey frame the same as 1a/1b)
            },
            'exit-survey': {
                'kind': 'exp-lookit-exit-survey',
                 // ... (keeping exit survey frame the same as 1a/1b, you may want to update debriefing text)
            },
            'stop-recording': {
                'kind': 'exp-lookit-stop-recording'
            }
        },

        // --- The final sequence of frames for the study ---
        'sequence': [
            'welcome',
            'video-config',
            'video-consent',
            'positioning',
            'start-recording',
            'welcome-block',
            'intro-block',
            'screener-sequence',
            'main-block',
            'dv-block',
            'dv-choice',
            'memory-choice-1',
            'memory-choice-2',
            'exit-block',
            'email-survey',
            'exit-survey',
            'stop-recording'
        ]
    };
}